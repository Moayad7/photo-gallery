import React from 'react'
import { Link } from 'react-router-dom';

const Navbar_items = () => {

  const pages = ["Home","Gallery","Slider"];

  return (
    <div className='d-lg-flex'>
      {pages.map(page => (
        <li key={Math.floor(Math.random()*100)+1} className='nav-item'>
          <Link className="nav-link" to={page=='Home'? '/' : page}>{page}</Link>
        </li>
      ))}
    </div>
  )
}

export default Navbar_items