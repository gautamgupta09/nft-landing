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
          <p className="description">We have released four limited edition NFT's on which you can bid via <a href="#">OpenSea.</a></p>
          <p className="description">There will be only four of these NFT's we ever make, so be sure not to miss out!!</p>
          <p className="description">Keep calm and collect your NFT's
          <a href="#" className="link">
          What's coming next <BsArrowRight />  
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
          series="Floop Series"
          title="Purple Man"
          price={2.99}
          tag={12983}
          time={1}
          /> 
          <div className="ellipse orange"></div>
        </div>
        <div className="content">
          <h2 className="title">Initial Release 4/11</h2>
          <p className="description">We have released four limited edition NFT's on which you can bid via <a href="#">OpenSea.</a></p>
          <p className="description">There will be only four of these NFT's we ever make, so be sure not to miss out!!</p>
          <p className="description">Keep calm and collect your NFT's.
          <a href="#" className="link">
          What's coming next <BsArrowRight />  
          </a>
          </p>
        </div>   
      </div>
    </div>
  )
}
