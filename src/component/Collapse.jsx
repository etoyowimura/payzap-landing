import React, { useState } from 'react'
import minus from '../assets/Minus.png'
import add from '../assets/Add.png'

const Collapse = (data) => {
    const [open, setOpen] = useState(data.data.isOpen)

    const click = () => {
        setOpen(!open)
    }

    return (
        <div className={`collapse ${open ? 'open' : ''}`}>
            <div className="collapse-main" onClick={click}>
                <p className='collapse-main_questions'>{data.data.key}. {data.data.question}?</p>
                <button onClick={click}><img src={open ? minus : add} alt="" /></button>
            </div>
            <div className='collapse-answer-container'>
                <p className='collapse-answer_answer'>{data.data.answer}</p>
            </div>
        </div>
    )
}

export default Collapse