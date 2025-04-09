import React, { useState } from 'react';
import './App.css';
import emailjs from 'emailjs-com';
import html2canvas from 'html2canvas';

// Sample images for categories (replace with actual images when available)

const wallColors = [
  { id: 1, name: 'color1', image: '/assets/color1.png' },
  { id: 2, name: 'color2', image: '/assets/color2.png' },
  { id: 3, name: 'color3', image: '/assets/color3.png' },
  { id: 4, name: 'color4', image: '/assets/color4.png' },
  { id: 5, name: 'color5', image: '/assets/color5.png' },
  { id: 6, name: 'color6', image: '/assets/color6.png' },
  { id: 7, name: 'color7', image: '/assets/color7.png' },
  { id: 8, name: 'color8', image: '/assets/color8.png' }
];


const furnitureStyles = [
  { id: 1, name: 'fstyle1', image: '/assets/fstyle1.jpg' },
  { id: 2, name: 'fstyle2', image: '/assets/fstyle2.jpg' },
  { id: 3, name: 'fstyle3', image: '/assets/fstyle3.jpg' },
  { id: 4, name: 'fstyle4', image: '/assets/fstyle4.jpg' },
  { id: 5, name: 'fstyle5', image: '/assets/fstyle5.jpg' },
  { id: 6, name: 'fstyle6', image: '/assets/fstyle6.jpg' },
  { id: 7, name: 'fstyle7', image: '/assets/fstyle7.jpg' },
  { id: 8, name: 'fstyle8', image: '/assets/fstyle8.jpg' },
  { id: 9, name: 'fstyle9', image: '/assets/fstyle9.jpg' },
  { id: 10, name: 'fstyle10', image: '/assets/fstyle10.jpg' }
];

const wallStyles = [
  { id: 1, name: 'wstyle1', image: '/assets/wstyle1.png' },
  { id: 2, name: 'wstyle2', image: '/assets/wstyle2.png' },
  { id: 3, name: 'wstyle3', image: '/assets/wstyle3.png' },
  { id: 4, name: 'wstyle4', image: '/assets/wstyle4.png' },
  { id: 5, name: 'wstyle5', image: '/assets/wstyle5.png' },
  { id: 6, name: 'wstyle6', image: '/assets/wstyle6.png' },
  { id: 7, name: 'wstyle7', image: '/assets/wstyle7.png' },
  { id: 8, name: 'wstyle8', image: '/assets/wstyle8.png' },
  { id: 9, name: 'wstyle9', image: '/assets/wstyle9.png' }
  
];



const lightingStyles = [
  { id: 1, name: 'lstyle1', image: '/assets/lstyle1.jpg' },
  { id: 2, name: 'lstyle2', image: '/assets/lstyle2.jpg' },
  { id: 3, name: 'lstyle3', image: '/assets/lstyle3.jpg' },
  { id: 4, name: 'lstyle4', image: '/assets/lstyle4.jpg' },
  { id: 5, name: 'lstyle5', image: '/assets/lstyle5.jpg' },
  { id: 6, name: 'lstyle6', image: '/assets/lstyle6.jpg' },
  { id: 7, name: 'lstyle7', image: '/assets/lstyle7.jpg' },
  { id: 8, name: 'lstyle8', image: '/assets/lstyle8.jpg' }
];


const FlooringStyles = [
  { id: 1, name: 'flooring1', image: '/assets/flooring1.jpg' },
  { id: 2, name: 'flooring2', image: '/assets/flooring2.jpg' },
  { id: 3, name: 'flooring3', image: '/assets/flooring3.jpg' },
  { id: 4, name: 'flooring4', image: '/assets/flooring4.jpg' },
  { id: 5, name: 'flooring5', image: '/assets/flooring5.jpg' },
  { id: 6, name: 'flooring6', image: '/assets/flooring6.jpg' }
];



function App() {
  const [selectedWall, setSelectedWall] = useState(wallColors[0]);
  const [selectedFurniture, setSelectedFurniture] = useState(furnitureStyles[0]);
  const [selectedLighting, setSelectedLighting] = useState(lightingStyles[0]);
  const [selectedFlooring, setSelectedFlooring] = useState(FlooringStyles[0]);
  const [selectedWallStyle, setSelectedWallStyle] = useState(wallStyles[0]);


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');


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



  return (
    <div className="App">
	
	
  <img src="/assets/logo.jpg" alt="Designer Logo" className="logo" />
  

      <h1>Create Your Own Moodboard With Eman Designs</h1>

<div className="category">
  <h2>Choose Color Schema</h2>
  {wallColors.map((wall) => (
    <img
      key={wall.id}
      src={wall.image}
      alt={wall.name}
      onClick={() => setSelectedWall(wall)}
      className={`wall-color-img ${selectedWall.id === wall.id ? 'selected' : ''}`}
    />
  ))}
</div>


      <div className="category">
        <h2>Choose Furniture Style</h2>
        {furnitureStyles.map((furniture) => (
          <img
            key={furniture.id}
            src={furniture.image}
            alt={furniture.name}
            onClick={() => setSelectedFurniture(furniture)}
            className={selectedFurniture.id === furniture.id ? 'selected' : ''}
          />
        ))}
      </div>

      <div className="category">
        <h2>Choose Wall Style</h2>
        {wallStyles.map((wallStyles) => (
          <img
            key={wallStyles.id}
            src={wallStyles.image}
            alt={wallStyles.name}
            onClick={() => setSelectedWallStyle(wallStyles)}
            className={selectedWallStyle?.id === wallStyles.id ? 'selected' : ''}
          />
        ))}
      </div>


      <div className="category">
        <h2>Choose Lighting Style</h2>
        {lightingStyles.map((lighting) => (
          <img
            key={lighting.id}
            src={lighting.image}
            alt={lighting.name}
            onClick={() => setSelectedLighting(lighting)}
            className={selectedLighting.id === lighting.id ? 'selected' : ''}
          />
        ))}
      </div>


<div className="category">
  <h2>Choose Flooring Style</h2>
  {FlooringStyles.map((flooring) => (
    <img
      key={flooring.id}
      src={flooring.image}
      alt={flooring.name}
      onClick={() => setSelectedFlooring(flooring)} 
      className={selectedFlooring.id === flooring.id ? 'selected' : ''}  
    />
  ))}
</div>




<div className="moodboard-preview">
  <h2>Here is Your Mood board ..!</h2>
  <div>
    <img src={selectedWall.image} alt="Wall" />
    <img src={selectedFurniture.image} alt="Furniture" />
    <img src={selectedLighting.image} alt="Lighting" />
    <img src={selectedFlooring.image} alt="Flooring" /> 
	<img src={selectedWallStyle.image} alt="Wall Style" /> 
  </div>
</div> {/* Add this closing div */}


<form onSubmit={handleSubmit}>
  <h2>Enter Your Details to send your Mood Board & get 10% Discount code!</h2>
  <input
    type="text"
    placeholder="Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    required
  />
  <input
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
  />
  <input
    type="tel"
    placeholder="Phone Number"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    required
  />
  <div>
  <button type="submit">Submit</button>
  </div>
</form>


    </div>
  );
}

export default App;
