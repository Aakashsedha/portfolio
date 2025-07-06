import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer I (SDE-1)',
      company: 'Cleartrip Arabia',
      location: 'Bangalore, India',
      period: 'July 2025 – Present',
      type: 'Full-time',
      achievements: [
        'Architected and deployed cloud-native visa booking platform with complete HLD/LLD design using Spring Boot microservices on GCP',
        'Delivered 3x throughput improvement and 99.9% uptime at scale',
        'Engineered high-performance RESTful APIs with multi-level caching, reducing API latency by 30%',
        'Implemented secure token management system using Java caching and MongoDB, enhancing authentication efficiency',
        'Designed optimized NoSQL data schema for document-based workflows and ensured transactional integrity'
      ],
      technologies: ['Java', 'Spring Boot', 'GCP', 'MongoDB', 'RESTful APIs', 'Microservices', 'Caching']
    },
    {
      title: 'Software Engineer Intern',
      company: 'Cleartrip Arabia',
      location: 'Bangalore, India',
      period: 'July 2024 – June 2025',
      type: 'Internship',
      achievements: [
        'Spearheaded development of distributed Spring Boot microservices platform, reducing manual resource allocation by 40%',
        'Enabled auto-scaling capabilities for improved system efficiency',
        'Crafted admin dashboard with reactive RESTful APIs, delivering 50ms response times',
        'Improved resource management efficiency by 65%',
        'Engineered continuous deployment pipeline with canary releases, ensuring 99.99% service availability',
        'Developed bidirectional sync service between MongoDB and distributed configuration system, achieving 100% data consistency'
      ],
      technologies: ['Spring Boot', 'Microservices', 'MongoDB', 'CI/CD', 'Auto-scaling', 'Admin Dashboard']
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="timeline" style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          {/* Timeline Line */}
          <div 
            style={{
              position: 'absolute',
              left: '2rem',
              top: '2rem',
              bottom: '2rem',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--primary-color), var(--accent-color))',
              borderRadius: '1px'
            }}
          />

          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="timeline-item"
              style={{
                position: 'relative',
                marginBottom: '3rem',
                paddingLeft: '5rem'
              }}
            >
              {/* Timeline Dot */}
              <div 
                style={{
                  position: 'absolute',
                  left: '1.25rem',
                  top: '1.5rem',
                  width: '1.5rem',
                  height: '1.5rem',
                  background: 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))',
                  borderRadius: '50%',
                  border: '3px solid var(--bg-primary)',
                  boxShadow: '0 0 0 3px var(--primary-color)20'
                }}
              />

              <div 
                className="card"
                style={{
                  background: 'var(--bg-primary)',
                  borderRadius: '1rem',
                  padding: '2rem',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid var(--border-color)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
              >
                <div
                  className="experience-header"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '1.5rem',
                    flexWrap: 'wrap',
                    gap: '1rem'
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        marginBottom: '1rem'
                      }}
                    >
                      {exp.title}
                    </h3>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        marginBottom: '0.75rem'
                      }}
                    >
                      <div
                        style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '0.75rem',
                          overflow: 'hidden',
                          background: 'white',
                          padding: '0.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: 'var(--shadow-md)'
                        }}
                      >
                        <img
                          src="/images/cleartrip_arabia_logo.jpeg"
                          alt="Cleartrip Arabia"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain'
                          }}
                        />
                      </div>

                      <div>
                        <div
                          style={{
                            color: 'var(--primary-color)',
                            fontSize: '1.125rem',
                            fontWeight: '600'
                          }}
                        >
                          {exp.company}
                        </div>
                        <div
                          style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.9rem'
                          }}
                        >
                          Travel Technology Company
                        </div>
                      </div>
                    </div>

                    <div 
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.5rem',
                        flexWrap: 'wrap',
                        fontSize: '0.95rem',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaCalendarAlt />
                        {exp.period}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaMapMarkerAlt />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <div 
                    className="job-type-badge"
                    style={{
                      background: exp.type === 'Full-time' ? 'var(--primary-color)' : 'var(--accent-color)',
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '1rem',
                      fontSize: '0.8rem',
                      fontWeight: '500'
                    }}
                  >
                    {exp.type}
                  </div>
                </div>

                <div className="achievements" style={{ marginBottom: '1.5rem' }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {exp.achievements.map((achievement, achIndex) => (
                      <li 
                        key={achIndex}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.75rem',
                          marginBottom: '0.75rem',
                          fontSize: '0.95rem',
                          lineHeight: '1.6',
                          color: 'var(--text-secondary)'
                        }}
                      >
                        <FaArrowRight 
                          style={{
                            color: 'var(--primary-color)',
                            fontSize: '0.8rem',
                            marginTop: '0.25rem',
                            flexShrink: 0
                          }}
                        />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="technologies">
                  <div 
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}
                  >
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        style={{
                          background: 'var(--bg-tertiary)',
                          color: 'var(--text-primary)',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '1rem',
                          fontSize: '0.8rem',
                          fontWeight: '500',
                          border: '1px solid var(--border-color)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .timeline-item {
            padding-left: 3rem !important;
          }
          
          .experience-header {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          
          .job-type-badge {
            align-self: flex-start;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
