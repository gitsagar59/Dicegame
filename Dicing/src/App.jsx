import { useState } from 'react'
import './App.css'
import Gameplay from './components/Gameplay'
import Startgame from './components/Startgame'
import { UserContextProvider } from './context/UserContext'

function App() {
  const [gameLoadingState, setGameLoadingState] = useState(false)

  const toggleGamePlay = () => {
    setGameLoadingState((prev) => !prev)
  }

  return (
    <UserContextProvider> 
      {gameLoadingState ? <Gameplay /> : <Startgame toggle={toggleGamePlay}/>} 
    </UserContextProvider>
  )
}

export default App
