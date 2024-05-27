import { useState, useEffect } from 'react';
import useDiceChanger from '../context/UserContext';

function NumberSelection() {
    const NumberofArray = [1,2,3,4,5,6] 
    const[selectedNumber, setSelectedNumber] = useState(0);
    const {setBoxNumber} = useDiceChanger();

    const handlerSubmit = (value) => {
        setSelectedNumber(value)
        setBoxNumber(value)
    }
    
    return ( 
        <>
        <div className='p-12'>
            <div className='flex gap-1'>
                {NumberofArray.map((value, i) => (
                    <div 
                    key={i}
                    onClick={() => handlerSubmit(value)}
                    className='h-14 w-14 flex text-center items-center border border-black justify-center size-16 bord cursor-pointer transition-colors duration-300 hover:bg-black hover:text-white ' id="box" 
                    >{value}</div>
                ))}
            </div>
            <p className='font-bold flex justify-end'>Select Number</p>
        </div>
        </>
    );
}

export default NumberSelection;