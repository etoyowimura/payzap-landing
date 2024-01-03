import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg'
import menubtn from '../assets/menu-btn.svg'
import MenuButton from './MenuButton';
import RegistrationModal from './LoginModal'
const Header = ({ scrollToSection }) => {
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center' }}>
                <Link to="/"><img onDragStart={(e) => e.preventDefault()} src={logo} alt="logo" /></Link>
                <ul className='header-menu'>
                    <li className='header-menu_li'><Link to="/about" onClick={() => scrollToSection('section2')}>About</Link></li>
                    <li className='header-menu_li'><Link to="/monitor" onClick={() => scrollToSection('section3')}>Monitor</Link></li>
                    <li className='header-menu_li'><Link to="/myhome" onClick={() => scrollToSection('section4')}>My Home</Link></li>
                    <li className='header-menu_li'><Link to="/faq" onClick={() => scrollToSection('faq')}>FAQ</Link></li>
                </ul>
            </div>

            <button onClick={openModallogin} className='header-login_btn'><Link to="/login">Log in</Link></button>
            <RegistrationModal isOpen={isModalOpenlogin} onClose={closeModallogin} />

            <button onClick={openModal} style={{ background: 'none', border: 'none' }} className="header-menu_btn"><img onDragStart={(e) => e.preventDefault()} src={menubtn} alt="" /></button>
            <MenuButton scrollToSection={scrollToSection} isOpen={isModalOpen} onClose={closeModal} />
        </div>
    )
}

export default Header