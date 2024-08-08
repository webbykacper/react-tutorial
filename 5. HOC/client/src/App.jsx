import { useState } from 'react'
import './App.css'
import Students from './Students'

function App() {
  const [count, setCount] = useState(0)

  const elements = [
    {
      id: 1,
      name: "Kacper",
      surname: "Gołuchowski"
    },
    {
      id: 2,
      name: "Ania",
      surname: "Gołuchowska"
    }
  ]

  const elements2 = [
    {
      id: 1,
      name: "Jan",
      surname: "Kowalski"
    },
    {
      id: 2,
      name: "Zosia",
      surname: "Kowalska"
    }
  ]

  return (
    <>
      <Students students={elements2} />
    </>
  )
}

export default App
