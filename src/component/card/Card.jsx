import React from 'react'

const Card = (card) => {
  return (
    <div className='card'>
      <img className='card_icon' src={card.card.icon} alt="" />
      <h1 className="card_title">{card.card.title}</h1>
      <p className="card_subtitle">{card.card.subtitle}</p>
    </div>
  )
}

export default Card