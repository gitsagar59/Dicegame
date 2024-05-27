import React from 'react';
import Button from './Button';

function Startgame({toggle}) {

    return ( 
       <div id="container" className='flex justify-center align-center mt-20'>
            <div id="image">
                <img src="/Images/dices.png" alt="dices" />
            </div>
            <div className='mt-60'>
                <h1 className='text-8xl font-semibold'>Dice Game</h1>
                <Button className='text-2xl bg-white border border-black rounded hover:bg-black hover:text-white transition-colors duration-300 text-black h-10 w-40' name="Play Game" onClick={toggle} />
            </div>
       </div>
    );
}

export default Startgame;