import React, { useRef } from 'react'
import './Navbar.css'
import { motion   } from "framer-motion"

// import Badge from '@mui/material/Badge';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



export default function Navbar() {
  const menuRef = useRef()
  const menuToggle = () =>  menuRef.current.classList.toggle('Active-menu') 
  return (
    <div className='Nav mb-5'>
      <div className='container'>
        <div className='navigation'>
          <div className='logo'>
            <h2 className='d-flex aling-items-center gap-1'>
            <span>
            <i className="fa-solid fa-utensils"></i>
            </span>
            Chef Food
            </h2>

          </div>
          <div className='nav-menu' onClick={menuToggle} ref={menuRef}> 
          <div className='nav-list-wrapper d-flex justify-content-center align-items-center gap-5'>
            
         
          <ul className='nav-list '>
            <li className='nav-item'>
               <a href="#Home"> Home</a>
            </li>
            <li className='nav-item'>
               <a href="#About"> About</a>
            </li>
            <li className='nav-item'>
               <a href="#Menu"> Menu</a>
            </li>
            <li className='nav-item'>
               <a href="#Recipes"> Recipes</a>
            </li>
            <li className='nav-item'>
               <a href="#Contact"> Contact</a>
            </li>
          </ul>
          <div className='menu-right'>
            <div className='custom-search'>
              <input type="text"  value="" placeholder='Search...'/>
              <span> <i className="fa-solid fa-magnifying-glass"></i></span>
            </div>
            
          </div>
          </div>
         
          </div>
          <div className='menu-mobile' >
            <span> <i className="fa-solid fa-bars" onClick={menuToggle}></i></span>
          </div>
        </div>
        </div>
   
    </div>

  )
}
