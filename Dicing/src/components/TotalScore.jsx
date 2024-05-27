import React from 'react';

function TotalScore({ score }) {
    return ( 
        <div className="p-6">
            <h1 className='text-8xl ml-12'>{score}</h1>
            <p className='text-3xl font-medium'>TotalScore</p>
        </div>
    );
}

export default TotalScore;