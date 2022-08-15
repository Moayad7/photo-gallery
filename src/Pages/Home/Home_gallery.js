import React from 'react'
import Modal from './Modal'
import { useState } from 'react';
import '../../App.css'


const Home_gallery = () => {
    const [modal, setModal] = useState(false)
    const ids=[23,26,29,33,36,39,43,46,49,53,56,59,63,66,69,73,76,79]
    const [url, setUrl] = useState(``);

    return (
        <div className='row bg-light my-5 scale'>
            <Modal  open={modal} onClose={()=>setModal(false)} className="row d-flex justify-content-center align-items-center vh-100">
                <div onClick={()=>setModal(false)} className="col-12 p-4 bg-dark">
                    <h1 onClick={()=> setModal(false)} className='fixed-top pb-4'><i className='bi bi-x-circle text-dark'></i></h1>
                    <img className='align-self-center w-100' key={url} src={url}></img>
                </div>
            </Modal>
            {ids.map(id=>(
                <div className='col-4 col-lg-2 p-0'>
                    <div className='photoMove' onClick={() => {setUrl(`https://picsum.photos/id/${id}/900/550`); setModal(true);}} key={id}><img className='w-100 p-1' src={`https://picsum.photos/id/${id}/500/300`}></img></div>
                </div>
            ))}
        </div>
    )
}

export default Home_gallery