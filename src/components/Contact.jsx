import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa6';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text =
      `📬 *New Portfolio Message*%0A` +
      `━━━━━━━━━━━━━━━━━━━━%0A` +
      `👤 *Name:* ${form.name}%0A` +
      `📧 *Email:* ${form.email}%0A` +
      `📌 *Subject:* ${form.subject}%0A` +
      `━━━━━━━━━━━━━━━━━━━━%0A` +
      `💬 *Message:*%0A${form.message}`;
    window.open(`https://wa.me/919750179791?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="section-padding position-relative z-index-1">
      <Container>
        <div className="text-center mb-5">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="section-title">Let's <span className="text-accent">Collaborate</span></h2>
            <div className="title-underline mx-auto"></div>
          </motion.div>
        </div>

        <div className="glass-card outline-accent p-0 overflow-hidden">
          <Row className="g-0">
            {/* Left Column — Info */}
            <Col lg={5} className="p-4 p-md-5 d-flex flex-column justify-content-between position-relative" style={{ background: 'rgba(94, 0, 255, 0.06)' }}>
              <div className="position-absolute w-100 h-100" style={{ background: 'radial-gradient(circle at bottom left, rgba(94, 0, 255, 0.15) 0%, transparent 60%)', top: 0, left: 0 }}></div>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="position-relative z-index-1">
                <h3 className="h2 font-outfit fw-bold text-light mb-4">Have an idea?</h3>
                <p className="text-secondary fs-5 mb-5" style={{ lineHeight: '1.8' }}>
                  Whether you're looking to build a scalable web application, integrate AI solutions, or just want to connect — my inbox is always open. Let's create something extraordinary together.
                </p>
                <div className="d-flex flex-column gap-4">
                  <a href={`mailto:${resumeData.personal.email}`} className="text-decoration-none d-flex align-items-center text-light fs-5" style={{ transition: 'color 0.3s' }}>
                    <div className="btn-glass p-3 rounded-circle me-3 d-flex align-items-center justify-content-center" style={{ minWidth: '48px', minHeight: '48px' }}><FaEnvelope /></div>
                    <span style={{ wordBreak: 'break-all' }}>{resumeData.personal.email}</span>
                  </a>
                  <a href="https://wa.me/919750179791" target="_blank" rel="noopener noreferrer" className="text-decoration-none d-flex align-items-center text-light fs-5" style={{ transition: 'color 0.3s' }}>
                    <div className="btn-glass p-3 rounded-circle me-3 d-flex align-items-center justify-content-center" style={{ minWidth: '48px', minHeight: '48px' }}><FaWhatsapp /></div>
                    {resumeData.personal.phone}
                  </a>
                </div>
              </motion.div>

              <div className="d-flex gap-3 mt-5 position-relative z-index-1">
                <a href={`https://${resumeData.personal.github}`} target="_blank" rel="noopener noreferrer" className="btn-glass p-3 rounded-circle text-light fs-4 text-decoration-none d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}><FaGithub /></a>
                <a href={`https://${resumeData.personal.linkedin}`} target="_blank" rel="noopener noreferrer" className="btn-glass p-3 rounded-circle text-light fs-4 text-decoration-none d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}><FaLinkedinIn /></a>
              </div>
            </Col>

            {/* Right Column — Form */}
            <Col lg={7} className="p-4 p-md-5" style={{ background: 'rgba(5, 1, 23, 0.9)' }}>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center h-100">
                  <Row>
                    <Col md={6} className="mb-4">
                      <label className="form-label text-secondary small fw-bold" style={{ letterSpacing: '1px' }}>YOUR NAME</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="form-control bg-transparent text-light p-3"
                        placeholder="Your Name"
                        required
                        style={{ borderRadius: '8px', border: '1px solid rgba(255,255,255,0.12)' }}
                      />
                    </Col>
                    <Col md={6} className="mb-4">
                      <label className="form-label text-secondary small fw-bold" style={{ letterSpacing: '1px' }}>YOUR EMAIL</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="form-control bg-transparent text-light p-3"
                        placeholder="Enter Your Email ID"
                        required
                        style={{ borderRadius: '8px', border: '1px solid rgba(255,255,255,0.12)' }}
                      />
                    </Col>
                  </Row>

                  <div className="mb-4">
                    <label className="form-label text-secondary small fw-bold" style={{ letterSpacing: '1px' }}>SUBJECT</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="form-control bg-transparent text-light p-3"
                      placeholder="Subject"
                      required
                      style={{ borderRadius: '8px', border: '1px solid rgba(255,255,255,0.12)' }}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label text-secondary small fw-bold" style={{ letterSpacing: '1px' }}>MESSAGE</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      className="form-control bg-transparent text-light p-3"
                      placeholder="Hello Gokulavanan, I would like to discuss..."
                      rows="5"
                      required
                      style={{ borderRadius: '8px', border: '1px solid rgba(255,255,255,0.12)', resize: 'vertical' }}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary custom-btn w-100 fs-5 fw-bold py-3 rounded-pill d-flex align-items-center justify-content-center">
                    Send Message <FaPaperPlane className="ms-2" />
                  </button>
                </form>
              </motion.div>
            </Col>
          </Row>
        </div>
      </Container>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/919750179791" target="_blank" rel="noopener noreferrer" className="position-fixed d-flex align-items-center justify-content-center rounded-circle" style={{ bottom: '30px', right: '30px', width: '60px', height: '60px', backgroundColor: '#25D366', color: 'white', zIndex: 1000, boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)', textDecoration: 'none' }}>
        <FaWhatsapp size={30} />
      </a>
    </section>
  );
};

export default Contact;
