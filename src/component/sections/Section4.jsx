import React, { useState } from 'react'
import smallbg from '../../assets/sec4-smallimg.png'
import bgright from '../../assets/sec4-seconbg.png'
import icon1 from '../../assets/frst-icon-card.png'
import icon2 from '../../assets/scnd-icon-card.png'
import icon3 from '../../assets/thrd-icon-card.png'
import image1 from '../../assets/first-img-card.png'
import image2 from '../../assets/sec-img-card.png'
import image3 from '../../assets/thrd-img-card.png'
import ThirdCard from '../card/ThirdCard'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RegistrationModal from '../LoginModal';
import { isMobile } from '../../App'
const Section4 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const card1 = {
        key: '1',
        icon: icon1,
        image: image1,
        title: 'Centralized Utility Management',
        subtitle: "Ability to add and manage multiple utility accounts (electricity, water, gas, internet) associated with a user's home.",
    }
    const card2 = {
        key: '2',
        icon: icon2,
        image: image2,
        title: 'Unified Bill Payments',
        subtitle: 'View and pay all pending bills for different utilities from a single interface within the "My Home" section.',
    }
    const card3 = {
        key: '3',
        icon: icon3,
        image: image3,
        title: 'User-Friendly Interface',
        subtitle: 'Intuitive and easy-to-navigate interface providing access to all utility-related information and functionalities.',
    }

    const [activeIndex, setActiveIndex] = useState(0);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        afterChange: (index) => setActiveIndex(index),
    };

    return (
        <div className='sec4'>
            <div className="sec4-main">
                <div className="sec4-main-left">
                    <img src={smallbg} style={{ marginBottom: 30 }} alt="" />
                    <div className="sec4-main-left_text">
                        <h1 className="sec4-main-left_text__title"><span>Your Home</span> in your pocket</h1>
                        <p className="sec4-main-left_text__subtitle">With Payzap, making payments is as easy as a single click. Save your payment details securely within the app and initiate transactions easy whenever you need to.</p>
                    </div>
                    <button onClick={openModal} className="sec4-main-left_btn">Get the App</button>
                    <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
                </div>
                {/* <div className="sec4-main-right">
                    <img src={bgright} alt="" />
                </div> */}
            </div>
            {isMobile ? (
                <div className="sec4-cards-container">
                    <Slider {...settings} className="sec4-cards">
                        <ThirdCard card={card1} />
                        <ThirdCard card={card2} />
                        <ThirdCard card={card3} />
                    </Slider>
                    <div className="dots-container">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <div
                                key={index}
                                className={`dot ${index === activeIndex ? 'active' : ''}`}
                                onClick={() => setActiveIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="sec4-cards">
                    <div className="sec4-cards-row">
                        <ThirdCard card={card1} className='cr1' />
                        <ThirdCard card={card2} className='cr2' />
                        <ThirdCard card={card3} className='cr3' />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Section4