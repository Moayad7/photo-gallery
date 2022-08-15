import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import '../../App.css'
import Navbar_list from './Navbar_list'


export const Navbar = () => {
    return(
        <div className='text-center'>
            <nav className='border-bottom navbar navbar-expand-lg '>
                <Logo name="Photos" />
                <button className="navbar-toggler float-r ms-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Navbar_list id="navbarNav"/>
                
            </nav>
        </div>
    )
}