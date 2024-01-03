import React from 'react'

const SecondaryCard = (SecondaryCard) => {

    return (
        <div className='SecondaryCard'>
            <img onDragStart={(e) => e.preventDefault()} className='SecondaryCard_bg' src={SecondaryCard.SecondaryCard.image} alt="" />
            <div className="SecondaryCard_text">
                <h1 className="SecondaryCard_text__title">{SecondaryCard.SecondaryCard.title}</h1>
                <p className="SecondaryCard_text__subtitle">{SecondaryCard.SecondaryCard.subtitle}</p>
            </div>
        </div>
    )
}

export default SecondaryCard