import React from 'react'
import { Link } from 'react-router-dom'


export const Home_title = () => {
  return (
    <div className='p-5 my-4'>
        <h1 className='bold color'>Photo Portfolio</h1>
        <p className=''>Friendly, customizable and accessible-ready simple photo gallery</p>
        <div className='d-sm-flex justify-content-center'>
            <Link className='mx-2 my-1 px-4 py-2 btn btn-primary' to="../gallery">Demo Gallery</Link>
            <Link className='mx-2 my-1 px-4 py-2 btn btn-light' to="../slider">Awesome slider</Link>
        </div>
    </div>
  )
}
