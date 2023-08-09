import React from 'react';
import './HeroComponent.css'


    function HeroComponent() {
  return (
    
      <div className='text-center bg-image hero-cont'>
        <div className='mask'>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>MyTinerary</h1>
              <p className='mb-3'>Find your perfect trip, designed by insiders who know and love their cities!</p>
              <a className='btn btn-outline-light btn-lg hero-text' href='#!' role='button'>Find your Next Destination</a>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default HeroComponent
