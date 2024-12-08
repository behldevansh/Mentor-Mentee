import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Mentors from './pages/Mentors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyMatches from './pages/MyMatches'
import Match from './pages/Match'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/mentors" element={<Mentors/>}/>
      <Route path="/mentors/:expertise" element={<Mentors/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/my-profile" element={<MyProfile/>}/>
      <Route path="/my-matches" element={<MyMatches/>}/>
      <Route path="/match/:mentorId" element={<Match/>}/>
    </Routes>
    </div>
  )
}

export default App
