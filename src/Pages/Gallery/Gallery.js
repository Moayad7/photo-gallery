import React from 'react'
import Gallery_photos from './Gallery_photos';
import Gallery_title from './Gallery_title';

function Gallery() {
  return (
    <div className='text-center'>
      <Gallery_title/>
      <Gallery_photos/>
    </div>
  );
}

export default Gallery;
