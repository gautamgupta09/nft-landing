import React from 'react'
import super1 from '../assets/super1.png';
import super2 from '../assets/super2.png';
import super3 from '../assets/super3.png';
import super4 from '../assets/super4.png';
import Card from './Card';

export default function SuperRare() {
  const data = [
    {
      image: super1,
      series: "Squid Game Series",
      title: "Seong Gi-Hun",
      price: 6.79,
      tag: 11943,
      time: 1
    },
    {
      image: super2,
      series: "Money Heist Series",
      title: "Raquel",
      price: 3.55,
      tag: 12983,
      time: 2
    },
    {
      image: super3,
      series: "Money Heist Series",
      title: "Berlin",
      price: 4.99,
      tag: 17883,
      time: 2
    },
    {
      image: super4,
      series: "Squid Game Series",
      title: "Kang Sae-Byeok",
      price: 5.7,
      tag: 18395,
      time: 1
    }
  ]
  return (
    <div className="super-rare">
      <div className="title-container">
        <h2 className="title">Squid Game X Money Heist</h2>
        <p className="description">We have released four limited edition NFT's on which you can bid via <a href="#">OpenSea.</a>
        </p>
      </div>
      <div className="cards">
        {data.map(({ image, series, title, price, tag, time}, index) => (
          <Card
            image={image}
            series={series}
            title={title}
            price={price}
            tag={tag}
            time={time}
            key={index}
            />
        ))}
      </div>
    </div>
  )
}
