import { useContext, createContext, useState } from 'react';

export const UserContext = createContext(); 

export const UserContextProvider = ({children}) => {
   const [boxNumber, setBoxNumber] = useState(0);
   const [diceNumbering, setDiceNumbering] = useState(1);
   const [score, setScore] = useState(0);
   const [error, setError] = useState(false);
   const [rules, setRules] = useState(false);

   return (
      <UserContext.Provider value={{boxNumber, setBoxNumber, diceNumbering, setDiceNumbering, score, setScore, error, setError, rules, setRules}}>
         {children}
      </UserContext.Provider>
   );
   
}

export default function useDiceChanger() {
   return useContext(UserContext)
}