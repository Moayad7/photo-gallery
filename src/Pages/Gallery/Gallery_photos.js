import React from 'react'
import { Link } from 'react-router-dom'

const Gallery_photos = () => {
    const ids=[23,26,29,33,36,39,43,46,49,53,56,59,63,66,69,73,76,79]
    
  return (
    
    <div className='row '>
        {ids.map(photo=>(
            <div className='position-relative vis scale col-12 col-lg-6 p-0'>
                <div className='photoScale'  ><img className='w-100 p-1' src={`https://picsum.photos/id/${photo}/500/300`} ></img></div>
                <a key={photo} className='opacity-75 d-flex align-items-center justify-content-center text-center w-100 h-100 position-absolute top-0 left-0 be-visible' target="_blank" href={`https://picsum.photos/id/${photo}/1200/700`}>
                    <p className='text-light display-4' >Click to open ..!</p>
                </a>
            </div>
        ))}
    </div>
  )
}

export default Gallery_photos