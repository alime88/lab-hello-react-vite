import { useState } from 'react'
import './App.css'


function App() {

  // const [nameOfState, updaterFunction] = useState(intialValue)
  const [count, setCount] = useState(0)
  const [theme,setTheme] = useState('light')


  console.log("Component Renders")

  // We always change the value of states using the updater function

  function increaseCount() {
    setCount(prevCount => prevCount + 1)
    setCount((prevCount) => { return prevCount + 1 })
    setCount((prevCount) => { return prevCount + 100 })
    setCount((prevCount) => { return prevCount / 5 })
  }

  function decreaseCount() {
    setCount(count - 1)
  }

  function consoleName() {
    return "Elanor"
  }

  return (
    <div className={`App ${theme}`}>           <h2>Counter</h2>

      <p>You clicked {count} times</p>

      {consoleName()}

      {/* In React Events are camelCased */}
      <button onClick={decreaseCount}> - </button>
      <button onClick={increaseCount}> + </button>

      <input onChange={(event)=>{console.log(event.target.value)}} type="text" />

      <input onChange={(e)=>{console.log(e.target.value)}} type="text" />

      <select onChange={(e)=>{setTheme(e.target.value)}}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>


    </div>
  )
}

export default App
