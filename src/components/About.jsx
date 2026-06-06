import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { resumeData } from '../data/resumeData';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaDownload, FaMapPin, FaUser } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section-padding position-relative z-index-1">
      <Container>
        <div className="section-label mb-2 text-accent fw-bold text-uppercase d-flex align-items-center">
          <span className="me-2" style={{ width: '10px', height: '10px', background: 'var(--accent)', borderRadius: '50%', boxShadow: 'var(--neon-shadow)' }}></span>
          About Me
        </div>
        <h2 className="section-title mb-5">Driven by <span className="gradient-text">Innovation</span></h2>

        <Row className="align-items-start gap-4 gap-lg-0">
          <Col lg={4} className="mb-5 mb-lg-0">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Tilt options={{ max: 10, scale: 1.02 }} className="w-100">
                <div className="glass-card p-4 p-md-5 text-center outline-accent position-relative overflow-hidden w-100">
                  <div className="position-absolute w-100 h-100" style={{ background: 'radial-gradient(circle at top, rgba(94, 0, 255, 0.2) 0%, transparent 70%)', top: 0, left: 0 }}></div>
                  
                  <div className="profile-photo-wrap mx-auto position-relative mb-4" style={{ width: '180px', height: '180px' }}>
                    <div className="pring pr1 position-absolute w-100 h-100 border border-accent border-opacity-50" style={{ animation: 'spin 10s linear infinite, morph 8s ease-in-out infinite', borderTopWidth: '3px', borderTopColor: 'transparent', borderLeftColor: 'transparent' }}></div>
                    <div className="pring pr2 position-absolute w-100 h-100 border border-accent-secondary border-opacity-50" style={{ animation: 'spin-reverse 15s linear infinite, morph 10s ease-in-out infinite', borderBottomWidth: '3px', borderBottomColor: 'transparent', borderRightColor: 'transparent', transform: 'scale(0.9)' }}></div>
                    <div className="pring pr3 position-absolute w-100 h-100 border border-light border-opacity-25" style={{ animation: 'spin 20s linear infinite, morph 12s ease-in-out infinite', borderTopWidth: '2px', borderTopColor: 'transparent', transform: 'scale(1.1)' }}></div>
                    
                    <div className="photo-clip w-100 h-100 overflow-hidden position-relative z-index-1 p-2" style={{ animation: 'morph 8s ease-in-out infinite' }}>
                       <img src="/assets/profile.png" alt={resumeData.personal.name} className="img-fluid w-100 h-100" style={{ objectFit: 'cover', background: 'var(--bg-dark)', animation: 'morph 8s ease-in-out infinite' }} />
                    </div>
                  </div>

                  <h3 className="h4 font-outfit fw-bold text-light mb-1">{resumeData.personal.name}</h3>
                  <p className="text-accent small fw-bold mb-2">{resumeData.personal.role}</p>
                  <p className="text-secondary small mb-4 d-flex align-items-center justify-content-center"><FaMapPin className="me-2" /> India, Tamil Nadu</p>

                  <div className="d-flex justify-content-center gap-3 mb-4 position-relative z-index-1">
                    <a href={`mailto:${resumeData.personal.email}`} className="btn-glass p-2 rounded-circle d-flex align-items-center justify-content-center text-decoration-none" style={{ width: '40px', height: '40px' }}><FaEnvelope /></a>
                    <a href={`https://${resumeData.personal.github}`} target="_blank" rel="noopener noreferrer" className="btn-glass p-2 rounded-circle d-flex align-items-center justify-content-center text-decoration-none" style={{ width: '40px', height: '40px' }}><FaGithub /></a>
                    <a href={`https://${resumeData.personal.linkedin}`} target="_blank" rel="noopener noreferrer" className="btn-glass p-2 rounded-circle d-flex align-items-center justify-content-center text-decoration-none" style={{ width: '40px', height: '40px' }}><FaLinkedinIn /></a>
                  </div>

                  <a href="/assets/resume.pdf" download="Gokulavanan_B_Resume.pdf" className="btn btn-primary custom-btn w-100 py-3 rounded-pill text-decoration-none d-flex align-items-center justify-content-center fw-bold position-relative z-index-1">
                    <FaDownload className="me-2" /> Download Resume
                  </a>
                </div>
              </Tilt>
            </motion.div>
          </Col>

          <Col lg={8} className="ps-lg-5">
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="glass-card p-4 p-md-5 mb-4 outline-accent">
                <h3 className="h4 text-accent mb-3 d-flex align-items-center font-outfit fw-bold"><FaUser className="me-2" /> Professional Summary</h3>
                <p className="text-secondary fs-5 mb-0" style={{ lineHeight: '1.8' }}>
                  {resumeData.summary}
                </p>
              </div>

              <div className="row g-4 mt-2">
                <div className="col-sm-6 col-md-3">
                  <div className="glass-card p-4 text-center outline-accent h-100 d-flex flex-column justify-content-center align-items-center">
                    <h3 className="display-5 fw-bold gradient-text mb-0">2+</h3>
                    <p className="text-secondary small mb-0 fw-bold text-uppercase mt-2">Years in Tech</p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="glass-card p-4 text-center outline-accent h-100 d-flex flex-column justify-content-center align-items-center">
                    <h3 className="display-5 fw-bold gradient-text mb-0">10+</h3>
                    <p className="text-secondary small mb-0 fw-bold text-uppercase mt-2">Projects Built</p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="glass-card p-4 text-center outline-accent h-100 d-flex flex-column justify-content-center align-items-center">
                    <h3 className="display-5 fw-bold gradient-text mb-0">1</h3>
                    <p className="text-secondary small mb-0 fw-bold text-uppercase mt-2">Certifications</p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="glass-card p-4 text-center outline-accent h-100 d-flex flex-column justify-content-center align-items-center">
                    <h3 className="display-5 fw-bold gradient-text mb-0">1k+</h3>
                    <p className="text-secondary small mb-0 fw-bold text-uppercase mt-2">Hours Coded</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
