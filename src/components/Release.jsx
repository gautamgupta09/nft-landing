import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import release1 from '../assets/release1.png'
import release2 from '../assets/release2.png'
import Card from './Card'

export default function Release() {
  return (
    <div className="releases">
      <div className="release orange">
        <div className="content">
          <h2 className="title">Initial Release 4/11</h2>
          <p className="description">We have released our limited edition NFT's of Squid Game X Money Heist on <a href="#">OpenSea.</a></p>
          <p className="description">There will be only four of these NFT's we ever make, so be sure not to miss out!!</p>
          <p className="description">Keep calm and collect your NFT's
          <a href="#" className="link">
          Wanna Exchange NFT's? <BsArrowRight />  
          </a>
          </p>
        </div>
        <div className="image">
          <img src={release1} alt="release" />
          <div className="ellipse pink"></div>
        </div>
      </div>
      <div className="release green">
        <div className="card-container">
          <Card
          image={release2}
          series="Money Heist Series"
          title="Alicia"
          price={3.95}
          tag={12083}
          time={2}
          /> 
          <div className="ellipse orange"></div>
        </div>
        <div className="content">
          <h2 className="title">Upcoming Release 9/11</h2>
          <p className="description">We will be releasing our next limited edition NFT's soon on which you can bid via <a href="#">OpenSea.</a></p>
          <p className="description">As you know we make NFT's based on movie characters avatars, so can you guess the upcoming series?</p>
          <p className="description">One of you will get 50% discount on your next NFT!!
          <a href="#" className="link">
          Comment here to participate <BsArrowRight />  
          </a>
          </p>
        </div>   
      </div>
    </div>
  )
}
