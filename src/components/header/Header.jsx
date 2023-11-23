import React from 'react'
import { toggle, logo, find_icon, acc_icon, like_icon, cart_icon } from '../index.js';
import './header.css'

export const Header = () => {
  return (
    <header className='header container'>
      <section className='header__main'>
        <div className="header__toggle">
          <img src={toggle} alt="Toggle" />
        </div>
        <a href="http"><img src={logo} alt="Takeoff logo" /></a>
      </section>
      <nav className='header__nav'>
        <ul>
          <li><a className='header__nav-link' href="http">Woman</a></li>
          <li><a className='header__nav-link' href="http">Men</a></li>
          <li><a className='header__nav-link' href="http">Kids</a></li>
        </ul>
        <div className='header__nav-find'>
          <input type="text" />
          <label><img src={find_icon} alt="Find" /></label>
        </div>
      </nav>
      <section className='header__icons'>
        <img src={acc_icon} alt="user icons" />
        <img src={like_icon} alt="user icons" />
        <img src={cart_icon} alt="user icons" />
      </section>
    </header>
  )
}
