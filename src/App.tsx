import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <p>{2 < 4 ? "True" : "False"}</p>

{2 < 4 ? <p>Condition met</p> : <h1>Condition not met</h1>}

<p>{2 + 2 == 99 || 2 + 2 == 4 ? "TRUE" : "FALSE"}</p>

<p>{2 + 2 == 4 && 2 + 4 == 6 ? "TRUE" : "FALSE"}</p>
      </div>
    </>
  )
}

export default App
