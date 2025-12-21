import React from 'react'
import CusHeader from '../components/CusHeader'
import CusFooter from '../components/CusFooter'
import Contact from '../components/Contact';


import frontendImg1 from '../assets/img/icons/frontend-img-1.png';
import frontendImg2 from '../assets/img/icons/frontend-img-2.png';
import frontendImg3 from '../assets/img/icons/frontend-img-3.png';
import frontendImg4 from '../assets/img/icons/frontend-img-4.png';
import frontendImg5 from '../assets/img/icons/frontend-img-5.png';
import frontendImg6 from '../assets/img/icons/frontend-img-6.png';


import styleImg1 from '../assets/img/icons/style-img-1.png';
import styleImg2 from '../assets/img/icons/style-img-2.png';
import styleImg3 from '../assets/img/icons/style-img-3.png';
import styleImg4 from '../assets/img/icons/style-img-4.png';

import backendImg1 from '../assets/img/icons/backend-img-1.png';
import backendImg2 from '../assets/img/icons/backend-img-2.png';
import backendImg3 from '../assets/img/icons/backend-img-3.png';


import databaseImg1 from '../assets/img/icons/database-img-1.png';
import databaseImg2 from '../assets/img/icons/database-img-2.png';

import gitImg1 from '../assets/img/icons/git-img-1.png';
import gitImg2 from '../assets/img/icons/git-img-2.png';

import './skills.scss'
import Menu from '../components/Menu';

function Skills() {

  const frontendImages = [
    frontendImg1,
    frontendImg2,
    // frontendImg3,
    frontendImg4,
    frontendImg5,
    frontendImg6
  ];

  const styleImages = [
    styleImg1,
    styleImg2,
    styleImg3,
    styleImg4
  ];

  // const backendImages = [
  //   backendImg1,
  //   backendImg2,
  //   backendImg3
  // ];
  
  const databaseImages = [
    databaseImg1,
    // databaseImg2
  ];

  const gitImages = [
    gitImg1,
    gitImg2
  ]
  return (
    <>
    <section className='skills'>
        <CusHeader />
        <section className='skills-banner position-relative'>
            <h2>The tools behind my ability to<br /> create, animate, and innovate.</h2>
            <Menu />
        </section>
        <section className='technologies'>
          <div className='cus-container'>
            <div className='technologies-wrap'>
              <div className='box'>
                <div className='skillset'>
                  {frontendImages.map((img, index) => (
                    <img key={index} src={img} alt={`skill-${index}`} />
                  ))}
                </div>
                <h4>Front-End Development</h4>
                <p>Building engaging and user-friendly web interfaces using modern frameworks and technologies with expertise.</p>
              </div>
              <div className='box'>
                <div className='skillset'>
                  {styleImages.map((img, index) => (
                    <img key={index} src={img} alt={`skill-${index}`} />
                  ))}
                </div>
                <h4>Styling & Design</h4>
                <p>Crafting visually appealing and responsive designs with advanced styling tools and frameworks.</p>
              </div>
              {/* <div className='box'>
                <div className='skillset'>
                  {backendImages.map((img, index) => (
                    <img key={index} src={img} alt={`skill-${index}`} />
                  ))}
                </div>
                <h4>Back-End Development</h4>
                <p>Developing robust server-side logic and APIs to power dynamic and scalable web applications.</p>
              </div> */}

              <div className='box'>
                <div className='skillset'>
                  {databaseImages.map((img, index) => (
                    <img key={index} src={img} alt={`skill-${index}`} />
                  ))}
                </div>
                <h4>Database Management</h4>
                <p>Designing and managing databases to ensure secure and efficient data storage and retrieval.</p>
              </div>
              <div className='box'>
                <div className='skillset'>
                  {gitImages.map((img, index) => (
                    <img key={index} src={img} alt={`skill-${index}`} />
                  ))}
                </div>
                <h4>Version Control & Collaboration</h4>
                <p>Effectively managing code and collaborating on projects to ensure seamless teamwork.</p>
              </div>
            </div>
          </div>
        </section>
    </section>
    <Contact dark={true} />
    <CusFooter dark={false}  />
    </>
  )
}

export default Skills
