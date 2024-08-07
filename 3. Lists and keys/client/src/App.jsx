import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const userArray = [{
    id: 1, 
    name: "Kacper",
    surname: "Gołuchowski",
    postion: "Leader"
  },
  {
    id: 2, 
    name: "Jan",
    surname: "Kowalski",
    postion: "Software Engineer"
  },
  {
    id: 3,
    name: "Joanna",
    surname: "Nowak",
    postion: "UX/UI designer"
  }]

  return (
    <>
      <ul>
      { userArray.map(user => {
        return <li key={user.id}> Hi! I am {user.name} {user.surname}. I am a {user.postion} in Kacper's company. </li>
      })

      }
      </ul>
    </>
  )
}

export default App
