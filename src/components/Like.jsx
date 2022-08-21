import React from 'react'
import eth1 from '../assets/eth1.png'
import eth2 from '../assets/eth2.png'

export default function Like() {
  return (
    <div className="like">
      <div className="container">
        <div className="content">
        <div className="image">
          <img src={eth1} alt="eth1" />
        </div>
          <h2 className="title">NFT</h2>
          <p className="description">
          NFT means non-fungible tokens (NFTs), which are generally created using the same type of programming used for cryptocurrencies. In simple terms these cryptographic assets are based on blockchain technology. NFTs are individual tokens with valuable information stored in them.
          </p>
          <p className="description">
          They cannot be exchanged or traded equivalently like other cryptographic assets.
          </p>
        </div>
        <div className="content">
        <div className="image">
          <img src={eth2} alt="eth2" />
        </div>
          <h2 className="title">Ethereum</h2>
          <p className="description">
          Ethereum is a decentralized global software platform powered by blockchain technology. It is most commonly known for its native cryptocurrency, ether, or ETH. Ethereum can be used by anyone to create any secured digital technology. 
          </p>
          <p className="description">
          It has a token designed for use in the blockchain network, but it can also be used by participants as a method to pay for work done on the blockchain.
          </p>
        </div>
      </div>
    </div>
  )
}
