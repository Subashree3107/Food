import React from 'react'
import './Navbar.css'
//import logo from '../../assets/logo.png'

const Navbar = () => {

  



  return (
    <nav className='container '>
     
      <ul>
        <li>Home</li>
        <li>Manager</li>
        <li>Staff</li>
        <li>Admin</li>
        <li>About Us</li>
        <li> <button className='btn'>Contact Us</button></li>

      </ul>
    </nav>
  )
}

export default Navbar
