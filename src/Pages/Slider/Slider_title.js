import React from 'react'
import { Link } from 'react-router-dom'

const Slider_title = () => {
  return (
    <div className='p-5 my-5 text-center'>
        <h1 className='bold color '>The Slider</h1>
        <p className=''>Slide Show  to see the photos !</p>
        <Link className='mx-2 my-1 px-4 py-2 btn btn-primary' to={"/"}>Home</Link>

    </div>
  )
}

export default Slider_title