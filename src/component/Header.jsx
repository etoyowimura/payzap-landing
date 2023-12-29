import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App from '../App';
import logo from '../assets/Logo.png'
import menubtn from '../assets/menu-btn.png'
import MenuButton from './MenuButton';
import RegistrationModal from './LoginModal'
const Header = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenlogin, setIsModalOpenlogin] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const openModallogin = () => {
        setIsModalOpenlogin(true);
    };

    const closeModallogin = () => {
        setIsModalOpenlogin(false);
    };
    return (
        <div className='header'>
            <Router>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center' }}>
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                    <ul className='header-menu'>
                        <li className='header-menu_li'><Link to="/pay">Pay</Link></li>
                        <li className='header-menu_li'><Link to="/send">Send</Link></li>
                        <li className='header-menu_li'><Link to="/monitor">Monitor</Link></li>
                        <li className='header-menu_li'><Link to="/about">About</Link></li>
                    </ul>
                </div>

                <button onClick={openModallogin} className='header-login_btn'><Link to="/login">Log in</Link></button>
                <RegistrationModal isOpen={isModalOpenlogin} onClose={closeModallogin} />
                <button onClick={openModal} style={{ background: 'none', border: 'none' }} className="header-menu_btn"><img src={menubtn} alt="" /></button>
                <MenuButton isOpen={isModalOpen} onClose={closeModal} />

                <Routes>
                    <Route exact path="/" component={<App />} />
                    <Route exact path="/pay" component={<App />} />
                    <Route exact path="/send" component={<App />} />
                    <Route exact path="/monitor" component={<App />} />
                    <Route exact path="/About" component={<App />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Header