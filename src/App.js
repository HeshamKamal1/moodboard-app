import React, { useState, useMemo, useEffect, useRef } from 'react';
import './App.css';
import emailjs from 'emailjs-com';
import html2canvas from 'html2canvas';

const wallColors = [
  { id: 1, name: 'color1', image: '/assets/CP (1).jpg' },
  { id: 2, name: 'color2', image: '/assets/CP (2).jpg' },
  { id: 3, name: 'color3', image: '/assets/CP (3).jpg' },
  { id: 4, name: 'color4', image: '/assets/CP (4).jpg' },
  { id: 5, name: 'color5', image: '/assets/CP (5).jpg' },
  { id: 6, name: 'color6', image: '/assets/CP (6).jpg' },
  { id: 7, name: 'color7', image: '/assets/CP (7).jpg' },
  { id: 8, name: 'color8', image: '/assets/CP (8).jpg' },
  { id: 9, name: 'color8', image: '/assets/CP (9).jpg' },
  { id: 10, name: 'color8', image: '/assets/CP (10).jpg' },
  { id: 11, name: 'color8', image: '/assets/CP (11).jpg' },
  { id: 12, name: 'color8', image: '/assets/CP (12).jpg' }
  
];

const furnitureStyles = [
  { id: 1, name: 'fstyle1', image: '/assets/FS (1).png' },
  { id: 2, name: 'fstyle2', image: '/assets/FS (2).png' },
  { id: 3, name: 'fstyle3', image: '/assets/FS (3).png' },
  { id: 4, name: 'fstyle4', image: '/assets/FS (4).png' },
  { id: 5, name: 'fstyle5', image: '/assets/FS (5).png' },
  { id: 6, name: 'fstyle6', image: '/assets/FS (6).png' },
  { id: 7, name: 'fstyle7', image: '/assets/FS (7).png' },
  { id: 8, name: 'fstyle8', image: '/assets/FS (8).png' },
  { id: 9, name: 'fstyle9', image: '/assets/FS (9).png' },
  { id: 10, name: 'fstyle10', image: '/assets/FS (10).png' },
  { id: 11, name: 'fstyle11', image: '/assets/FS (11).png' },
  { id: 12, name: 'fstyle12', image: '/assets/FS (12).png' },
  { id: 13, name: 'fstyle13', image: '/assets/FS (13).png' },
  { id: 14, name: 'fstyle14', image: '/assets/FS (14).png' },
  { id: 15, name: 'fstyle15', image: '/assets/FS (15).png' },
  { id: 16, name: 'fstyle16', image: '/assets/FS (16).png' },
  { id: 17, name: 'fstyle17', image: '/assets/FS (17).png' },
  { id: 18, name: 'fstyle17', image: '/assets/FS (18).png' },
  { id: 19, name: 'fstyle17', image: '/assets/FS (19).png' },
  { id: 20, name: 'fstyle17', image: '/assets/FS (20).png' }
];

const wallStyles = [
  { id: 1, name: 'wstyle1', image: '/assets/WD (1).png' },
  { id: 2, name: 'wstyle2', image: '/assets/WD (2).png' },
  { id: 3, name: 'wstyle3', image: '/assets/WD (3).png' },
  { id: 4, name: 'wstyle4', image: '/assets/WD (4).png' },
  { id: 5, name: 'wstyle5', image: '/assets/WD (5).png' },
  { id: 6, name: 'wstyle6', image: '/assets/WD (6).png' },
  { id: 7, name: 'wstyle7', image: '/assets/WD (7).png' },
  { id: 8, name: 'wstyle8', image: '/assets/WD (8).png' },
  { id: 9, name: 'wstyle9', image: '/assets/WD (9).png' },
  { id: 10, name: 'wstyle10', image: '/assets/WD (10).png' },
  { id: 11, name: 'wstyle11', image: '/assets/WD (11).png' },
];

const ArtworkStyles = [
  { id: 1, name: 'artworkstyle1', image: '/assets/AW (1).png' },
  { id: 2, name: 'artworkstyle2', image: '/assets/AW (2).png' },
  { id: 3, name: 'artworkstyle3', image: '/assets/AW (3).png' },
  { id: 4, name: 'artworkstyle4', image: '/assets/AW (4).png' },
  { id: 5, name: 'artworkstyle5', image: '/assets/AW (5).png' },
  { id: 6, name: 'artworkstyle6', image: '/assets/AW (6).png' },
  { id: 7, name: 'artworkstyle7', image: '/assets/AW (7).png' },
  { id: 8, name: 'artworkstyle8', image: '/assets/AW (8).png' },
  { id: 9, name: 'artworkstyle9', image: '/assets/AW (9).png' },
  { id: 10, name: 'artworkstyle10', image: '/assets/AW (10).png' },
  { id: 11, name: 'artworkstyle11', image: '/assets/AW (11).png' },
  { id: 12, name: 'artworkstyle11', image: '/assets/AW (12).png' },
  { id: 13, name: 'artworkstyle11', image: '/assets/AW (13).png' },
  { id: 14, name: 'artworkstyle11', image: '/assets/AW (14).png' }
];

const lightingStyles = [
  { id: 1, name: 'lstyle1', image: '/assets/LI (1).png' },
  { id: 2, name: 'lstyle2', image: '/assets/LI (2).png' },
  { id: 3, name: 'lstyle3', image: '/assets/LI (3).png' },
  { id: 4, name: 'lstyle4', image: '/assets/LI (4).png' },
  { id: 5, name: 'lstyle5', image: '/assets/LI (5).png' },
  { id: 6, name: 'lstyle6', image: '/assets/LI (6).png' },
  { id: 7, name: 'lstyle7', image: '/assets/LI (7).png' },
  { id: 8, name: 'lstyle8', image: '/assets/LI (8).png' },
  { id: 9, name: 'lstyle9', image: '/assets/LI (9).png' },
  { id: 10, name: 'lstyle10', image: '/assets/LI (10).png' },
  { id: 11, name: 'lstyle11', image: '/assets/LI (11).png' }
];

const WoodStyles = [
  { id: 1, name: 'woodstyle1', image: '/assets/WP (1).png' },
  { id: 2, name: 'woodstyle2', image: '/assets/WP (2).png' },
  { id: 3, name: 'woodstyle3', image: '/assets/WP (3).png' }

];

const FlooringStyles = [
  { id: 1, name: 'flooring1', image: '/assets/MR (1).JPG' },
  { id: 2, name: 'flooring2', image: '/assets/MR (2).JPG' },
  { id: 3, name: 'flooring3', image: '/assets/MR (3).JPG' },
  { id: 4, name: 'flooring4', image: '/assets/MR (4).JPG' },
  { id: 5, name: 'flooring5', image: '/assets/MR (5).JPG' },
  { id: 6, name: 'flooring6', image: '/assets/MR (6).JPG' },
  { id: 7, name: 'flooring7', image: '/assets/MR (7).JPG' },
  { id: 8, name: 'flooring8', image: '/assets/MR (8).JPG' },
  { id: 9, name: 'flooring9', image: '/assets/MR (9).JPG' },
  { id: 10, name: 'flooring9', image: '/assets/MR (10).JPG' },
  { id: 11, name: 'flooring9', image: '/assets/MR (11).JPG' },
  { id: 12, name: 'flooring9', image: '/assets/MR (12).JPG' }
];

const PlantingStyles = [
  { id: 1, name: 'planting1', image: '/assets/PL (1).png' },
  { id: 2, name: 'planting2', image: '/assets/PL (2).png' },
  { id: 3, name: 'planting3', image: '/assets/PL (3).png' },
  { id: 4, name: 'planting4', image: '/assets/PL (4).png' },
  { id: 5, name: 'planting5', image: '/assets/PL (5).png' },
  { id: 6, name: 'planting6', image: '/assets/PL (6).png' },
  { id: 7, name: 'planting7', image: '/assets/PL (7).png' },
  { id: 8, name: 'planting8', image: '/assets/PL (8).png' },
  { id: 9, name: 'planting9', image: '/assets/PL (9).png' },
  { id: 10, name: 'planting9', image: '/assets/PL (10).png' },
  { id: 11, name: 'planting9', image: '/assets/PL (11).png' },
  { id: 12, name: 'planting9', image: '/assets/PL (12).png' },
  { id: 13, name: 'planting9', image: '/assets/PL (13).png' }
];

function App() {
  const [selectedWall, setSelectedWall] = useState(wallColors[0]);
  const [selectedFurniture, setSelectedFurniture] = useState(furnitureStyles[0]);
  const [selectedLighting, setSelectedLighting] = useState(lightingStyles[0]);
  const [selectedWood, setSelectedWood] = useState(WoodStyles[0]);
  const [selectedArtwork, setSelectedArtwork] = useState(ArtworkStyles[0]);
  const [selectedFlooring, setSelectedFlooring] = useState(FlooringStyles[0]);
  const [selectedPlanting, setSelectedPlanting] = useState(PlantingStyles[0]);
  const [selectedWallStyle, setSelectedWallStyle] = useState(wallStyles[0]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const moodboardRef = useRef(null);	

const handleSubmit = (e) => {
  e.preventDefault();

const BASE_URL = 'https://moodboard-app-rust.vercel.app';

  // Prepare the email parameters
const templateParams = {
  name,
  phone,
  email,
  selectedWall: selectedWall.name,
  selectedFurniture: selectedFurniture.name,
  selectedWallStyle: selectedWallStyle.name,
  selectedLighting: selectedLighting.name,
  selectedFlooring: selectedFlooring.name,
  wallImage: `${BASE_URL}${selectedWall.image}`,
  furnitureImage: `${BASE_URL}${selectedFurniture.image}`,
  wallStyleImage: `${BASE_URL}${selectedWallStyle.image}`,
  lightingImage: `${BASE_URL}${selectedLighting.image}`,
  flooringImage: `${BASE_URL}${selectedFlooring.image}`,
};


  // Send the email using emailjs
  emailjs.send('service_59fh789', 'template_p6alfzs', templateParams, 'cZRjJM3qtUzQmjiOv')
    .then((response) => {
      console.log('Email sent successfully:', response);
      alert('Your Moodboard is ready! Check your email for the details.');
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      alert('There was an error sending your email. Please try again.');
    });
};



  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [photoPositions, setPhotoPositions] = useState([]);
  

 useEffect(() => {
  const spacing = 130; // Space between photos
  const totalWidth = 3 * spacing; // 3 photos horizontally
  const totalHeight = Math.ceil([selectedWall, selectedFurniture, selectedWallStyle, selectedLighting, selectedFlooring, selectedPlanting, selectedArtwork, selectedWood].length / 3) * spacing; // Photos arranged in rows

  const positions = [selectedWall, selectedFurniture, selectedWallStyle, selectedLighting, selectedFlooring, selectedPlanting].map((_, index) => {
    const xOffset = (index % 3) * spacing - totalWidth / 5; // Shift photos to the center horizontally
    const yOffset = Math.floor(index / 3) * spacing - totalHeight / 8; // Shift photos to the center vertically
    const rotation = Math.floor(Math.random() * 12 - 8); // Random rotation
    return { rotation, xOffset, yOffset };
  });

  setPhotoPositions(positions);
}, [selectedWall, selectedFurniture, selectedWallStyle, selectedLighting, selectedFlooring, selectedPlanting, selectedArtwork, selectedWood]);


  return (
    <div className="App">
      <img src="/assets/logo.png" alt="Designer Logo" className="logo" />
      <h1>Create Your Own Moodboard With Eman Designs</h1>

      <div className="category">
        <h2>Choose Color Schema</h2>
        {wallColors.map((wall) => (
          <img key={wall.id} src={wall.image} alt={wall.name} onClick={() => setSelectedWall(wall)} className={`wall-color-img ${selectedWall.id === wall.id ? 'selected' : ''}`} />
        ))}
      </div>

      <div className="category">
        <h2>Choose Furniture Style</h2>
        {furnitureStyles.map((furniture) => (
          <img key={furniture.id} src={furniture.image} alt={furniture.name} onClick={() => setSelectedFurniture(furniture)} className={selectedFurniture.id === furniture.id ? 'selected' : ''} />
        ))}
      </div>

      <div className="category">
        <h2>Choose Wall Style</h2>
        {wallStyles.map((style) => (
          <img key={style.id} src={style.image} alt={style.name} onClick={() => setSelectedWallStyle(style)} className={selectedWallStyle?.id === style.id ? 'selected' : ''} />
        ))}
      </div>

      <div className="category">
        <h2>Choose Lighting Style</h2>
        {lightingStyles.map((lighting) => (
          <img key={lighting.id} src={lighting.image} alt={lighting.name} onClick={() => setSelectedLighting(lighting)} className={selectedLighting.id === lighting.id ? 'selected' : ''} />
        ))}
      </div>

      <div className="category">
        <h2>Choose Art Work Style</h2>
        {ArtworkStyles.map((artwork) => (
          <img key={artwork.id} src={artwork.image} alt={artwork.name} onClick={() => setSelectedArtwork(artwork)} className={selectedArtwork.id === artwork.id ? 'selected' : ''} />
        ))}
      </div>

      <div className="category">
        <h2>Choose Planting Style</h2>
        {PlantingStyles.map((planting) => (
          <img key={planting.id} src={planting.image} alt={planting.name} onClick={() => setSelectedPlanting(planting)} className={selectedPlanting.id === planting.id ? 'selected' : ''} />
        ))}
      </div>

      <div className="category">
        <h2>Choose Wood Palette</h2>
        {WoodStyles.map((woodstyle) => (
          <img key={woodstyle.id} src={woodstyle.image} alt={woodstyle.name} onClick={() => setSelectedWood(woodstyle)} className={selectedWood.id === woodstyle.id ? 'selected' : ''} />
        ))}
      </div>


      <div className="category">
        <h2>Choose Flooring Marble Style</h2>
        {FlooringStyles.map((flooring) => (
          <img key={flooring.id} src={flooring.image} alt={flooring.name} onClick={() => setSelectedFlooring(flooring)} className={selectedFlooring.id === flooring.id ? 'selected' : ''} />
        ))}
      </div>
	  
	 <>
  <div className="moodboard-preview" ref={moodboardRef}>
    <div
      className="moodboard-polaroid-grid"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/MBT.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
		
      }}
    >
      {[selectedWall, selectedFurniture, selectedWallStyle, selectedLighting, selectedFlooring, selectedPlanting, selectedArtwork, selectedWood].map((item, index) => (
        <div key={index} className="grid-photo-wrapper">
          <img
            src={item.image}
            alt={item.name}
            className="grid-photo"
          />
        </div>
      ))}
    </div>
  </div>

  <form onSubmit={handleSubmit}>
    <h2>Enter Your Details to send your Mood Board & get 10% Discount code!</h2>
    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
    <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
    <button type="submit">Submit</button>
  </form>
</>
 


<div className="qr-code text-center">
  <h3 className="mb-2 text-lg font-semibold">Scan this QR code to visit our Instagram!</h3>
  <a
    href="https://www.instagram.com/eman.fathallah.designs/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/assets/qr.png"
      alt="Follow us on Instagram"
      className="qr-image w-24 h-24 mx-auto transition-transform duration-300 hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-pink-500/50"
    />
  </a>
</div>

    </div>
  );
}

export default App;
