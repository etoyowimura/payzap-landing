import React from 'react'
import logo from '../assets/logo-mobile.png'
import close from '../assets/close-btn.png'
import {Link} from 'react-router-dom'

const MenuButton = ({ isOpen, onClose, scrollToSection }) => {
    return (
        <div className={`menuBtn ${isOpen ? 'open' : ''}`}>
            <div className="menuBtn-content">
                <div className='d-flex jcsb' style={{ width: '90%', margin: 'auto', marginTop: '10px' }}>
                    <img style={{ width: 'auto', height: 'auto' }} src={logo} alt="" />
                    <span className="close" onClick={onClose}><img src={close} alt="" /></span>
                </div>
                <ul className="menuBtn-content-menu">
                    <li className="menuBtn-content-menu_li">
                        <Link onClick={() => { scrollToSection('section2'); onClose(); }} to='/about'>About</Link>
                    </li>
                    <li className="menuBtn-content-menu_li">
                        <Link onClick={() => { scrollToSection('section3'); onClose(); }} to='/monitor'>Monitoring</Link>
                    </li>
                    <li className="menuBtn-content-menu_li">
                        <Link onClick={() => { scrollToSection('section4'); onClose(); }} to='/myhome'>My Home</Link>
                    </li>
                    <li className="menuBtn-content-menu_li">
                        <Link onClick={() => { scrollToSection('faq'); onClose(); }} to='faq'>FAQ</Link>
                    </li>
                </ul>
                <ul className="menuBtn-content-menu2">
                    <li className="menuBtn-content-menu2_li">
                        <Link>Privacy Policy</Link>
                    </li>
                    <li className="menuBtn-content-menu2_li">
                        <Link>Terms of Services</Link>
                    </li>
                    <li className="menuBtn-content-menu2_li">
                        <Link>Cookies</Link>
                    </li>
                </ul>
                <ul className="menuBtn-content-menu2">
                    <li className="menuBtn-content-menu2_li">
                        <Link>Instagram</Link>
                    </li>
                    <li className="menuBtn-content-menu2_li">
                        <Link>Facebook</Link>
                    </li>
                    <li className="menuBtn-content-menu2_li">
                        <Link>Linkedin</Link>
                    </li>
                    <li className="menuBtn-content-menu2_li">
                        <Link>Watsapp</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MenuButton