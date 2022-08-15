import React from 'react'
import Navbar_items from './Navbar_items'

const Navbar_list = () => {
  return (
    <div className='ms-4 collapse navbar-collapse' id="navbarNav">
        <ul className="navbar-nav h6">
            <Navbar_items/>
        </ul>
    </div>
  )
}

export default Navbar_list