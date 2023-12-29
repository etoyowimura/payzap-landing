import React, {useState} from 'react'
import smallbg from '../../assets/sec3-smallbg.png'
import image1 from '../../assets/first-card-image.png'
import image2 from '../../assets/second-card-image.png'
import image3 from '../../assets/third-card-image.png'
import SecondaryCard from '../card/SecondaryCard'
import RegistrationModal from '../LoginModal';

const Section3 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const card1 = {
        image: image1,
        title: 'Real-Time Transaction Updates',
        subtitle: 'Display all transactions in real time as they occur, providing an immediate overview of spending activities.',
    }
    const card2 = {
        image: image2,
        title: 'Expense Summaries and Trends',
        subtitle: 'Present summaries of daily, weekly, monthly, or custom time frame expenses. Visualize spending trends through graphs or charts, making it easy for users to understand their expenditure patterns.',
    }
    const card3 = {
        image: image3,
        title: 'Detailed Transaction History',
        subtitle: 'Maintain a comprehensive transaction history that includes date, time, amount, merchant name, and category for each transaction. ',
    }

    return (
        
        <div className='sec3'>
            <div className="sec3-main">
                <div className="sec3-main-left">
                    <img src={smallbg} alt="" />
                    <div className="sec3-main-left_text">
                        <h1 className="sec3-main-left_text__title"><span>Keep track</span> of
                            your Payments</h1>
                        <p className="sec3-main-left_text__subtitle">Keep track of your payment history easily. Payzap provides a thorough transaction log, allowing you to view, search your past payments for better financial control. </p>
                    </div>
                    <button onClick={openModal} className="sec3-main-left_btn">Get the App</button>
                    <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
                </div>
            </div>
            <div className="sec3-cards">
                <div className="sec3-cards-row">
                    <SecondaryCard SecondaryCard={card1} />
                    <SecondaryCard SecondaryCard={card2} />
                    <SecondaryCard SecondaryCard={card3} />
                </div>
            </div>
        </div>
    )
}

export default Section3