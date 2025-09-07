import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {


  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-2xl'>Tailwind Test</h1>
      
      <Card dish = "Idli"  price = "40"/>
      <Card dish = "Sambar" price = "30"/>
    </>
  )
}

export default App
