import React from 'react';
import './App.css'; 
import logo from './Assets/alpha.jpg';

function App() {
  return (
    <div className="container">
     
      <div className="title-bar">
      <img src={logo} alt="Title Logo" className="title-image" />
      
        <h1>    Society of Alumni Affairs</h1>
        <div className="title-buttons">
          <a  className="button" target="_blank" rel="noopener noreferrer">
            Home
          </a>
          <a href="https://saa.iitj.ac.in/events.html" className="button" target="_blank" rel="noopener noreferrer">
            SAA
          </a>
        </div>
      </div>
     
    
      <div className="content-bar">
      <img src={logo} alt="Title Logo" className="cont-image" />
        <p><h1>
          <b>Alpha Squadron</b>
        </h1>
        <h3><i>Alphas don't compete, we dominate!!</i></h3>
         
        </p>
      </div>
      <div className="content-bar2">
      <h1> Vice President</h1>
      <img src="https://media.licdn.com/dms/image/v2/D5603AQHlIFmTwbN12w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724667827975?e=1741824000&v=beta&t=ta366gnc0n0AcHy0-V-NdR6qXgb01QXJipf2M7Mv4eU" className='cont1'></img>
      </div>
    </div>
  );
}

export default App;
