import React from 'react'
import { Link } from 'react-router-dom'

const Gallery_title = () => {
  return (
    <div className='p-5 my-5'>
        <h1 className='bold color'>The Gallery</h1>
        <p className=''>Here you can see our photos.</p>
        <Link className='mx-2 my-1 px-4 py-2 btn btn-primary' to={"../photo-gallery"}>Home</Link>

    </div>
  )
}

export default Gallery_title