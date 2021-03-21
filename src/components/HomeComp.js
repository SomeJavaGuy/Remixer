import React, { useState, useEffect } from 'react';
import './NFT.css';

const HomeComp = (props) => {
  return (
    <>
        <div className="homeWrapper">
          <div className='clsHeader'>
            <h1>Marketplace for Remix Artwork</h1>
          </div>
          <div style={{"width": "70%", height:"70%"}}>
            <p>This is a marketplace for remixed art pieces. Get the license to remixed art work.</p>
          </div>
        </div>
    </>
  );
};

export default HomeComp;