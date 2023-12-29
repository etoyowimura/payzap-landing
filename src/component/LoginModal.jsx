import React, { useState } from 'react';
import close from '../assets/close-btn.png'
import logo from '../assets/logo-mobile.png'
const LoginModal = ({ isOpen, onClose }) => {
    const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');  

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value);
    // };

    // const handleRegistration = () => {
    //     onClose();
    // };

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <div className='d-flex jcsb' style={{width: '90%', margin: 'auto', marginTop: '10px'}}>
                    <img style={{width: 'auto', height: 'auto'}} src={logo} alt="" />
                    <span className="close" onClick={onClose}><img src={close} alt="" /></span>
                </div>
                <div className="modal-content-text">
                    <h1 className="modal-content-text_title">Join the Waitlist</h1>
                    <p className="modal-content-text_sub">Be the first to know when we launch. Enter your email to join our waitlist.</p>
                </div>
                <div className="modal-content-join">
                    <input onChange={handleUsernameChange} placeholder='name@mail.com' type="text" id="username" value={username} className='modal-content-join_input' />
                    <button className="modal-content-join_btn">Join Waitlist</button>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
