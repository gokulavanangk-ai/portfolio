import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { resumeData } from '../data/resumeData';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" className="section-padding position-relative z-index-1">
      <Container>
        <div className="text-center mb-5">
          <motion.div initial={{ opacity: 0.9, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="section-title">Featured <span className="text-accent">Projects</span></h2>
            <div className="title-underline mx-auto"></div>
          </motion.div>
        </div>

        {resumeData.projects.map((project, index) => (
          <Row key={index} className={`align-items-center mb-5 pb-5 border-bottom border-secondary border-opacity-25 ${index % 2 !== 0 ? 'flex-lg-row-reverse' : ''}`}>
            <Col lg={6} className="mb-4 mb-lg-0">
              <motion.div initial={{ opacity: 0.9, x: index % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <Tilt options={{ max: 10, scale: 1.02 }} className="w-100">
                  <div className="glass-card outline-accent w-100 position-relative overflow-hidden" style={{ height: '325px' }}>
                    <div
                      className="position-absolute w-100 h-100"
                      style={{
                        backgroundImage: `url(${project.image}?v=2)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        opacity: 1,
                        filter: 'brightness(0.9)',
                        transition: 'filter 0.4s ease, opacity 0.4s ease',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.filter = 'brightness(1)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.filter = 'brightness(0.9)'; }}
                    ></div>
                  </div>
                </Tilt>
              </motion.div>
            </Col>
            <Col lg={6} className={`px-lg-5 ${index % 2 !== 0 ? 'text-lg-end' : ''}`}>
              <motion.div initial={{ opacity: 0.9, x: index % 2 === 0 ? 50 : -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <span className="badge bg-transparent border border-accent text-accent mb-3 p-2 px-3 fw-bold rounded-pill">{project.year}</span>
                <h3 className="mb-3 font-outfit fw-bold h1 text-light">{project.title}</h3>
                
                <div className="glass-card p-4 mb-4 outline-accent" style={{ background: 'rgba(10, 4, 41, 0.8)' }}>
                  {project.details.map((detail, dIdx) => (
                    <p key={dIdx} className="text-secondary mb-2 fs-6" style={{ lineHeight: '1.6', textAlign: 'left' }}>
                      {detail}
                    </p>
                  ))}
                </div>

                <div className={`d-flex flex-wrap gap-3 mb-4 ${index % 2 !== 0 ? 'justify-content-lg-end' : ''}`}>
                  {project.techArray.map((t, idx) => (
                    <span key={idx} className="badge bg-dark-subtle text-light border border-secondary border-opacity-50 p-2 px-3 rounded-pill d-flex align-items-center">
                      <i className={`${t.icon} fs-5 me-2`}></i> {t.name}
                    </span>
                  ))}
                </div>

                <div className={`d-flex flex-wrap gap-3 ${index % 2 !== 0 ? 'justify-content-lg-end' : ''}`}>
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary custom-btn rounded-pill px-4 py-2 text-decoration-none">
                      <FaExternalLinkAlt className="me-2" /> Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-accent rounded-pill px-4 py-2 text-decoration-none">
                      <FaGithub className="me-2" /> Source Code
                    </a>
                  )}
                </div>
              </motion.div>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default Projects;
