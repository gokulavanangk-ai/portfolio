import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';

const CustomNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={scrolled ? 'glass-nav py-2' : 'bg-transparent py-4'}
      style={{ transition: 'all 0.3s ease-in-out' }}
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-3 font-outfit d-flex align-items-center">
          <span
            style={{
              background: 'linear-gradient(135deg, #00e1ff 0%, #a855f7 50%, #00e1ff 100%)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradientShift 4s ease infinite',
              fontWeight: 900,
              letterSpacing: '-0.5px',
              filter: 'drop-shadow(0 0 12px rgba(0, 225, 255, 0.3))',
            }}
          >
            Gokulavanan
          </span>
          <span
            style={{
              color: '#ffffff',
              fontWeight: 700,
              marginLeft: '6px',
              fontfamily: 'Arial, sans-serif',
              opacity: 0.9,
            }}
          >
            B
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
              <Nav.Link
                key={item}
                as={Link}
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-white mx-2 font-outfit"
                style={{ cursor: 'pointer', transition: 'color 0.3s' }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--accent-secondary)')}
                onMouseLeave={(e) => (e.target.style.color = '#ffffff')}
              >
                {item}
              </Nav.Link>
            ))}
            <Nav.Link
              href="/assets/resume.pdf"
              download="Gokulavanan_B_Resume.pdf"
              className="btn btn-outline-accent custom-btn btn-sm px-4 ms-lg-4 mt-3 mt-lg-0 font-outfit d-flex align-items-center gap-2"
            >
              <FaDownload size={12} /> Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
