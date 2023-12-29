import React, { useState } from 'react'
import RegistrationModal from './LoginModal';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className='footer'>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column' }}>
          <h1><span>Join us.</span> Get Payzap.</h1>
          <button onClick={openModal} className="sec3-main-left_btn">Get the App</button>
        </div>
      </div>
      <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default Footer;