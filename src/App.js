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
  { id: 7, name: 'color7', image: '/assets/color7.png' }
];


const furnitureStyles = [
  { id: 1, name: 'fstyle1', image: '/assets/fstyle1.jpg' },
  { id: 2, name: 'fstyle2', image: '/assets/fstyle2.jpg' },
  { id: 3, name: 'fstyle3', image: '/assets/fstyle3.jpg' },
  { id: 4, name: 'fstyle4', image: '/assets/fstyle4.jpg' },
  { id: 5, name: 'fstyle5', image: '/assets/fstyle5.jpg' }
];



const lightingStyles = [
  { id: 1, name: 'lstyle1', image: '/assets/lstyle1.jpg' },
  { id: 2, name: 'lstyle2', image: '/assets/lstyle2.jpg' },
  { id: 3, name: 'lstyle3', image: '/assets/lstyle3.jpg' },
  { id: 4, name: 'lstyle4', image: '/assets/lstyle4.jpg' },
  { id: 5, name: 'lstyle5', image: '/assets/lstyle5.jpg' },
  { id: 6, name: 'lstyle6', image: '/assets/lstyle6.jpg' }
];


const FlooringStyles = [
  { id: 1, name: 'flooring1', image: '/assets/flooring1.jpg' },
  { id: 2, name: 'flooring2', image: '/assets/flooring2.jpg' },
  { id: 3, name: 'flooring3', image: '/assets/flooring3.jpg' },
  { id: 4, name: 'flooring4', image: '/assets/flooring4.jpg' },
  { id: 5, name: 'flooring5', image: '/assets/flooring5.jpg' }
];



function App() {
  const [selectedWall, setSelectedWall] = useState(wallColors[0]);
  const [selectedFurniture, setSelectedFurniture] = useState(furnitureStyles[0]);
  const [selectedLighting, setSelectedLighting] = useState(lightingStyles[0]);
  const [selectedFlooring, setSelectedFlooring] = useState(FlooringStyles[0]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');


const handleSubmit = (e) => {
  e.preventDefault();

  // Prepare the email parameters
  const templateParams = {
    name: name,
    email: email,
    phone: phone,
    selectedWall: selectedWall.name,
    selectedFurniture: selectedFurniture.name,
    selectedLighting: selectedLighting.name,
    selectedFlooring: selectedFlooring.name,
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
        <h2>Choose Wall Color Schema</h2>
        {wallColors.map((wall) => (
          <img
            key={wall.id}
            src={wall.image}
            alt={wall.name}
            onClick={() => setSelectedWall(wall)}
            className={selectedWall.id === wall.id ? 'selected' : ''}
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
  </div>
</div> {/* Add this closing div */}


<form onSubmit={handleSubmit}>
  <h2>Enter Your Details to send your Mood Board & a  10% Discount!</h2>
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
