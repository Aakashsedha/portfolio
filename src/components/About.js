import React from 'react';
import { FaCode, FaCloud, FaRocket, FaCogs } from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: <FaCode />,
      title: 'Back-End Development',
      description: 'Java Spring Boot'
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Architecture',
      description: 'Proficient in GCP, AWS, and Azure cloud platforms'
    },
    {
      icon: <FaRocket />,
      title: 'Performance Optimization',
      description: '3x throughput improvement and 30% latency reduction achieved'
    },
    {
      icon: <FaCogs />,
      title: 'System Design',
      description: 'Scalable microservices and distributed systems architecture'
    }
  ];

  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          <div className="about-content">
            <div 
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.8',
                color: 'var(--text-secondary)',
                marginBottom: '2rem'
              }}
            >
              <p style={{ marginBottom: '1.5rem' }}>
                I'm a passionate <strong>Software Engineer</strong> with expertise in building 
                scalable cloud-native applications and microservices architecture. Currently working 
                at <strong>Cleartrip Arabia</strong>, I specialize in architecting high-performance 
                systems that deliver exceptional user experiences.
              </p>
              
              <p style={{ marginBottom: '1.5rem' }}>
                With a strong foundation in <strong>Java Spring Boot</strong>, <strong>cloud computing</strong>, 
                and <strong>distributed systems</strong>, I've successfully delivered projects that 
                improved system throughput by 3x and reduced API latency by 30%. My experience spans 
                across the entire software development lifecycle, from system design to deployment.
              </p>
              
              <p>
                I'm always eager to learn new technologies and tackle challenging problems. 
                When I'm not coding, you'll find me exploring the latest in cloud architecture, 
                contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            <div 
              className="stats"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: '1.5rem',
                marginTop: '2rem'
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div 
                  style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: 'var(--primary-color)',
                    marginBottom: '0.5rem'
                  }}
                >
                  2+
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Years Experience
                </div>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div 
                  style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: 'var(--primary-color)',
                    marginBottom: '0.5rem'
                  }}
                >
                  99.9%
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  System Uptime
                </div>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div 
                  style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: 'var(--primary-color)',
                    marginBottom: '0.5rem'
                  }}
                >
                  3x
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Performance Boost
                </div>
              </div>
            </div>
          </div>

          <div className="about-highlights">
            <div 
              style={{
                display: 'grid',
                gap: '1.5rem'
              }}
            >
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="card"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1.5rem',
                    background: 'var(--bg-primary)',
                    borderRadius: '0.75rem',
                    border: '1px solid var(--border-color)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  }}
                >
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))',
                      borderRadius: '0.75rem',
                      color: 'white',
                      fontSize: '1.25rem',
                      flexShrink: 0
                    }}
                  >
                    {highlight.icon}
                  </div>
                  
                  <div>
                    <h3 
                      style={{
                        fontSize: '1.125rem',
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        marginBottom: '0.5rem'
                      }}
                    >
                      {highlight.title}
                    </h3>
                    <p 
                      style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.95rem',
                        lineHeight: '1.6',
                        margin: 0
                      }}
                    >
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
