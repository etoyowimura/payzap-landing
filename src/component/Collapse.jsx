import React, { useState } from 'react'
import minus from '../assets/Minus.png'
import add from '../assets/Add.png'

const Collapse = (data) => {
    const [open, setOpen] = useState(data.data.isOpen)

    const click = () => {
        setTimeout(() => {
            setOpen(!open)
        }, 300)
    }
    return (
        <div className='collapse'>
            <div className="collapse-main" onClick={click}>
                <p className='collapse-main_questions'>{data.data.key}. {data.data.question}?</p>
                <button onClick={click}><img src={open ? minus : add} alt="" /></button>
            </div>
            {open === true ?
                (
                    <p className='collapse_answer'>{data.data.answer}</p>
                )
                : (
                    <></>
                )}
        </div>
    )
}

export default Collapse