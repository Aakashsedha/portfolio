import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' }
  ];

  const socialLinks = [
    {
      href: 'https://github.com/Aakashsedha',
      icon: <FaGithub />,
      label: 'GitHub',
      color: '#333'
    },
    {
      href: 'https://linkedin.com/in/aakashdeep-singh-sedha-657abb1a7',
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      color: '#0077b5'
    },
    {
      href: 'mailto:sedha007aakash@gmail.com',
      icon: <FaEnvelope />,
      label: 'Email',
      color: 'var(--accent-color)'
    }
  ];

  return (
    <footer 
      style={{
        background: 'linear-gradient(135deg, var(--bg-secondary) 60%, var(--bg-primary) 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1.5px solid var(--border-color)'
      }}
    >
      {/* Background Pattern */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 20% 20%, var(--primary-color)10 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, var(--accent-color)10 0%, transparent 50%)`,
          opacity: 0.15
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Main Footer Content */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem',
            padding: '3rem 0 2rem'
          }}
        >
          {/* About Section */}
          <div>
            <h3 
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: 'white'
              }}
            >
              Aakashdeep Singh
            </h3>
            <p 
              style={{
                color: '#cbd5e0',
                fontSize: '0.95rem',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}
            >
              Software Engineer passionate about building scalable cloud-native applications 
              and microservices. Always eager to learn new technologies and solve challenging problems.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.5rem',
                    color: '#cbd5e0',
                    fontSize: '1.125rem',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = social.color;
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.color = '#cbd5e0';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: 'white'
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {quickLinks.map((link, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>
                  <a
                    href={link.href}
                    style={{
                      color: '#cbd5e0',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'color 0.3s ease',
                      display: 'inline-block',
                      padding: '0.25rem 0'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = 'var(--primary-color)';
                      e.target.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#cbd5e0';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 
              style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: 'white'
              }}
            >
              Get In Touch
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div 
                style={{
                  color: '#cbd5e0',
                  fontSize: '0.9rem'
                }}
              >
                📧 sedha007aakash@gmail.com
              </div>
              <div 
                style={{
                  color: '#cbd5e0',
                  fontSize: '0.9rem'
                }}
              >
                📱 +91 7657926084
              </div>
              <div 
                style={{
                  color: '#cbd5e0',
                  fontSize: '0.9rem'
                }}
              >
                📍 Bangalore, India
              </div>
            </div>

            <div 
              style={{
                marginTop: '1.5rem',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '0.5rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <p 
                style={{
                  color: '#cbd5e0',
                  fontSize: '0.85rem',
                  margin: 0,
                  textAlign: 'center'
                }}
              >
                💼 Open to new opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div 
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
            margin: '2rem 0'
          }}
        />

        {/* Bottom Footer */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingBottom: '2rem'
          }}
        >
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#cbd5e0',
              fontSize: '0.9rem'
            }}
          >
            © {currentYear} Made with <FaHeart style={{ color: '#e53e3e' }} /> by Aakashdeep Singh
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              background: 'var(--primary-color)',
              border: 'none',
              borderRadius: '0.5rem',
              color: 'white',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'var(--primary-dark)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'var(--primary-color)';
              e.target.style.transform = 'translateY(0)';
            }}
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .container > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .container > div:last-child {
            flex-direction: column !important;
            text-align: center;
            gap: 1rem !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
