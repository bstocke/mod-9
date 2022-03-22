import React, {useState} from 'react'
import './index.css'

const App = () => {
  const [count, setCount] = useState(0)
  const [dark, setDark] = useState(false)
  //create working constructors
  const decrement = () => {
    setCount(count -1)
  }

  const increment = () => {
    setCount(count +1)
  }

  const toggleDark = () => {
    setDark(!dark)
  }

return(
  <div className= 'App'>
    <button onClick={decrement}>Minus 1</button>
    <button onClick={increment}>Add 1</button>
    <button onClick={toggleDark}>Toggle Dark</button>
    <br/>
  </div>

  )
}

export default App;
