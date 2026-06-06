import React, { useCallback } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { TypeAnimation } from 'react-type-animation';
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles"; 
import { resumeData } from '../data/resumeData';
import { FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <section id="home" className="min-vh-100 d-flex align-items-center position-relative overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          interactivity: {
            events: { onHover: { enable: true, mode: "grab" }, resize: true },
            modes: { grab: { distance: 150, links: { opacity: 0.5 } } }
          },
          particles: {
            color: { value: ["#ffffff", "#5e00ff", "#00e1ff"] },
            links: { enable: false },
            move: { enable: true, speed: 0.3, direction: "none", random: true, straight: false, outModes: { default: "out" } },
            number: { density: { enable: true, area: 800 }, value: 200 },
            opacity: { value: { min: 0.1, max: 0.8 }, animation: { enable: true, speed: 1, sync: false } },
            shape: { type: "circle" },
            size: { value: { min: 0.5, max: 2.5 } }
          },
          detectRetina: true
        }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
      />
      
      <Container className="position-relative" style={{ zIndex: 1 }}>
        <Row className="align-items-center">
          <Col md={7} className="text-center text-md-start mt-5 mt-md-0">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p className="text-accent mb-2 fs-5 fw-bold" style={{ letterSpacing: '2px' }}>WELCOME TO MY UNIVERSE</p>
              <h1 className="display-2 font-outfit fw-bold mb-3" style={{ fontWeight: 900 }}>
                Hi, I'm <span className="gradient-text">{resumeData.personal.name}</span>
              </h1>
              <h2 className="h3 mb-4 text-light font-outfit">
                A Creative <span className="text-accent">
                  <TypeAnimation
                    sequence={[
                      resumeData.personal.role.split(' | ')[0],
                      2000,
                      resumeData.personal.role.split(' | ')[1],
                      2000,
                      'Problem Solver',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </h2>
              <p className="lead mb-5 text-secondary pe-md-5">
                {resumeData.summary}
              </p>
              <div className="d-flex gap-3 justify-content-center justify-content-md-start flex-wrap">
                <a href="#projects" className="btn btn-primary custom-btn px-5 py-3 rounded-pill text-decoration-none shadow-lg">View My Work</a>
                <a href="#contact" className="btn btn-glass px-5 py-3 rounded-pill text-light text-decoration-none fw-bold shadow-lg">Contact Me</a>
              </div>
            </motion.div>
          </Col>
          <Col md={5} className="d-none d-md-block text-center">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <Tilt options={{ max: 15, scale: 1.05 }} className="d-inline-block position-relative">
                 <div className="position-absolute w-100 h-100" style={{ background: 'var(--accent)', filter: 'blur(80px)', opacity: 0.4, top: 0, left: 0, borderRadius: '20px' }}></div>
                 <img 
                   src="/assets/profile.png" 
                   alt={resumeData.personal.name} 
                   className="img-fluid position-relative"
                   style={{ width: '380px', height: '380px', objectFit: 'cover', borderRadius: '20px', border: '4px solid var(--accent-secondary)', boxShadow: 'var(--neon-shadow)' }}
                 />
              </Tilt>
            </motion.div>
          </Col>
        </Row>
      </Container>
      <div className="position-absolute w-100 text-center d-none d-md-block" style={{ bottom: '30px', zIndex: 1 }}>
        <a href="#about" className="text-secondary fs-3 hover-text-accent" style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-secondary)'} onMouseLeave={(e) => e.currentTarget.style.color = '#c2c9e0'}>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <FaChevronDown />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
