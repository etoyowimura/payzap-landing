import React, {useState} from 'react'
import getapparrow from '../../assets/getapparrow.svg'
import headersmallbg from '../../assets/header-smallbg.svg'
import RegistrationModal from '../LoginModal';
const Section1 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className='sec1' id='section1'>
            <div className="sec1-left">
                <img className='sec1-left_img' onDragStart={(e) => e.preventDefault()} src={headersmallbg} alt="" />
                <h1 className="sec1-left_title"><span>Payzap:</span> Simplifying daily payments on your mobile</h1>
                <p className="sec1-left_subtitle">For those who want more from their money there’s Payzap.</p>
                <div className="">
                    <p className="sec1-left_text">Tap the button to get the App</p>
                    <button onClick={openModal} className='sec1-left_btn'><p>Get the App </p></button>
                    <img className="sec1-left_arrow" src={getapparrow} alt="" />
                    <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
                </div>
            </div>
        </div>

    )
}

export default Section1