import TotalScore from './TotalScore';
import NumberSelection from './NumberSelection';
import Rolldice from './Rolldice';
import useDiceChanger from '../context/UserContext';
import { useEffect } from 'react';
import Rules from './Rules';

function Gameplay() {
    const{boxNumber, diceNumbering, setBoxNumber, score, setScore, rules, setRules} = useDiceChanger(); 

    useEffect(() => {
    if(boxNumber !== 0) {  //diceNumbering !== 0
        if(boxNumber === diceNumbering) {
            setScore((prev) => prev + diceNumbering)
            setBoxNumber(0)
        } else {
            setScore((prev) => prev - 2)
            setBoxNumber(0)
        }
    }
    }, [diceNumbering])

    return ( 
        <div>
            <div id="container">
                <div id="header" className='flex justify-between'>
                    <TotalScore score={score}/>
                    <NumberSelection />
                </div>
                <div className='flex justify-center align-center'>
                <Rolldice/>
                </div>
            </div>
            <div className='flex justify-center align-center mt-5'>
                {rules && <Rules className="bg-slate-200 rounded"/>}
            </div>
        </div>
    );
}

export default Gameplay;