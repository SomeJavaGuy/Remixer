
import './NFT.css';
import { Button } from './Button';
import React, { useState, useEffect } from 'react';



function NFT() {
    const [button, setButton] = useState(true);
    return (
        <>

        <div className='text'>
                
            <h3 className='creater'> Sanchit Banati </h3>
            <img src="./images/unnamed.jpg" roundedCircle alt='my'className='creator-image'/>
            <h1 className='Name'> Banati Bombers </h1>
            <p className='text2'>Let's talk about Money, Finance, Stock Markets, Savings, Business and Most Importantly Life of STudent <br></br>
            who is motivated to save money and live like a cheap star in his 20's to transform his life and live his <br></br>
            dream of becoming a personal finance enthusiast. </p>
            {button && <Button buttonStyle='btn--outline' className='dropdown'>Get License </Button>} 
        </div>
        <div className='nft'>
            <img src="./images/download.jpeg" alt='cryptokitty' />
        </div>
        </>
    )
}

export default NFT
