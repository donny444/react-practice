import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './components/MyButton'
import MyProfile from './components/MyProfile'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Patiphan Phengpao")
  const [ifTrue, setIfTrue] = useState(true)

  const user = {
    firstName: "John",
    lastName: "Doe",
    imgPic: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
  }

  const products = [
    { title: "Cabbage", id : 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 }
  ]

  function handleInCreaseClick() {
    setCount(count + 1)
  }

  function handleDeCreaseClick() {
    setCount(count - 1)
  }

  return (
    //React Fragments
    <>
      <h1>Welcome to my app</h1>
      <MyProfile data={user}/>
      <p>{count}</p>
      <button onClick={handleInCreaseClick}>Increase</button>
      <button onClick={handleDeCreaseClick}>Decrease</button>
      <MyButton />
      {/* Ternary Operator */}
      {ifTrue ? "Yes, it's true" : "No, it's false"}
      <ul>
        {products.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  )
}

export default App
