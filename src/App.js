import React, { useState, useMemo, useEffect, useRef } from 'react';
import './App.css';
import emailjs from 'emailjs-com';
import html2canvas from 'html2canvas';

const DesignStyle = [
  { id: 1, name: 'American Style', image: '/assets/AmericanStyle.jpg'  },
  { id: 2, name: 'Boho Style', image: '/assets/style2.png'  },
  { id: 3, name: 'Classic', image: '/assets/style3.png'  },
    { id: 4, name: 'Modern', image: '/assets/Classic.jpg'  },
  { id: 5, name: 'Contemporary', image: '/assets/style4.png'  },
  { id: 6, name: 'Industrial Design', image: '/assets/IndustrialDesign.jpg'  },
  { id: 7, name: 'Modern', image: '/assets/Modern.jpg'  },

];

const primarycolor = [
  { id: 1, name: 'Beach Glass', image: '/assets/BeachGlass.png' },
  { id: 2, name: 'primarycolor2', image: '/assets/BC2.png' },
  { id: 3, name: 'primarycolor3', image: '/assets/BC3.png' },
  { id: 4, name: 'Morning Fog', image: '/assets/MorningFog.png' },
  { id: 5, name: 'Tricon Black', image: '/assets/TriconBlack.png' },
  { id: 6, name: 'Turkish Coffee', image: '/assets/TurkishCoffee.png' },
];

const secondrycolor = [
  { id: 1, name: 'Decorative1', image: '/assets/deco1.png' },
  { id: 2, name: 'Decorative2', image: '/assets/deco2.png' },
  { id: 3, name: 'Decorative3', image: '/assets/deco3.png' },
  { id: 4, name: 'Decorative4', image: '/assets/deco4.png' },
  { id: 5, name: 'Decorative5', image: '/assets/deco5.png' },
  { id: 6, name: 'Decorative6', image: '/assets/deco6.png' },
  { id: 7, name: 'Decorative7', image: '/assets/deco7.png' },
];

const ArtworkStyles = [
  { id: 1, name: 'artworkstyle1', image: '/assets/waw1.png' },
  { id: 2, name: 'artworkstyle2', image: '/assets/acc21.png' },
  { id: 3, name: 'artworkstyle3', image: '/assets/AW (3).png' },
  { id: 4, name: 'artworkstyle4', image: '/assets/waw2.png' },
  { id: 5, name: 'artworkstyle5', image: '/assets/AW (5).png' },
  //{ id: 6, name: 'artworkstyle6', image: '/assets/acc2.png' },
  { id: 7, name: 'artworkstyle7', image: '/assets/AW (7).png' },
  { id: 8, name: 'artworkstyle8', image: '/assets/waw3.png' },
  //{ id: 9, name: 'artworkstyle9', image: '/assets/AW (9).png' },
  //{ id: 10, name: 'artworkstyle10', image: '/assets/AW (10).png' },
  //{ id: 11, name: 'artworkstyle11', image: '/assets/AW (11).png' },
  { id: 12, name: 'artworkstyle11', image: '/assets/AW (12).png' },
  { id: 13, name: 'artworkstyle11', image: '/assets/waw4.png' },
  //{ id: 14, name: 'artworkstyle11', image: '/assets/AW (14).png' }
];

const accessoriesStyle = [
  { id: 1, name: 'accessory1', image: '/assets/acc1.png' },
  { id: 2, name: 'accessory2', image: '/assets/acc2.png' },
  { id: 3, name: 'accessory3', image: '/assets/acc9.png' },
  { id: 4, name: 'accessory4', image: '/assets/acc4.png' },
  { id: 5, name: 'accessory5', image: '/assets/acc5.png' },
  { id: 6, name: 'accessory6', image: '/assets/acc6.png' },
  { id: 7, name: 'accessory6', image: '/assets/acc7.png' },
  { id: 8, name: 'accessory6', image: '/assets/acc8.png' }
];

const WoodStyles = [
  { id: 1, name: 'woodstyle1', image: '/assets/V01.png' },
  { id: 2, name: 'woodstyle2', image: '/assets/V02.png' },
  { id: 3, name: 'woodstyle3', image: '/assets/V03.png' },
  { id: 4, name: 'woodstyle4', image: '/assets/V04.png' },
  { id: 5, name: 'woodstyle5', image: '/assets/V05.png' },
  { id: 6, name: 'woodstyle6', image: '/assets/V06.png' },
  { id: 7, name: 'woodstyle7', image: '/assets/V07.png' },
  { id: 8, name: 'woodstyle8', image: '/assets/V08.png' },
  { id: 9, name: 'woodstyle9', image: '/assets/V10.png' },
  { id: 10, name: 'woodstyle10', image: '/assets/V12.png' },
  { id: 11, name: 'woodstyle11', image: '/assets/V13.png' },
  { id: 12, name: 'woodstyle12', image: '/assets/V14.png' },
  { id: 13, name: 'woodstyle13', image: '/assets/V15.png' },
  { id: 14, name: 'woodstyle14', image: '/assets/V16.png' },
  { id: 15, name: 'woodstyle15', image: '/assets/V18.png' },
  { id: 16, name: 'woodstyle16', image: '/assets/V19.png' },
  { id: 17, name: 'woodstyle17', image: '/assets/V20.png' },
  { id: 18, name: 'woodstyle18', image: '/assets/V22.png' },
  { id: 19, name: 'woodstyle19', image: '/assets/V23.png' },
  { id: 20, name: 'woodstyle20', image: '/assets/V24.png' },
  { id: 21, name: 'woodstyle21', image: '/assets/V25.png' },
  { id: 22, name: 'woodstyle22', image: '/assets/C01.png' },
  { id: 23, name: 'woodstyle23', image: '/assets/C02.png' },
  { id: 24, name: 'woodstyle24', image: '/assets/C03.png' },
  { id: 25, name: 'woodstyle25', image: '/assets/C04.png' },
  { id: 26, name: 'woodstyle26', image: '/assets/C05.png' },
  { id: 27, name: 'woodstyle27', image: '/assets/C06.png' },
  { id: 28, name: 'woodstyle28', image: '/assets/C07.png' },
  { id: 29, name: 'woodstyle29', image: '/assets/C11.png' },
  { id: 30, name: 'woodstyle30', image: '/assets/C12.png' },
  { id: 31, name: 'woodstyle31', image: '/assets/C13.png' },
  { id: 32, name: 'woodstyle32', image: '/assets/C14.png' },
  { id: 33, name: 'woodstyle33', image: '/assets/C15.png' },
  { id: 34, name: 'woodstyle34', image: '/assets/C18.png' },
  { id: 35, name: 'woodstyle35', image: '/assets/C19.png' },
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
  const [selectedDesginStyle, setselectedDesginStyle] = useState(DesignStyle[0]);
  const [selectedPrimaryColor, setselectedPrimaryColor] = useState(primarycolor[0]);
  const [selectedAccessoriesStyle, setselectedAccessoriesStyle] = useState(accessoriesStyle[0]);
  const [selectedWood, setSelectedWood] = useState(WoodStyles[0]);
  const [selectedArtwork, setSelectedArtwork] = useState(ArtworkStyles[0]);
  const [selectedFlooring, setSelectedFlooring] = useState(FlooringStyles[0]);
  const [selectedSecondryColor, setselectedSecondryColor] = useState(secondrycolor[0]);
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
  projectType,
  selectedDesginStyle: selectedDesginStyle.name,
  selectedPrimaryColor: selectedPrimaryColor.name,
  selectedSecondryColor: selectedSecondryColor.name,
  selectedAccessoriesStyle: selectedAccessoriesStyle.name,
  selectedFlooring: selectedFlooring.name,
  wallImage: `${BASE_URL}${selectedDesginStyle.image}`,
  furnitureImage: `${BASE_URL}${selectedPrimaryColor.image}`,
  wallStyleImage: `${BASE_URL}${selectedSecondryColor.image}`,
  lightingImage: `${BASE_URL}${selectedAccessoriesStyle.image}`,
  flooringImage: `${BASE_URL}${selectedFlooring.image}`,
};


  // Send the email using emailjs
  emailjs.send('service_jea37le', 'template_p6alfzs', templateParams, 'cZRjJM3qtUzQmjiOv')
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

const [selections, setSelections] = useState({
  DesignStyle: '',
  primarycolor: '',
  secondrycolor: '',
  ArtworkStyles: '',
  accessoriesStyle: '',
  WoodStyles: '',
  FlooringStyles: '',
});


  return (
    <div className="App">
      <img src="/assets/logo.png" alt="Designer Logo" className="logo" />
      <h1>Create Your Own Moodboard With Eman Designs</h1>

      <div className="category">
        <h2>Choose your prefered Style</h2>
        {DesignStyle.map((wall) => (
          <img key={wall.id} src={wall.image} alt={wall.name} onClick={() => setselectedDesginStyle(wall)} className={`wall-color-img ${selectedDesginStyle.id === wall.id ? 'selected' : ''}`} />
        ))}
      </div>

      <div className="category">
        <h2>Choose your Primary Color</h2>
        {primarycolor.map((furniture) => (
          <img key={furniture.id} src={furniture.image} alt={furniture.name} onClick={() => setselectedPrimaryColor(furniture)} className={` ${selectedPrimaryColor.id === furniture.id ? 'selected' : ''}`} />
        ))}
      </div>

      <div className="category">
        <h2>Choose your Decorative Color</h2>
        {secondrycolor.map((style) => (
          <img key={style.id} src={style.image} alt={style.name} onClick={() => setselectedSecondryColor(style)} className={` ${selectedSecondryColor?.id === style.id ? 'selected' : ''}`} />
        ))}
      </div>

     <div className="category">
        <h2>Choose Flooring Marble Style</h2>
        {FlooringStyles.map((flooring) => (
          <img key={flooring.id} src={flooring.image} alt={flooring.name} onClick={() => setSelectedFlooring(flooring)} className={selectedFlooring.id === flooring.id ? 'selected' : ''} />
        ))}
      </div>

      <div className="category">
        <h2>Choose Wall Art Work Style</h2>
        {ArtworkStyles.map((artwork) => (
          <img key={artwork.id} src={artwork.image} alt={artwork.name} onClick={() => setSelectedArtwork(artwork)} className={selectedArtwork.id === artwork.id ? 'selected' : ''} />
        ))}
      </div>
	  
      <div className="category">
        <h2>Choose preferred Accessories</h2>
        {accessoriesStyle.map((lighting) => (
          <img key={lighting.id} src={lighting.image} alt={lighting.name} onClick={() => setselectedAccessoriesStyle(lighting)} className={selectedAccessoriesStyle.id === lighting.id ? 'selected' : ''} />
        ))}
      </div>


      <div className="category">
        <h2>Choose Wood Palette</h2>
        {WoodStyles.map((woodstyle) => (
          <img key={woodstyle.id} src={woodstyle.image} alt={woodstyle.name} onClick={() => setSelectedWood(woodstyle)} className={selectedWood.id === woodstyle.id ? 'selected' : ''} />
        ))}
      </div>
  	 <>
	 
	 
	 
<div className="moodboard-preview">
  <div className="main-image">
    {[selectedDesginStyle].map((item, index) => (     
          <img
            src={item.image}
            alt={item.name}
          />
      ))}
  </div>
  
  <div className="side-images">
         {[selectedPrimaryColor, selectedSecondryColor, selectedAccessoriesStyle,selectedArtwork ,   selectedWood , selectedFlooring ].map((item, index) => (
          <img
		    key={index}
            src={item.image}
            alt={item.name}
            className="thumbnail"
          />

      ))}
  </div>
</div>

  
  
  <div className="sponsers">
   <h2 className="mb-2 text-lg font-semibold">Sponsored by!</h2>
   
  
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
    href="https://www.colortek.eu/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/assets/ColorTek.png"
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
type ="ProjectType"
placeholder="Project Type"
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
