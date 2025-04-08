import React, { useState } from 'react';
import './App.css';
import emailjs from 'emailjs-com';


// Sample images for categories (replace with actual images when available)

const wallColors = [
  { id: 1, name: 'color1', image: '/assets/color1.png' },
  { id: 2, name: 'color2', image: '/assets/color2.png' },
  { id: 3, name: 'color3', image: '/assets/color3.png' },
  { id: 4, name: 'color4', image: '/assets/color4.png' },
  { id: 5, name: 'color5', image: '/assets/color5.png' }
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
  { id: 5, name: 'lstyle5', image: '/assets/lstyle5.jpg' }
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

  /*const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nYour Moodboard is ready!`);

  };*/
 /* 
  const handleSubmit = (e) => {
  e.preventDefault();

  const templateParams = {
    name,
    email,
    phone,
    wall: selectedWall.name,
    furniture: selectedFurniture.name,
    lighting: selectedLighting.name,
    flooring: selectedFlooring.name,
    wallImage: window.location.origin + selectedWall.image,
    furnitureImage: window.location.origin + selectedFurniture.image,
    lightingImage: window.location.origin + selectedLighting.image,
    flooringImage: window.location.origin + selectedFlooring.image
  };

  emailjs.send('your_service_id', 'your_template_id', templateParams, 'your_user_id')
    .then((response) => {
      alert('Moodboard sent to your email with a 10% discount code!');
    }, (err) => {
      console.error('FAILED...', err);
      alert('Failed to send email. Please try again.');
    });
};
*/

const handleSubmit = (e) => {
  e.preventDefault();

  const templateParams = {
    name,
    email,
    phone,
    wall: selectedWall.name,
    furniture: selectedFurniture.name,
    lighting: selectedLighting.name,
    flooring: selectedFlooring.name,
    wallImage: window.location.origin + selectedWall.image,
    furnitureImage: window.location.origin + selectedFurniture.image,
    lightingImage: window.location.origin + selectedLighting.image,
    flooringImage: window.location.origin + selectedFlooring.image,
    discountCode: 'EMAN10'
  };

  emailjs.send(
    'service_59fh789',       // replace this with your actual service ID
    'template_p6alfzs',      // replace this with your actual template ID
    templateParams,
    'cZRjJM3qtUzQmjiOv'        // replace this with your EmailJS public key (user_*** or API key)
  )
  .then((response) => {
    alert('Moodboard sent to your email with a 10% discount code!');
  })
  .catch((err) => {
    console.error('Email failed to send:', err);
    alert('Oops! Something went wrong. Please try again.');
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
  <h2>Your Moodboard</h2>
  <div>
    <img src={selectedWall.image} alt="Wall" />
    <img src={selectedFurniture.image} alt="Furniture" />
    <img src={selectedLighting.image} alt="Lighting" />
    <img src={selectedFlooring.image} alt="Flooring" /> 
  </div>
</div> {/* Add this closing div */}


<form onSubmit={handleSubmit}>
  <h2>Enter Your Details</h2>
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
  <button type="submit">Submit</button>
</form>



    </div>
  );
}

export default App;
