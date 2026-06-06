import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { resumeData } from '../data/resumeData';

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-dark-subtle position-relative overflow-hidden z-index-1">
      <Container className="position-relative z-index-1">
        <div className="text-center mb-5">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="section-title">My <span className="text-accent">Arsenal</span></h2>
            <p className="text-secondary">Technologies I work with</p>
            <div className="title-underline mx-auto"></div>
          </motion.div>
        </div>
        
        {Object.entries(resumeData.skills).map(([category, skills], catIdx) => (
          <div key={catIdx} className="mb-5">
            <h4 className="text-light font-outfit mb-4 text-center">{category}</h4>
            <Row className="row-cols-2 row-cols-md-4 row-cols-lg-6 g-4 justify-content-center">
              {skills.map((skill, idx) => (
                <Col key={idx}>
                  <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: idx * 0.05 }} viewport={{ once: true }}>
                    <Tilt options={{ max: 15, scale: 1.05 }} className="h-100">
                      <div className="glass-card text-center p-4 outline-accent h-100 d-flex flex-column justify-content-center align-items-center">
                        <i className={`${skill.icon} display-4 mb-3`} style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.2))' }}></i>
                        <h6 className="mb-0 font-outfit fw-bold text-light">{skill.name}</h6>
                      </div>
                    </Tilt>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Skills;
