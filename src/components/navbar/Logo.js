import React from 'react'
import logo from '../../images/logo.png'
import '../../App.css';


export const Logo  = (props) => {
    
     return(
        <div className='d-flex align-items-center'>
            <img src={logo} className="w-logo"></img>
            <h2 className='ms-2 mb-0'>{props.name}</h2>
        </div>
     )
};