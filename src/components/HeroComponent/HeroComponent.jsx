import React from 'react';
import './HeroComponent.css'
import { Link as Anchor } from 'react-router-dom';


    function HeroComponent() {
  return (
    
      <div className='text-center bg-image hero-cont'>
        <div className='mask'>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>MyTinerary</h1>
              <p className='mb-3'>Find your perfect trip, designed by insiders who know and love their cities!</p>
              <Anchor className='btn btn-outline-light btn-lg hero-text' to={"/Cities"} role='button'>Find your Next Destination</Anchor>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default HeroComponent
