import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const Slider_body = () => {
    const photos=[23,26,29,33,36,39,43,46,49,53,56,59,63,66,69,73,76,79]
    
  return (
    <div className='d-flex align-items-center mb-5 justify-content-center scale'> 
        <SimpleImageSlider
            width={`100%`}
            height={500}
            images={photos.map(photo=>`https://picsum.photos/id/${photo}/1000/500`)}
            showBullets={true}
            showNavs={true}
        />
    </div>
  )
}

export default Slider_body