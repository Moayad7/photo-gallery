import React from 'react'
import Home_gallery from './Home_gallery'
import { Home_title } from './Home_title'

export const Home = () =>{
    return(
        <div className='text-center my-4 d-flex flex-column justify-content-center align-items-center '>
            <Home_title/>
            <Home_gallery/>
        </div>
    )
  }