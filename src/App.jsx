import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <p className="text-3xl font-bold underline">
        Hello world
      </p>
    </div>
  )
}

export default App
