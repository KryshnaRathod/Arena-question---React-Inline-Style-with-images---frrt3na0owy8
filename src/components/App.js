import React from 'react'
import '../styles/App.css';
import pic from '../NewtonSchool.jpg'
const App = () => {

  return (
    <div id="navbar">
      <div>NavBar</div>
      <img   src={imageSrc} // Set the image source to the imported image
          style={{
            width: '130px', // Set the width of the image to '130px'
            height: '100px', // Set the height of the image to '100px'
            margin: '10px', // Set a margin of '10px' around the image
          }}
          alt="Navbar Image" />
    </div>
  )
}


export default App;
