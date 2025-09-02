import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero'
import Programs from './Components/Programs/Program'
import Title from './Components/Title/Title'
import Members from './Components/Members/Members'
import About from './Components/About/About'

const App = () => {
  return (
    <div>
    <Navbar/>  
    <Hero/>
    <Title/>
    <Programs/>
    <Members/>
    <Title subTitle= 'hh' title='ppp'/>
    <About/>
    
    </div>
  )
}

export default App

