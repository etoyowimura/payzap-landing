import React from 'react'
import { isMobile } from '../../App'

const ThirdCard = (card) => {
  return (
    <div className={`ThirdCard ThirdCard-${card.card.key}`}>
        <img src={card.card.icon} alt="" />
        <h1 className="ThirdCard_title">{card.card.title}</h1>
        <p className="ThirdCard_subtitle">{card.card.subtitle}</p>
        {isMobile === false && <img className='ThirdCard_image' src={card.card.image} alt="" />}
    </div>
  )
}

export default ThirdCard