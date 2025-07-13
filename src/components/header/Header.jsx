import React from 'react'
import "./Header.css"

import logo from "../../assets/logo.svg"
import icon from "../../assets/profile.svg"
import icons from "../../assets/cart.svg"


const Header = () => {
    return (
        <header>
            <nav className='navbar container'>
                <div className='nav__logo'>
                    <img src={logo} alt="" />
                </div>
                <ul className='nav__collection'>
                    <li>
                        <a href="">
                            <span>Discovery</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>Contact us</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>About</span>
                        </a>
                    </li>
                </ul>
                <div className='nav__icon'>
                    <img src={icon} alt="" />
                    <img src={icons} alt="" />
                </div>
            </nav>
        </header>
    )
}

export default Header