import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15)
  
  // let counter = 15;

  const addValue = () => {
    if (counter >= 20) {
      return;
    }
    // counter = counter + 1;
    setCounter(counter + 1);
    console.log(counter);
  }

  const removeValue = () => {
    if (counter <= 0) {
      return;
    }
      setCounter(counter - 1);
      console.log(counter);
  }
  return (
    <>
      <h1>React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
