import React, { useEffect, useState } from 'react'
import { HiArrowTurnUpRight } from 'react-icons/hi2'
import './footer.scss'

function CusFooter({ dark = true }) {   // ← boolean prop here

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <footer className={`footer ${dark ? "dark" : "light"}`}>
        <div className='cus-container'>
          <div className='footer-wrap'>
            
            <div className='d-flex justify-content-between align-items-center'>
              <h4>Turning chaos into clean code</h4>
              <button onClick={scrollToTop} className='icon'>
                <HiArrowTurnUpRight />
              </button>
            </div>

            <h2>Hashhhhhh</h2>

          </div>
        </div>
      </footer>
    </>
  )
}

export default CusFooter
