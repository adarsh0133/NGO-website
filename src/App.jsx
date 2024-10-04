import React from 'react'
import Home from './components/Home'
import 'remixicon/fonts/remixicon.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Approach from './components/Approach'

const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/approach" element={<Approach />}/>
    </Routes>
    </div>
  )
}

export default App