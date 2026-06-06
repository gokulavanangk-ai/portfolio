import { Container, Row, Col } from 'react-bootstrap';
import { resumeData } from '../data/resumeData';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaHeart } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa6';

const Footer = () => {
  const year = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="position-relative z-index-1" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Main Footer */}
      <div className="py-3" style={{ background: 'rgba(0, 0, 0, 0.3)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <Container>
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
              <h6 className="text-light fw-bold mb-3 text-uppercase" style={{ letterSpacing: '1.5px', fontSize: '0.75rem' }}>Get In Touch</h6>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
             <div className="d-flex gap-3">
                <a href={`https://${resumeData.personal.github}`} target="_blank" rel="noopener noreferrer" className="text-secondary text-decoration-none fs-5 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '36px', height: '36px', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = ''; }}>
                  <FaGithub />
                </a>
                <a href={`https://${resumeData.personal.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-secondary text-decoration-none fs-5 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '36px', height: '36px', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = ''; }}>
                  <FaLinkedinIn />
                </a>
                <a href={`mailto:${resumeData.personal.email}`} className="text-secondary text-decoration-none fs-5 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '36px', height: '36px', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = ''; }}>
                  <FaEnvelope />
                </a>
                <a href="https://wa.me/919750179791" target="_blank" rel="noopener noreferrer" className="text-secondary text-decoration-none fs-5 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '36px', height: '36px', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#25D366'; e.currentTarget.style.color = '#25D366'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = ''; }}>
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
              <p className="text-secondary small mb-2 mb-md-0">
              © {year} Gokulavanan B. All rights reserved. 
            </p>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
              <p className="text-secondary small mb-0">
                Designed & Built with <FaHeart className="text-danger mx-1" style={{ fontSize: '0.65rem' }} /> by Gokulavanan
              </p>
            </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
