import React, { useState } from 'react';
import useDiceChanger from '../context/UserContext';
import Rules from '../components/Rules'

function Rolldice() {
    const[currentDice,setCurrentDice] = useState(1);
    const {boxNumber, setDiceNumbering, setError, error, setScore, setRules} = useDiceChanger();

    const reset = () => {
        setScore(0)
    }

    const ruling = () => {
        // alert("hello world")
        setRules((prev) => !prev)
    }

    const generatorRandomNumber = () => {
        if(boxNumber == 0) {
          setError("YOu have not select any number from box")
        } else {
                  const newDiceNumber = Math.floor(Math.random() * 6 + 1);
            setCurrentDice(newDiceNumber)
            setDiceNumbering(newDiceNumber)  
        }
    }

    return ( 
        <div>
            <div>
                <div>
                    <p className='text-red-500 font text-center'>{error}</p>
                </div>
                <div className='h-72 w-44 border border-spacing-1 flex flex-col justify-center items-center'>
                    <div className='dice' onClick={generatorRandomNumber}>
                        <img src={`/Images/dice_${currentDice}.png`} alt={`dice_${currentDice}`} />
                    </div>
                    <p className='text-center'>Click on Dice to ROll</p>
                    <button onClick={reset} className='border border-black w-40 h-10 rounded mt-1 transition-colors duration-300 hover:bg-black hover:text-white'>Reset Score</button>
                    <button onClick={ruling} className='border border-black w-40 h-10 rounded mt-2 transition-colors duration-300 hover:bg-black hover:text-white'>Show Rules</button>
                </div>
            </div>
        </div>
    );
}

export default Rolldice;