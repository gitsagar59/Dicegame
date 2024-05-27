import React from 'react';

function Rules({className}) {
    return ( 
        <div className={className}>
            <h2 className='text-center font-bold p-3 underline'>How to play dice game</h2>
            <div className='p-3 leading-7'>
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>after click on dice if selected number is equal to dice number you
                will get same point as dice{" "}</p>
                <p>if you get wrong guess then 2 point will be dedcuted</p>
            </div> 
        </div>
    );
}

export default Rules;