import React from 'react'
import logo from "./pic/JK_logo.png"

export default function Header(props) {
  return (
    <div className='header'>
        <img src={logo}/>
            <ul>
                    <li><a href={props.home}>Home</a></li>
                    <li><a href={props.store}>Store</a></li>
                    <li><a href={props.cont}>Contact Us</a></li>
            </ul>
    </div>
  )
}
