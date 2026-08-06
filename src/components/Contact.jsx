import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { resumeData } from '../data/resumeData';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

emailjs.init({
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (status.message) setStatus({ type: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    const trimmed = {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim()
    };
    if (!trimmed.name || !trimmed.email || !trimmed.subject || !trimmed.message) {
      setStatus({ type: 'error', message: 'Please fill in all the fields before sending.' });
      return;
    }
    if (!EMAIL_REGEX.test(trimmed.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }
    setSending(true);
    setStatus({ type: '', message: '' });
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: trimmed.name,
        from_email: trimmed.email,
        subject: trimmed.subject,
        message: trimmed.message,
      });
      setForm({ name: '', email: '', subject: '', message: '' });
      setStatus({ type: 'success', message: 'Your message has been sent successfully. Thank you!' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus({ type: 'error', message: 'Something went wrong while sending your message. Please try again later.' });
    } finally {
      setSending(false);
    }
  };

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email Me', value: resumeData.personal.email, href: `mailto:${resumeData.personal.email}` },
    { icon: FaPhoneAlt, label: 'Call Me', value: resumeData.personal.phone, href: `tel:${resumeData.personal.phone.replace(/\s+/g, '')}` },
  ];

  return (
    <section id="contact" className="contact-section section-padding position-relative overflow-hidden">
      <div aria-hidden="true" className="contact-glow contact-glow--one"></div>
      <div aria-hidden="true" className="contact-glow contact-glow--two"></div>
      <div aria-hidden="true" className="contact-grid"></div>

      <Container className="position-relative z-index-1">
        <Row className="g-5 g-lg-4 align-items-center">
          {/* Left Column — Intro */}
          <Col lg={5}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
              <span className="contact-eyebrow">Contact</span>
              <h2 className="contact-title">
                Let's <span className="gradient-text">Collaborate</span>
              </h2>
              <p className="contact-subtitle">Have an idea or a project in mind?</p>
              <p className="contact-desc">
                Whether you're looking to build a scalable web application, integrate AI solutions, or just want to
                connect — my inbox is always open. Let's create something extraordinary together.
              </p>
            </motion.div>

            <div className="d-flex flex-column gap-3 mt-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className="contact-info-card">
                  <span className="contact-info-icon"><Icon /></span>
                  <span className="contact-info-body">
                    <span className="contact-info-label">{label}</span>
                    <span className="contact-info-value">{value}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="d-flex align-items-center gap-3 mt-4">
              <span className="contact-social-label">Follow</span>
              <div className="d-flex gap-2">
                <a href={`https://${resumeData.personal.github}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="contact-social"><FaGithub /></a>
                <a href={`https://${resumeData.personal.linkedin}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="contact-social"><FaLinkedinIn /></a>
              </div>
            </div>
          </Col>

          {/* Right Column — Form */}
          <Col lg={7}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <div className="contact-form-card">
                <div className="contact-form-head">
                  <h3 className="contact-form-title">Send a Message</h3>
                  <p className="contact-form-hint">I usually respond within 24 hours.</p>
                </div>

                <form onSubmit={handleSubmit} className="contact-form">
                  <Row>
                    <Col md={6} className="mb-4">
                      <label htmlFor="contact-name" className="contact-label">Your Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Your Name"
                        maxLength="100"
                        required
                      />
                    </Col>
                    <Col md={6} className="mb-4">
                      <label htmlFor="contact-email" className="contact-label">Your Email</label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter Your Email ID"
                        maxLength="254"
                        required
                      />
                    </Col>
                  </Row>

                  <div className="mb-4">
                    <label htmlFor="contact-subject" className="contact-label">Subject</label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Subject"
                      maxLength="150"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="contact-message" className="contact-label">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Hello Gokulavanan, I would like to discuss..."
                      rows="5"
                      maxLength="2000"
                      required
                    ></textarea>
                  </div>

                  {status.message && (
                    <div className={`alert contact-alert mb-4 ${status.type === 'success' ? 'alert-success' : 'alert-danger'}`} role="alert">
                      {status.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary custom-btn w-100 fs-5 fw-bold py-3 rounded-pill d-flex align-items-center justify-content-center"
                    disabled={sending}
                  >
                    {sending ? (
                      <>
                        Sending... <span className="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span>
                      </>
                    ) : (
                      <>
                        Send Message <FaPaperPlane className="ms-2" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
