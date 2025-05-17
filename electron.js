const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
    contextIsolation: false,
	nodeIntegration: false, // ✅ make sure this is false (unless you need it)
    enableRemoteModule: false, // optional
    javascript: true // ✅ < this is NOT required - JavaScript is enabled by default
 
    }
  });

  win.loadFile(path.join(__dirname, 'build', 'index.html'));

  // ✅ DevTools and debugging hooks go here
  win.webContents.openDevTools();

  win.webContents.on('did-fail-load', (event, errorCode, errorDescription) => {
    console.error('Page failed to load:', errorCode, errorDescription);
  });

  win.webContents.on('console-message', (event, level, message, line, sourceId) => {
    console.log(`Console: ${message} (source: ${sourceId}, line: ${line})`);
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
