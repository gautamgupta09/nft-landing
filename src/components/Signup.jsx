import React from 'react'
import signup from '../assets/signup.png'

export default function Signup() {
  return (
    <div className="signup">
      <div className="container">
        <div className="content">
          <p className="sub-title">GET YOUR FIRST DIGITAL ASSET</p>
          <h1 className="title">Why Netflix & Chill when you can NFT & Chill? 😎</h1>
          <p className="description">Dont' miss out!! Sign Up below to receive updates when we go live.</p>
          <button>Sign Up</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={signup} alt="signup" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
