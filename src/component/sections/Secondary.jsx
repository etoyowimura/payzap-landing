import React,{ useState } from 'react'
import smallbg from '../../assets/secondary-smallbg.png'
import mainbg from '../../assets/secondary-mainbg.png'
import RegistrationModal from '../LoginModal';

const Secondary = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
    return (
        <div className='secondary'>
            <div className="secondary-main">
                <div className="secondary-main-left">
                    <img src={smallbg} alt="" />
                    <div className="secondary-main-left_text">
                        <h1 className="secondary-main-left_text__title">
                            <span>Payzap is your go-to mobile payment app </span>
                             dedicated to making daily transactions and utility payments effortlessly convenient.
                        </h1>
                        <p className="secondary-main-left_text__subtitle">
                            Designed with a specific focus on streamlining your daily essentials, PayZapp ensures a seamless experience for handling utility bills and everyday payments.
                        </p>
                    </div>
                    <button onClick={openModal} className="secondary-main-left_btn">Get the App</button>
                    <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
                </div>
            </div>
            {/* <div className="secondary-image">
                <img style={{marginLeft: '-18%'}} src={mainbg} alt="" />
            </div> */}
        </div>
    )
}

export default Secondary