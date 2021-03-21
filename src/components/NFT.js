
import './NFT.css';
import { Button } from './Button';
import React, { useState, useEffect } from 'react';



const NFT = (props) => {
    const [button, setButton] = useState(true);
    return (
        <>
        <div className="licWrapper">
          <div className='text'>
            <div>
              <h1 className='creater'> Sanchit Banati </h1>
              {/* <img src="./images/unnamed.jpg" roundedCircle alt='my'className='creator-image'/> */}
              </div>
              <div style={{"width": "70%", height:"60%"}}>
                <h2 className='Name'> Banati Bombers </h2>
                <p className='text2'>Let's talk about Money, Finance, Stock Markets, Savings, Business and Most Importantly Life of STudent <br></br>
                  who is motivated to save money and live like a cheap star in his 20's to transform his life and live his <br></br>
                  dream of becoming a personal finance enthusiast. </p>
                
                <Button buttonStyle='btn--outline' className='dropdown'>Get License </Button>
              </div>
          </div>
          <div className='nft'>
              <img src="./images/download.jpeg" alt='cryptokitty' />
          </div>
        </div>
        </>
    );
};

export default NFT;
