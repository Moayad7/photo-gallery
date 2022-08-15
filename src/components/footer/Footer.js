import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../navbar/Logo'

const Footer = () => {
    return (
        <div className=' d-flex justify-content-around align-items-center p-2 m-2 border-top '>
            <Link to={'photo-gallery'} className='nav-link'><Logo className="w-25"/></Link>
            <p className='m-0'><span className='ms-2 text-secondary'><i className='bi bi-c-circle'></i></span> 2022 Copyright</p>
            <ul className='m-0 list-unstyled d-flex fs-3 text-secondary '>
                <Link to={""} className='ms-2 nav-link'><i className='bi bi-facebook'></i></Link>
                <Link to={""} className='ms-2 nav-link'><i className='bi bi-instagram'></i></Link>
                <Link to={""} className='ms-2 nav-link'><i className='bi bi-twitter'></i></Link>
            </ul>
        </div>
  )
}

export default Footer