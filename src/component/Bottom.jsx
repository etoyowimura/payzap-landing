import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import Instagram from '../assets/Instagram.png'
import Facebook from '../assets/Facebook.png'
import Linkedin from '../assets/Linkedin.png'
import Whatsapp from '../assets/Whatsapp.png'
import App from '../App'

const Bottom = () => {
  return (
    <div className='bottom'>
      <Router>
        <img className='img' src={Logo} alt="" />
        <ul className="bottom-menu">
          <li className="bottom-menu_li"><Link>Privacy Policy</Link></li>
          <li className="bottom-menu_li"><Link>Terms of Services</Link></li>
          <li className="bottom-menu_li"><Link>Cookies</Link></li>
        </ul>
        <ul className="bottom-social">
          <li className="bottom-social_li"><Link><img src={Instagram} alt="" /></Link></li>
          <li className="bottom-social_li"><Link><img src={Facebook} alt="" /></Link></li>
          <li className="bottom-social_li"><Link><img src={Linkedin} alt="" /></Link></li>
          <li className="bottom-social_li"><Link><img src={Whatsapp} alt="" /></Link></li>
        </ul>

        <Routes>
          <Route exact path="/" component={<App />} />
          <Route exact path="/" component={<App />} />
          <Route exact path="/" component={<App />} />
          <Route exact path="/" component={<App />} />
          <Route exact path="/" component={<App />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Bottom