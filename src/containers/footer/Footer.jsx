import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'
function Footer() {
  return (
    <div className='gpt3__footer section__padding'>
        <div className="gpt3__footer-heading">
            <h1 className='gradient__text'>Do You Want to Step into Future before Others?</h1>
        </div>
        <div className="gpt3__footer-btn">
            <p>Request early Access</p>
        </div>
        <div className="gpt3__footer-links">
            <div className="gpt3__footer-links_logo">
                <img src={logo} alt="logo" />
                <p>Cretherwoord 182 DK Alknjkcb, All Rights Reserved</p>
            </div>
            <div className="gpt3__footer-links_div">
                <h4>Links</h4>
                <p>Overons</p>
                <p>Social Media</p>
                <p>Counters</p>
                <p>Contact</p>
                
                

            </div>
            <div className="gpt3__footer-links_div">
                <h4>Company</h4>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Contact</p>
              
                
                

            </div>
            <div className="gpt3__footer-links_div">
                <h4>Get In Touch</h4>
                <p>Terms & Conditions</p>
                <p>Cretherwoord 182 DK Alknjkcb</p>
                <p>085-1324534</p>
                <p>info@payme.net</p>
              
                
                

            </div>
        </div>
        <div className="gpt3__footer-copyright">
            <p>&copy; 2024 GPT-3. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer