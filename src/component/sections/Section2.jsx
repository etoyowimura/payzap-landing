import React, { useState } from 'react'
import mainbg from '../../assets/sec2-mainbg.png'
import sec2bg from '../../assets/section2-bg.png'
import icon1 from '../../assets/secIcon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import icon5 from '../../assets/icon5.png'
import icon6 from '../../assets/icon6.png'
import icon7 from '../../assets/icon7.png'
import icon8 from '../../assets/icon8.png'
import icon9 from '../../assets/icon9.png'
import Card from '../card/Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { isMobile } from '../../App'
import RegistrationModal from '../LoginModal';

const Section2 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const card1 = {
        icon: icon1,
        title: 'Bill Aggregation and Management',
        subtitle: 'A dashboard allowing users to add multiple utility accounts (electricity, water, gas, internet) and view all bills in one place, categorizing them by type and due date.',
    }
    const card2 = {
        icon: icon2,
        title: 'Quick Payment Options',
        subtitle: 'One-tap payment functionality for immediate bill settlement, displaying outstanding amounts prominently.',
    }
    const card3 = {
        icon: icon3,
        title: 'Scheduled Payments',
        subtitle: 'A feature enabling users to set up recurring payments for regular bills, specifying frequencies (monthly, bi-monthly) and preferred payment methods.',
    }
    const card4 = {
        icon: icon4,
        title: 'Payment Reminders',
        subtitle: 'Customizable reminders alerting users a few days before the due date for pending bills, offering options to snooze or pay immediately.',
    }
    const card5 = {
        icon: icon5,
        title: 'Usage Analytics',
        subtitle: 'Graphical representations or charts illustrating monthly consumption patterns for each utility service, aiding users in understanding and managing their usage.',
    }
    const card6 = {
        icon: icon6,
        title: 'Secure Payment Processing',
        subtitle: 'Integration with robust security protocols, utilizing encryption and secure tokenization for safe handling of payment information.',
    }
    const card7 = {
        icon: icon7,
        title: 'Bill History and Receipts',
        subtitle: 'A comprehensive history log of past payments, displaying payment statuses and allowing users to download or email receipts.',
    }
    const card8 = {
        icon: icon8,
        title: 'Customer Support Access',
        subtitle: 'In-app chat or call support for immediate assistance with billing inquiries, dispute resolution, or account-related issues.',
    }
    const card9 = {
        icon: icon9,
        title: 'Notification Customization',
        subtitle: 'Allow users to personalize notifications based on bill types, preferred timing, and urgency, ensuring relevant and timely alerts.',
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
        
        <div className='sec2'>
            <div className="sec2-main">
                <div className="sec2-main-left">
                    <img style={{ marginBottom: 30 }} src={sec2bg} alt="" />
                    <div className="sec2-main-left_text">
                        <h1 className="sec2-main-left_text__title"><span>Pay</span> for utilities
                            with ease</h1>
                        <p className="sec2-main-left_text__subtitle">With Payzap, making payments is as easy as a single click. Save your payment details securely within the app and initiate transactions easy whenever you need to.</p>
                    </div>
                    <button onClick={openModal} className='sec2-main-left_btn'>Get the App</button>
                    <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
                </div>
                {/* <div className="sec2-main-right">
                    <img src={mainbg} alt="" />
                </div> */}
            </div>
            {isMobile ? (
                <div className="sec2-cards-container">
                    <Slider {...settings} className="sec2-cards">
                        <Card id='1' card={card1} />
                        <Card id='2' card={card2} />
                        <Card id='3' card={card3} />
                        <Card id='4' card={card4} />
                        <Card id='5' card={card5} />
                        <Card id='6' card={card6} />
                        <Card id='4' card={card7} />
                        <Card id='5' card={card8} />
                        <Card id='6' card={card9} />
                    </Slider>
                    <div className="dots-container">
                        {Array.from({ length: 9 }).map((_, index) => (
                            <div
                                key={index}
                                className={`dot ${index === activeIndex ? 'active' : ''}`}
                                onClick={() => setActiveIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <div className='sec2-c'>
                    <div className="sec2-cards">
                        <Card id='1' card={card1} />
                        <Card id='2' card={card2} />
                        <Card id='3' card={card3} />
                    </div>
                    <div className="sec2-cards">
                        <Card id='4' card={card4} />
                        <Card id='5' card={card5} />
                        <Card id='6' card={card6} />
                    </div>
                    <div className="sec2-cards">
                        <Card id='4' card={card4} />
                        <Card id='5' card={card5} />
                        <Card id='6' card={card6} />
                    </div>
                </div>
            )}

        </div>
    )
}

export default Section2