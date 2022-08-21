import React from 'react';
import home from '../assets/home.png';

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title">LAUNCHING SOON</p>
          <h1 className="title">An NFT like no other</h1>
          <p className="description">Dont' miss out on the release of our new NFT's. Sign Up below to receive updates when we go live.</p>
          <button>Sign Up</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="home" />
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
