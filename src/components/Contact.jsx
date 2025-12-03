import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './contact.scss'

function Contact({ dark = true }) {
    const [showButton, setShowButton] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 300) {
            setShowButton(true);
          } else {
            setShowButton(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

  return (
    <>
        <section className={`contact-me ${dark ? "dark" : "light"}`}>
            <div className='cus-container'>
                <div className='section-title'>
                    <h5>Brainstorming?</h5>
                    <h2>Have an idea?<br/> I’d love to hear it.</h2>
                </div>
                <hr className='cus-line' />
                <div className='contact-me-wrap'>
                    <div className='contact-detail'>
                        <div>
                            <span>Email:</span>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Himanshumehta8696@gmail.com" target='_blank' rel="noopener noreferrer">Himanshumehta8696@gmail.com</a>
                        </div>
                        <div>
                            <span>Phone:</span>
                            <a href="tel:9351894221">(+91) 9351894221</a>
                        </div>
                    </div>
                    <div className='social-media'>
                        <a href='https://linkedin.com/in/himanshu-mehta-hm'><FaLinkedin /></a>
                        <a href='https://github.com/creator-himanshu'><FaGithub /></a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact
