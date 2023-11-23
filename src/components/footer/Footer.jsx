import React from 'react'
import { facebook, footerLogo, instagram, tiktok } from '../index'
import './footer.css'

export const Footer = () => {
  return (
    <footer className='footer container'>
      <img className='footer__logo' src={footerLogo} alt="logo_footer" />
      <section className='footer__links'>
        <nav>
          <span className='footer__links-header'>About us</span>
          <ul>
            <li className='footer__links-info'><a href="http">Stores</a></li>
            <li className='footer__links-info'><a href="http">About us</a></li>
            <li className='footer__links-info'><a href="http">Privacy policy</a></li>
            <li className='footer__links-info'><a href="http">Terms & Conditions</a></li>
            <li className='footer__links-info'><a href="http">Contact us</a></li>
          </ul>
        </nav>
        <nav>
          <span className='footer__links-header'>Clients</span>
          <ul>
            <li className='footer__links-info'><a href="http">Payment & Pricing</a></li>
            <li className='footer__links-info'><a href="http">Shipping</a></li>
            <li className='footer__links-info'><a href="http">Returns & Exchanges</a></li>
            <li className='footer__links-info'><a href="http">Loyalty Program</a></li>
            <li className='footer__links-info'><a href="http">FAQs</a></li>
          </ul>
        </nav>
        <nav>
          <span className='footer__links-header'>Store</span>
          <ul>
            <li className='footer__links-info'><a href="http">CLOTHING</a></li>
            <li className='footer__links-info'><a href="http">Shoes</a></li>
            <li className='footer__links-info'><a href="http">Accessories</a></li>
            <li className='footer__links-info'><a href="http">Bags</a></li>
            <li className='footer__links-info'><a href="http">Sale</a></li>
          </ul>
        </nav>
        <nav>
          <span className='footer__links-header'>Contact us</span>
          <ul>
            <li className='footer__links-info'><a href="http">Order Information</a></li>
            <li className='footer__links-info'><a href="http">info@takeoff.fashion</a></li>
            <div className="contact__social-media">
              <img src={facebook} alt="facebook" />
              <img src={instagram} alt="instagram" />
              <img src={tiktok} alt="tik-tok" />
            </div>
          </ul>
        </nav>
      </section>
      <span className='footer__year'>© 2023 TakeOff</span>
    </footer>
  )
}
