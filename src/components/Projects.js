import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCloud, FaRobot, FaDatabase } from 'react-icons/fa';

const Modal = ({ show, onClose, children }) => (
  show ? (
    <div className="modal-overlay fade-in visible" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(30,41,59,0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      transition: 'opacity 0.4s',
      backdropFilter: 'blur(2px)'
    }} onClick={onClose}>
      <div style={{
        background: 'rgba(15,23,42,0.95)',
        borderRadius: '1rem',
        padding: '2rem 2.5rem',
        minWidth: 320,
        boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        animation: 'fadeIn 0.5s'
      }} onClick={e => e.stopPropagation()}>
        {children}
        <button onClick={onClose} style={{
          marginTop: '2rem',
          background: 'var(--danger-color)',
          color: 'white',
          border: 'none',
          borderRadius: '0.5rem',
          padding: '0.5rem 1.5rem',
          fontWeight: 600,
          cursor: 'pointer',
          fontSize: '1rem',
        }}>Close</button>
      </div>
    </div>
  ) : null
);

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const projects = [
    {
      title: 'AI-Powered Travel Assistant (Chatbot)',
      description: 'Built an intelligent flight booking chatbot powered by Google Gemini AI for natural language understanding and intent detection, enabling users to search flights through conversational input with high accuracy.',
      longDescription: 'Next-generation conversational AI system that revolutionizes flight booking through natural language processing and intelligent intent detection.',
      features: [
        'Google Gemini AI integration for natural language understanding and intent detection',
        'Reactive microservices architecture using Spring WebFlux with session-based conversation management',
        'Sub-2-second response times even under high concurrency',
        'Robust flight search pipeline with advanced filtering (price, stops, airlines)',
        'Real-time flight APIs integration with 99.9% system uptime',
        'Circuit breaker patterns and fault-tolerant design for enterprise reliability'
      ],
      technologies: ['Java', 'Spring WebFlux', 'Google Gemini AI', 'Microservices', 'Circuit Breaker', 'Real-time APIs'],
      category: 'AI & Microservices',
      icon: <FaRobot />,
      github: 'https://github.com/Aakashsedha/ai-travel-assistant',
      liveDemo: null,
      demoLabel: 'Under Progress',
      status: 'Production',
      impact: {
        metric: '<2s',
        description: 'Response time under load'
      }
    },
    {
      title: 'Visa Booking Application',
      description: 'Architected and deployed cloud-native visa booking platform with complete HLD/LLD design using Spring Boot microservices on GCP, delivering 3x throughput improvement and 99.9% uptime at scale.',
      longDescription: '',
      features: [
        'Engineered high-performance RESTful APIs with multi-level caching, reducing API latency by 30%.',
        'Implemented a secure token management system using Java caching and MongoDB, enhancing authentication efficiency.',
        'Designed optimized NoSQL data schema for document-based workflows and ensured transactional integrity with relational databases.'
      ],
      technologies: ['Java', 'Spring Boot', 'GCP', 'MongoDB', 'Microservices', 'RESTful APIs', 'Caching'],
      category: 'Enterprise',
      icon: <FaCloud />,
      github: 'https://github.com/Aakashsedha/cloud-visa-platform',
      liveDemo: 'https://cleartrip.ae/visa',
      demoLabel: 'View Live Platform',
      status: 'Production',
      impact: {
        metric: '3x',
        description: 'Performance improvement'
      }
    },
    {
      title: 'Distributed Configuration System',
      description: 'Engineered a bidirectional sync service between MongoDB and distributed configuration system achieving 100% data consistency.',
      longDescription: 'High-performance distributed system ensuring seamless data synchronization across multiple services and databases.',
      features: [
        'Bidirectional data synchronization',
        '100% data consistency across distributed systems',
        'Real-time configuration updates',
        'Fault-tolerant architecture with automatic recovery',
        'Monitoring and alerting for system health'
      ],
      technologies: ['Spring Boot', 'MongoDB', 'Distributed Systems', 'Data Sync', 'Monitoring'],
      category: 'Infrastructure',
      icon: <FaDatabase />,
      github: 'https://github.com/Aakashsedha/distributed-config-system',
      liveDemo: 'https://www.cleartrip.ae',
      demoLabel: 'View Source Code',
      status: 'Production',
      impact: {
        metric: '100%',
        description: 'Data consistency'
      }
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'AI & Microservices': return 'var(--danger-color)';
      case 'Enterprise': return 'var(--accent-color)';
      case 'Infrastructure': return '#10b981';
      default: return 'var(--text-secondary)';
    }
  };

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}
        >
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card"
              style={{
                background: 'var(--bg-primary)',
                borderRadius: '1rem',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--border-color)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
            >
              {/* Project Header */}
              <div 
                style={{
                  background: `linear-gradient(135deg, ${getCategoryColor(project.category)}15, ${getCategoryColor(project.category)}05)`,
                  padding: '1.5rem',
                  borderBottom: '1px solid var(--border-color)'
                }}
              >
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem'
                  }}
                >
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem'
                    }}
                  >
                    <div 
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: project.category === 'AI & Microservices' ? '32px' : '40px',
                        height: project.category === 'AI & Microservices' ? '32px' : '40px',
                        background: getCategoryColor(project.category),
                        borderRadius: '0.5rem',
                        color: 'white',
                        fontSize: project.category === 'AI & Microservices' ? '1rem' : '1.25rem'
                      }}
                    >
                      {project.icon}
                    </div>
                    
                    <div>
                      <div 
                        style={{
                          background: getCategoryColor(project.category),
                          color: 'white',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '1rem',
                          fontSize: '0.75rem',
                          fontWeight: '500'
                        }}
                      >
                        {project.category}
                      </div>
                    </div>
                  </div>

                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.8rem',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    <div 
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: project.status === 'Production' ? '#10b981' : '#f59e0b'
                      }}
                    />
                    {project.status}
                  </div>
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '0.75rem',
                    textShadow: '0 0 20px rgba(6, 182, 212, 0.3)'
                  }}
                >
                  {project.title}
                </h3>

                <p 
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.95rem',
                    lineHeight: '1.6'
                  }}
                >
                  {project.description}
                </p>
              </div>

              {/* Project Content */}
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 
                    style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      marginBottom: '0.75rem'
                    }}
                  >
                    Key Features
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          marginBottom: '0.5rem',
                          fontSize: '0.9rem',
                          color: 'var(--text-secondary)'
                        }}
                      >
                        <div 
                          style={{
                            width: '4px',
                            height: '4px',
                            borderRadius: '50%',
                            background: getCategoryColor(project.category),
                            marginTop: '0.5rem',
                            flexShrink: 0
                          }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div 
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}
                  >
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        style={{
                          background: 'var(--bg-tertiary)',
                          color: 'var(--text-primary)',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '1rem',
                          fontSize: '0.75rem',
                          fontWeight: '500',
                          border: '1px solid var(--border-color)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span 
                        style={{
                          background: 'var(--bg-tertiary)',
                          color: 'var(--text-secondary)',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '1rem',
                          fontSize: '0.75rem',
                          fontWeight: '500',
                          border: '1px solid var(--border-color)'
                        }}
                      >
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Impact Metric */}
                <div 
                  style={{
                    background: `${getCategoryColor(project.category)}10`,
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    marginBottom: '1.5rem',
                    textAlign: 'center'
                  }}
                >
                  <div 
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      color: getCategoryColor(project.category),
                      marginBottom: '0.25rem'
                    }}
                  >
                    {project.impact.metric}
                  </div>
                  <div 
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {project.impact.description}
                  </div>
                </div>

                {/* Project Links */}
                <div
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    marginTop: 'auto'
                  }}
                >
                  {index === 0 ? (
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        padding: '0.75rem 1.5rem',
                        background: 'var(--danger-color)',
                        color: 'white',
                        borderRadius: '0.75rem',
                        fontSize: '1rem',
                        fontWeight: '700',
                        letterSpacing: '0.03em',
                        boxShadow: 'var(--shadow-md)',
                        border: 'none',
                        cursor: 'not-allowed',
                        textAlign: 'center'
                      }}
                    >
                      🚧 Under Progress
                    </span>
                  ) : project.liveDemo ? (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '0.75rem 1.5rem',
                        background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '0.75rem',
                        fontSize: '1rem',
                        fontWeight: '600',
                        transition: 'all 0.3s ease',
                        flex: 1,
                        justifyContent: 'center',
                        boxShadow: 'var(--shadow-md)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = 'var(--shadow-lg), var(--shadow-glow)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'var(--shadow-md)';
                      }}
                    >
                      🚀 {project.demoLabel || 'View Live Production'}
                    </a>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '0.75rem 1.5rem',
                        background: 'rgba(30, 41, 59, 0.8)',
                        color: 'var(--text-primary)',
                        textDecoration: 'none',
                        borderRadius: '0.75rem',
                        fontSize: '1rem',
                        fontWeight: '600',
                        border: '2px solid var(--border-color)',
                        transition: 'all 0.3s ease',
                        flex: 1,
                        justifyContent: 'center',
                        backdropFilter: 'blur(10px)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.borderColor = 'var(--primary-color)';
                        e.target.style.color = 'var(--primary-color)';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.borderColor = 'var(--border-color)';
                        e.target.style.color = 'var(--text-primary)';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      <FaGithub /> View Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h2 style={{ color: 'var(--danger-color)', marginBottom: '1rem' }}>Project Under Progress</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          The AI-Powered Travel Assistant (Chatbot) is currently under development. Please check back soon for updates!
        </p>
      </Modal>
    </section>
  );
};

export default Projects;
