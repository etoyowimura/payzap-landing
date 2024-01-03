import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.svg'
import Instagram from '../assets/Instagram.png'
import Facebook from '../assets/Facebook.png'
import Linkedin from '../assets/Linkedin.png'
import Whatsapp from '../assets/Whatsapp.png'

const Bottom = () => {
  return (
    <div className='bottom'>
        <img onDragStart={(e) => e.preventDefault()} className='img' src={Logo} alt="" />
        <ul className="bottom-menu">
          <li className="bottom-menu_li"><Link>Privacy Policy</Link></li>
          <li className="bottom-menu_li"><Link>Terms of Services</Link></li>
          <li className="bottom-menu_li"><Link>Cookies</Link></li>
        </ul>
        <ul className="bottom-social">
          <li className="bottom-social_li"><Link><img onDragStart={(e) => e.preventDefault()} src={Instagram} alt="" /></Link></li>
          <li className="bottom-social_li"><Link><img onDragStart={(e) => e.preventDefault()} src={Facebook} alt="" /></Link></li>
          <li className="bottom-social_li"><Link><img onDragStart={(e) => e.preventDefault()} src={Linkedin} alt="" /></Link></li>
          <li className="bottom-social_li"><Link><img onDragStart={(e) => e.preventDefault()} src={Whatsapp} alt="" /></Link></li>
        </ul>
    </div>
  )
}

export default Bottom