import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaChevronDown, FaRocket, FaChartLine, FaShieldAlt, FaBolt, FaMedium } from 'react-icons/fa';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const MetricCard = ({ value, label, icon: Icon, color }) => (
    <div
      className="metric-card"
      style={{
        background: 'rgba(30, 41, 59, 0.6)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(51, 65, 85, 0.5)',
        borderRadius: '1rem',
        padding: '1.5rem',
        textAlign: 'center',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
        e.currentTarget.style.borderColor = color;
        e.currentTarget.style.boxShadow = `0 10px 25px rgba(0,0,0,0.3), 0 0 20px ${color}40`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.borderColor = 'rgba(51, 65, 85, 0.5)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '48px',
          height: '48px',
          borderRadius: '0.75rem',
          background: `linear-gradient(135deg, ${color}, ${color}80)`,
          marginBottom: '1rem',
          transition: 'transform 0.3s ease'
        }}
      >
        <Icon size={24} style={{ color: 'white' }} />
      </div>
      <div
        style={{
          fontSize: '2rem',
          fontWeight: '800',
          color: 'white',
          marginBottom: '0.5rem'
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: '0.9rem',
          color: 'var(--text-secondary)',
          fontWeight: '500'
        }}
      >
        {label}
      </div>
    </div>
  );

  return (
    <section
      id="home"
      className="hero"
      style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, var(--bg-primary) 0%, #0c1426 50%, var(--bg-primary) 100%)'
      }}
    >
      {/* Animated Background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 20%, rgba(6, 182, 212, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
          zIndex: 0
        }}
      />

      {/* Floating Elements */}
      <div
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          left: '10%',
          top: '20%',
          animation: 'float 6s ease-in-out infinite',
          zIndex: 0
        }}
      />

      <div
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
          right: '10%',
          bottom: '20%',
          animation: 'float 8s ease-in-out infinite reverse',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ paddingTop: '1rem' }} />
        <div
          style={{
            textAlign: 'center',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          <div className="hero-content">
            {/* Status Badge */}
            <div
              className="hero-badge"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: 'rgba(6, 182, 212, 0.1)',
                backdropFilter: 'blur(20px)',
                padding: '0.75rem 1.5rem',
                borderRadius: '2rem',
                border: '1px solid rgba(6, 182, 212, 0.3)',
                marginBottom: '1rem',
                fontSize: '1rem',
                color: 'var(--primary-color)',
                fontWeight: '600',
                boxShadow: '0 4px 20px rgba(6, 182, 212, 0.2)'
              }}
            >
              <FaRocket
                style={{
                  color: 'var(--primary-color)',
                  animation: 'bounce 2s infinite'
                }}
              />
              Software Engineer @ Cleartrip Arabia
            </div>

            {/* Main Heading */}
            <h1
              style={{
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                fontWeight: '900',
                lineHeight: '1.1',
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #ffffff, var(--primary-color), var(--secondary-color))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em'
              }}
            >
              Aakashdeep Singh Sedha
            </h1>

            {/* Subtitle */}
            <h2
              style={{
                fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                fontWeight: '700',
                color: 'var(--text-secondary)',
                marginBottom: '1rem',
                letterSpacing: '-0.01em'
              }}
            >
              Back-End System Specialist
            </h2>

            {/* Description */}
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                maxWidth: '700px',
                margin: '0 auto 2rem',
                lineHeight: '1.6',
                fontWeight: '400'
              }}
            >
              Architecting enterprise-scale microservices that process millions of requests with{' '}
              <span style={{ color: 'var(--success-color)', fontWeight: '600' }}>99.9% uptime</span>.
              Delivering{' '}
              <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>3x performance improvements</span>{' '}
              through cutting-edge distributed systems design.
            </p>

            {/* Key Metrics */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.5rem',
                maxWidth: '900px',
                margin: '0 auto 3rem'
              }}
            >
              <MetricCard
                value="3x"
                label="Performance Boost"
                icon={FaChartLine}
                color="var(--success-color)"
              />
              <MetricCard
                value="99.9%"
                label="System Uptime"
                icon={FaShieldAlt}
                color="var(--primary-color)"
              />
              <MetricCard
                value="30%"
                label="Latency Reduction"
                icon={FaBolt}
                color="var(--warning-color)"
              />
            </div>

            {/* Action Buttons */}
            <div
              className="hero-actions"
              style={{
                display: 'flex',
                gap: '1.5rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginBottom: '4rem'
              }}
            >
              <a
                href="mailto:sedha007aakash@gmail.com"
                className="btn btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  padding: '1.25rem 2.5rem'
                }}
              >
                <FaEnvelope /> Let's Build Something Amazing
                <FaArrowRight />
              </a>

              <a
                href="https://medium.com/@sedha007aakash"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  padding: '1.25rem 2.5rem'
                }}
              >
                <FaMedium /> View My Articles
              </a>

              <a
                href="https://drive.google.com/file/d/1dTsoDmWDVdUP5y431UMzG0PtuWtpsarO/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  padding: '1.25rem 2.5rem',
                  background: 'var(--success-color)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontWeight: 600
                }}
              >
                <FaArrowRight style={{ transform: 'rotate(90deg)' }} /> Download My Resume
              </a>
            </div>

            {/* Social Links */}
            <div
              className="social-links"
              style={{
                display: 'flex',
                gap: '2rem',
                justifyContent: 'center',
                marginBottom: '4rem'
              }}
            >
              <a
                href="https://github.com/Aakashsedha"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '60px',
                  height: '60px',
                  background: 'rgba(30, 41, 59, 0.8)',
                  backdropFilter: 'blur(20px)',
                  border: '2px solid var(--border-color)',
                  borderRadius: '1rem',
                  color: 'var(--text-primary)',
                  fontSize: '1.5rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#333';
                  e.target.style.color = '#333';
                  e.target.style.transform = 'translateY(-4px)';
                  e.target.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'var(--border-color)';
                  e.target.style.color = 'var(--text-primary)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                  e.target.style.background = 'rgba(30, 41, 59, 0.8)';
                }}
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/aakashdeep-singh-sedha-657abb1a7"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '60px',
                  height: '60px',
                  background: 'rgba(30, 41, 59, 0.8)',
                  backdropFilter: 'blur(20px)',
                  border: '2px solid var(--border-color)',
                  borderRadius: '1rem',
                  color: 'var(--text-primary)',
                  fontSize: '1.5rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#0077b5';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(-4px)';
                  e.target.style.boxShadow = '0 10px 25px rgba(0,119,181,0.3)';
                  e.target.style.background = '#0077b5';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'var(--border-color)';
                  e.target.style.color = 'var(--text-primary)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                  e.target.style.background = 'rgba(30, 41, 59, 0.8)';
                }}
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:sedha007aakash@gmail.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '60px',
                  height: '60px',
                  background: 'rgba(30, 41, 59, 0.8)',
                  backdropFilter: 'blur(20px)',
                  border: '2px solid var(--border-color)',
                  borderRadius: '1rem',
                  color: 'var(--text-primary)',
                  fontSize: '1.5rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = 'var(--warning-color)';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(-4px)';
                  e.target.style.boxShadow = '0 10px 25px rgba(245,158,11,0.3)';
                  e.target.style.background = 'var(--warning-color)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'var(--border-color)';
                  e.target.style.color = 'var(--text-primary)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                  e.target.style.background = 'rgba(30, 41, 59, 0.8)';
                }}
              >
                <FaEnvelope />
              </a>
            </div>

            {/* Scroll Indicator */}
            <button
              onClick={() => scrollToSection('about')}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-secondary)',
                fontSize: '2.5rem',
                cursor: 'pointer',
                animation: 'bounce 2s infinite',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = 'var(--primary-color)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'var(--text-secondary)';
              }}
            >
              <FaChevronDown />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .hero-actions {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }

          .social-links {
            gap: 1.5rem;
          }

          .metric-card {
            padding: 1rem !important;
          }
        }

        @media (max-width: 480px) {
          .hero-actions .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
