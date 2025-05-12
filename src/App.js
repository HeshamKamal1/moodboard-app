import React, { useState, useMemo, useEffect, useRef } from 'react';
import './App.css';
import emailjs from 'emailjs-com';
import html2canvas from 'html2canvas';

const wallColors = [
  { id: 1, name: 'color1', image: '/assets/Style1.png'  },
  { id: 2, name: 'color2', image: '/assets/Style2.png'  },
  { id: 3, name: 'color3', image: '/assets/Style3.png'  },
  { id: 4, name: 'color4', image: '/assets/Style4.png'  },
  { id: 5, name: 'color5', image: '/assets/Style5.png'  },
  { id: 6, name: 'color6', image: '/assets/Style6.png'  },
];

const furnitureStyles = [
  { id: 1, name: 'fstyle1', image: '/assets/pcolor1.png' },
  { id: 2, name: 'fstyle2', image: '/assets/pcolor2.png' },
  { id: 3, name: 'fstyle3', image: '/assets/pcolor3.png' },
  { id: 4, name: 'fstyle4', image: '/assets/pcolor4.png' },
  { id: 5, name: 'fstyle5', image: '/assets/pcolor5.png' },
];

const wallStyles = [
  { id: 1, name: 'wstyle1', image: '/assets/scolor1.png' },
  { id: 2, name: 'wstyle2', image: '/assets/scolor2.png' },
  { id: 3, name: 'wstyle3', image: '/assets/scolor3.png' },
  { id: 4, name: 'wstyle4', image: '/assets/scolor4.png' },
  { id: 5, name: 'wstyle5', image: '/assets/scolor5.png' },
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
  { id: 1, name: 'lstyle1', image: '/assets/ac1.png' },
  { id: 2, name: 'lstyle2', image: '/assets/ac2.png' },
  { id: 3, name: 'lstyle3', image: '/assets/ac3.png' },
  { id: 4, name: 'lstyle4', image: '/assets/ac4.png' },
  { id: 5, name: 'lstyle5', image: '/assets/ac5.png' },
  { id: 6, name: 'lstyle6', image: '/assets/ac6.png' },
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

function App() {
  const [selectedWall, setSelectedWall] = useState(wallColors[0]);
  const [selectedFurniture, setSelectedFurniture] = useState(furnitureStyles[0]);
  const [selectedLighting, setSelectedLighting] = useState(lightingStyles[0]);
  const [selectedWood, setSelectedWood] = useState(WoodStyles[0]);
  const [selectedArtwork, setSelectedArtwork] = useState(ArtworkStyles[0]);
  const [selectedFlooring, setSelectedFlooring] = useState(FlooringStyles[0]);
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

const [projectType, setProjectType] = useState('');

  return (
    <div className="App">
      <img src="/assets/logo.png" alt="Designer Logo" className="logo" />
      <h1>Create Your Own Moodboard With Eman Designs</h1>

      <div className="category">
        <h2>Choose your prefered Style</h2>
        {wallColors.map((wall) => (
          <img key={wall.id} src={wall.image} alt={wall.name} onClick={() => setSelectedWall(wall)} className={`wall-color-img ${selectedWall.id === wall.id ? 'selected' : ''}`} />
        ))}
      </div>

      <div className="category">
        <h2>Choose your Primary Color</h2>
        {furnitureStyles.map((furniture) => (
          <img key={furniture.id} src={furniture.image} alt={furniture.name} onClick={() => setSelectedFurniture(furniture)} className={selectedFurniture.id === furniture.id ? 'selected' : ''} />
        ))}
      </div>

      <div className="category">
        <h2>Choose your Secondry Color</h2>
        {wallStyles.map((style) => (
          <img key={style.id} src={style.image} alt={style.name} onClick={() => setSelectedWallStyle(style)} className={selectedWallStyle?.id === style.id ? 'selected' : ''} />
        ))}
      </div>

     <div className="category">
        <h2>Choose Flooring Marble Style</h2>
        {FlooringStyles.map((flooring) => (
          <img key={flooring.id} src={flooring.image} alt={flooring.name} onClick={() => setSelectedFlooring(flooring)} className={selectedFlooring.id === flooring.id ? 'selected' : ''} />
        ))}
      </div>

      <div className="category">
        <h2>Choose Art Work Style</h2>
        {ArtworkStyles.map((artwork) => (
          <img key={artwork.id} src={artwork.image} alt={artwork.name} onClick={() => setSelectedArtwork(artwork)} className={selectedArtwork.id === artwork.id ? 'selected' : ''} />
        ))}
      </div>
	  
      <div className="category">
        <h2>Choose preferred Accessories</h2>
        {lightingStyles.map((lighting) => (
          <img key={lighting.id} src={lighting.image} alt={lighting.name} onClick={() => setSelectedLighting(lighting)} className={selectedLighting.id === lighting.id ? 'selected' : ''} />
        ))}
      </div>


      <div className="category">
        <h2>Choose Wood Palette</h2>
        {WoodStyles.map((woodstyle) => (
          <img key={woodstyle.id} src={woodstyle.image} alt={woodstyle.name} onClick={() => setSelectedWood(woodstyle)} className={selectedWood.id === woodstyle.id ? 'selected' : ''} />
        ))}
      </div>


 
	  
	 <>
  <div className="moodboard-preview" ref={moodboardRef}>
    <div
      className="moodboard-polaroid-grid"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/MBT2.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
		
      }}
    >
			
	      {[selectedWall].map((item, index) => (
        <div className="grid-photo-wrapper wall-span"  >
          <img
            src={item.image}
            alt={item.name}
            className="grid-photo"
          />
        </div>
      ))}


      {[ selectedWallStyle, selectedLighting, selectedArtwork, selectedFurniture ,selectedWood , selectedFlooring ].map((item, index) => (
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
  
  
  <div className="sponsers">
   <h2 className="mb-2 text-lg font-semibold">Sponsored by!</h2>
    <a
    href="https://jazeerapaints.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/assets/jazeera-paints.png"
      className="sponsor-logo w-24 h-24 mx-auto transition-transform duration-300 hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-pink-500/50"
    />
  </a>
  
  <a
    href="https://onixmarble.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/assets/onix-logo-white.png"
      className="sponsor-logo w-24 h-24 mx-auto transition-transform duration-300 hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-pink-500/50"
    />
  </a>
  
  <a
    href="https://decoramaegypt.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/assets/decorama-logo.png"
      className="sponsor-logo w-24 h-24 mx-auto transition-transform duration-300 hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-pink-500/50"
    />
  </a>
  

      
</div>
  
   

  <form onSubmit={handleSubmit}>
    <h2>Enter Your Details to send your Mood Board & get 10% Discount code!</h2>
    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
    <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
	
<select 
  className="form input"
 value={projectType}
  onChange={(e) => setProjectType(e.target.value)}
  required
>
  <option value="">Select Project Type</option>
  <option value="residential">Residential</option>
  <option value="administrative">Administrative</option>
  <option value="commercial">Commercial</option>
</select>
	
    <div>
	<button type="submit">Submit</button>
	</div>
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
