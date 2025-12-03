import React from 'react'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Marquee from 'react-fast-marquee';
import CusHeader from '../components/CusHeader';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import CusFooter from '../components/CusFooter';

import { GoArrowRight } from 'react-icons/go';

import projectImg1 from '../assets/img/project-1.png';
import projectImg2 from '../assets/img/project-2.png';
import projectImg3 from '../assets/img/project-3.png';
import projectImg4 from '../assets/img/project-4.png';

import './home.scss'


function Home() {
     
  return (
    <>
        <section className='main'>
            <CusHeader />
            <div className='main-wrap'>
                <div className="text-animate">
                    <Marquee gradient={false} speed={70} pauseOnHover={false}>
                        <h2 className="fw-semibold">
                            Creative Frontend Engineer • React Wizard • UI Builder •
                        </h2>
                    </Marquee>
                </div>
            </div>
        </section>
        <section className='about-me'>
            <div className='cus-container'>
                <div className='about-me-wrap'>
                    <h4>Powered by a passion for code and visuals, I create fast, intuitive, and engaging web interfaces. As a frontend developer in learning, I’m always experimenting, improving, and expanding my skill-set to deliver better user experiences.</h4>
                    <div className='box'>
                        <p>My passion for building intuitive interfaces, crafting accessible UI, and delivering seamless user experiences places me at the core of modern frontend development.</p>
                        {/* <a>My Skills <FaArrowRight /></a> */}
                        <Link to="/skills">My Skills <GoArrowRight /></Link>
                    </div>
                </div>
            </div>
        </section>
        <section className='project'>
            <div className='cus-container'>
                <div className='section-title'>
                    <h2>My Craft</h2>
                    <p>A curated selection of projects that highlight my skill in building efficient, responsive, and modern web applications.</p>
                </div>
                <div className='project-wrap'>
                    <div className='box'>
                        <img src={projectImg1} />
                        <a href="https://creator-himanshu.github.io/DiceGame.github.io/" target='_blank'><span><GoArrowRight /></span> Dice Game</a>
                    </div>
                    <div className='box'>
                        <img src={projectImg2} />
                        <a href='https://creator-himanshu.github.io/GuessMyNumber.github.io/'><span><GoArrowRight /></span>Guess My Number Game</a>
                    </div>
                    <div className='box'>
                        <img src={projectImg3} />
                        <a href='https://gogrubzweb.web.app/'><span><GoArrowRight /></span> Gogrubz website clone</a>
                    </div>
                    <div className='box'>
                        <img src={projectImg4} />
                        <a href='https://creator-himanshu.github.io/NotesMaker.github.io/'><span><GoArrowRight /></span>Notes Maker App</a>
                    </div>
                </div>
            </div>
        </section>
        <Contact dark={false} />
        <CusFooter dark={true}  />
    </>
  )
}

export default Home
