import React, {useState} from 'react'
import './index.css'


function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/','*','+','-','.'];

  const updateCalc = value => {
    if(
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1)
      )
    ){
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString())
    }
  }

  const [count, setCount] = useState(0)
  const [dark, setDark] = useState(false)
  //create working constructors
  const createDigits = () => {
    const digits = [];

    for (let i =1; i < 10; i++){
      digits.push (
        <button onClick={() => updateCalc (i.toString())} 
        key={i}>{i}</button>
      )
    }
    return digits;
  }

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const deleteLast = () => {
    if (calc == ''){
      return;
    }
    const value = calc.slice(0, -1);

    setCalc(value);
    setResult(value);
  }

  const decrement = () => {
    setCount(count -1)
  }

  const increment = () => {
    setCount(count +1)
  }

  const toggleDark = () => {
    setDark(!dark)
  }

const blockStyles={
  background: dark ? 'black':'yellow',
  width: '250px',
  height: '250px',
  position: 'absolute',
  top: '50%',
  left: '16%',
  transform: 'translate(-50%,-50%)'
}


return(
  <div className= 'App'>
    
    <button onClick={decrement}>Minus 1</button>
    <button onClick={increment}>Add 1</button>
    <button onClick={toggleDark}>Toggle Dark</button>
  
    <br/>

<span>Dark mode is {dark ? 'ON':'OFF'}</span>
    <div style = {blockStyles}>Count is at {count}</div>

    <div classname ="calculator">
      <div className="display">
        {result ? <span>({result})</span> : ' '}
        { calc || "0"}
      </div>
      <div className="operators">
        <button onClick={() => updateCalc('/')}>/</button>
        <button onClick={() => updateCalc('*')}>*</button>
        <button onClick={() => updateCalc('+')}>+</button>
        <button onClick={() => updateCalc('-')}>-</button>

        <button onClick={deleteLast}>DEL</button>
      </div>
      <div className="digits">
      { createDigits(App) }
        <button onClick={() => updateCalc('0')}>0</button>
        <button onClick={() => updateCalc('.')}>.</button>
        
        <button onClick={calculate}>=</button>
       
      </div>
    </div>
  </div>

  )
}

export default App;
