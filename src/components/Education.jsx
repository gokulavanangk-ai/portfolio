import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { resumeData } from '../data/resumeData';

const Education = () => {
  return (
    <section id="education" className="section-padding position-relative z-index-1">
      <Container>
        <Row>
          {/* Journey / Experience */}
          <Col lg={6} className="mb-5 mb-lg-0">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="mb-5 d-flex align-items-center h2 font-outfit fw-bold text-light">
                <span className="text-accent me-3 fs-1">💼</span> My Journey
              </h3>
              <div className="position-relative ps-4 border-start border-accent border-opacity-50">
                {resumeData.projects.map((proj, idx) => (
                  <div key={idx} className="mb-5 position-relative">
                    <div className="position-absolute rounded-circle bg-accent" style={{ width: '16px', height: '16px', left: '-33px', top: '5px', boxShadow: 'var(--neon-shadow)' }}></div>
                    <Tilt options={{ max: 5, scale: 1.02 }}>
                      <div className="glass-card p-4 outline-accent">
                        <h4 className="font-outfit fw-bold mb-1 text-light">{proj.title}</h4>
                        <span className="text-accent fw-bold d-block mb-3">{proj.year}</span>
                        <p className="text-secondary mb-0">{proj.details[0]}</p>
                      </div>
                    </Tilt>
                  </div>
                ))}
              </div>
            </motion.div>
          </Col>

          {/* Certifications & Education */}
          <Col lg={6} className="ps-lg-5">
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="mb-5 d-flex align-items-center h2 font-outfit fw-bold text-light">
                <span className="text-accent me-3 fs-1">🎓</span> Certifications & Education
              </h3>

              {resumeData.certifications.map((cert, idx) => (
                <Tilt options={{ max: 5, scale: 1.02 }} key={idx} className="mb-4">
                  <div className="glass-card p-4 d-flex align-items-center outline-accent">
                    <div className="bg-accent-soft rounded-circle p-4 me-4 border border-accent border-opacity-25" style={{ minWidth: '80px', textAlign: 'center' }}>
                      <span className="text-accent fs-2">📜</span>
                    </div>
                    <div>
                      <h4 className="mb-1 font-outfit fw-bold text-light">{cert.title}</h4>
                      <span className="text-secondary d-block mb-2">{cert.issuer} ({cert.year})</span>
                    </div>
                  </div>
                </Tilt>
              ))}

              {resumeData.education.map((edu, idx) => (
                <Tilt options={{ max: 5, scale: 1.02 }} key={idx}>
                  <div className="glass-card p-4 d-flex align-items-center outline-accent">
                    <div className="bg-accent-soft rounded-circle p-4 me-4 border border-accent border-opacity-25" style={{ minWidth: '80px', textAlign: 'center' }}>
                      <span className="text-accent fs-2">🎓</span>
                    </div>
                    <div>
                      <h4 className="mb-1 font-outfit fw-bold text-light">{edu.degree}</h4>
                      <span className="text-secondary d-block mb-2">{edu.institution} ({edu.year})</span>
                    </div>
                  </div>
                </Tilt>
              ))}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Education;
