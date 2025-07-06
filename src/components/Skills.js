import React from 'react';
import { 
  FaJava, 
  FaPython, 
  FaReact, 
  FaNodeJs, 
  FaDocker, 
  FaGitAlt, 
  FaAws, 
  FaGoogle,
  FaMicrosoft,
  FaDatabase,
  FaCode,
  FaTools,
  FaCloud,
  FaCogs
} from 'react-icons/fa';
import {
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiIntellijidea,
  SiSwagger
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FaCode />,
      color: '#10b981',
      skills: [
        { name: 'Java', icon: <FaJava />, level: 95, description: 'Spring Boot, Microservices' },
        { name: 'Python', icon: <FaPython />, level: 85, description: '' },
        { name: 'SQL', icon: <FaDatabase />, level: 90, description: 'Complex Queries, Optimization' }
      ]
    },
    {
      title: 'Databases & Storage',
      icon: <FaDatabase />,
      color: '#f59e0b',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, level: 90, description: 'NoSQL, Document DB' },
        { name: 'MySQL', icon: <SiMysql />, level: 85, description: 'Relational Database' },
        { name: 'Distributed Caching', icon: <FaDatabase />, level: 80, description: 'Redis, Performance' }
      ]
    },
    {
      title: 'Cloud Platforms',
      icon: <FaCloud />,
      color: '#3b82f6',
      skills: [
        { name: 'Google Cloud Platform', icon: <FaGoogle />, level: 85, description: 'GCP Services, Deployment' },
        { name: 'AWS', icon: <FaAws />, level: 90, description: 'EC2, S3, Cloud Architecture' },
        { name: 'Microsoft Azure', icon: <FaMicrosoft />, level: 80, description: 'AZ-900 Certified' }
      ]
    },
    {
      title: 'Development Tools',
      icon: <FaTools />,
      color: '#8b5cf6',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 90, description: 'Version Control' },
        { name: 'Gradle', icon: <FaTools />, level: 85, description: 'Build Management' },
        { name: 'IntelliJ IDEA', icon: <SiIntellijidea />, level: 90, description: 'IDE Proficiency' },
        { name: 'Postman', icon: <SiPostman />, level: 85, description: 'API Testing' },
        { name: 'Swagger', icon: <SiSwagger />, level: 80, description: 'API Documentation' }
      ]
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'Valid',
      credentialId: 'c7f94f42-498a-4249-b592-24552df9a2a7',
      verifyUrl: 'https://www.credly.com/badges/c7f94f42-498a-4249-b592-24552df9a2a7/public_url',
      image: '/images/awsbadge.png',
      description: 'Foundational understanding of AWS Cloud concepts, services, and terminology',
      skills: ['Cloud Computing', 'AWS Services', 'Security', 'Pricing & Support']
    },
    {
      title: 'Microsoft Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft',
      date: 'Valid',
      credentialId: '5c154f39-560b-4b6f-aa6f-48d4df1794d3',
      verifyUrl: 'https://www.credly.com/badges/5c154f39-560b-4b6f-aa6f-48d4df1794d3/public_url',
      image: '/images/Microsoft.png',
      description: 'Foundational knowledge of cloud services and Microsoft Azure',
      skills: ['Azure Services', 'Cloud Concepts', 'Security', 'Compliance']
    }
  ];

  const achievements = [
    {
      title: 'LeetCode SQL 50 Badge',
      description: 'Achieved top badge for SQL proficiency',
      icon: '🏆',
      color: 'var(--accent-color)',
      link: 'https://leetcode.com/u/sedha007aakash/'
    },
    {
      title: 'GeeksForGeeks Rank 407',
      description: 'Ranked 407 out of 8,429 students',
      icon: '🎯',
      color: 'var(--primary-color)',
      link: 'https://www.geeksforgeeks.org/user/sedha007aakash/'
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        {/* Skills Categories */}
        <div 
          style={{
            display: 'flex',
            overflowX: 'auto',
            gap: '2rem',
            marginBottom: '4rem',
            scrollSnapType: 'x mandatory',
            paddingBottom: '1rem'
          }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="skill-category"
              style={{
                background: 'var(--bg-primary)',
                borderRadius: '1rem',
                padding: '2rem',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--border-color)',
                transition: 'all 0.3s ease',
                minWidth: 320,
                maxWidth: 400,
                flex: '0 0 90%',
                scrollSnapAlign: 'start'
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
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}
              >
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '48px',
                    height: '48px',
                    background: `${category.color}15`,
                    borderRadius: '0.75rem',
                    color: category.color,
                    fontSize: '1.5rem'
                  }}
                >
                  {category.icon}
                </div>
                <h3 
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    margin: 0
                  }}
                >
                  {category.title}
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div 
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '0.5rem'
                      }}
                    >
                      <div 
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem'
                        }}
                      >
                        <span 
                          style={{
                            color: category.color,
                            fontSize: '1.25rem'
                          }}
                        >
                          {skill.icon}
                        </span>
                        <div>
                          <div 
                            style={{
                              fontWeight: '600',
                              color: 'var(--text-primary)',
                              fontSize: '0.95rem'
                            }}
                          >
                            {skill.name}
                          </div>
                          <div 
                            style={{
                              fontSize: '0.8rem',
                              color: 'var(--text-secondary)'
                            }}
                          >
                            {skill.description}
                          </div>
                        </div>
                      </div>
                      <span 
                        style={{
                          fontSize: '0.85rem',
                          fontWeight: '600',
                          color: category.color
                        }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div 
                      style={{
                        width: '100%',
                        height: '6px',
                        background: 'var(--bg-tertiary)',
                        borderRadius: '3px',
                        overflow: 'hidden',
                        marginTop: '0.25rem'
                      }}
                    >
                      <div 
                        style={{
                          width: `${skill.level}%`,
                          height: '100%',
                          background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`,
                          borderRadius: '3px',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Certifications Section */}
        <div style={{ marginBottom: '4rem' }}>
          <h3
            style={{
              fontSize: '2rem',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '3rem',
              background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Professional Certifications
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '2rem',
              marginBottom: '4rem'
            }}
          >
            {certifications.map((cert, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(30, 41, 59, 0.8)',
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  border: '1px solid var(--border-color)',
                  backdropFilter: 'blur(20px)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-xl), var(--shadow-glow)';
                  e.currentTarget.style.borderColor = 'var(--primary-color)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }}
              >
                {/* Certification Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '1rem',
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
                      src={cert.image}
                      alt={cert.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </div>

                  <div style={{ flex: 1 }}>
                    <h4
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        marginBottom: '0.5rem'
                      }}
                    >
                      {cert.title}
                    </h4>
                    <p
                      style={{
                        color: 'var(--primary-color)',
                        fontWeight: '600',
                        marginBottom: '0.25rem'
                      }}
                    >
                      {cert.issuer}
                    </p>
                    <p
                      style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.9rem'
                      }}
                    >
                      Status: {cert.date}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem'
                  }}
                >
                  {cert.description}
                </p>

                {/* Skills */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}
                  >
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        style={{
                          background: 'var(--primary-color)20',
                          color: 'var(--primary-color)',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '1rem',
                          fontSize: '0.8rem',
                          fontWeight: '500',
                          border: '1px solid var(--primary-color)30'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verify Button */}
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '0.75rem',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = 'var(--shadow-lg)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  🔗 Verify Credential
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <h3
            style={{
              fontSize: '2rem',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '2rem',
              background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Achievements & Recognition
          </h3>
          
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                style={{
                  background: 'var(--bg-primary)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid var(--border-color)',
                  textAlign: 'center',
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
                  style={{
                    fontSize: '2.5rem',
                    marginBottom: '1rem'
                  }}
                >
                  {achievement.icon}
                </div>
                <h4 
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: '700',
                    color: achievement.color,
                    marginBottom: '0.5rem'
                  }}
                >
                  <a href={achievement.link} target="_blank" rel="noopener noreferrer" style={{ color: achievement.color, textDecoration: 'none' }}>
                    {achievement.title}
                  </a>
                </h4>
                <p 
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    margin: 0
                  }}
                >
                  {achievement.description}
                </p>
                <div style={{ marginTop: '1rem' }}>
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      padding: '0.4rem 1.1rem',
                      borderRadius: '0.5rem',
                      border: `1.5px solid ${achievement.color}`,
                      color: achievement.color,
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      background: 'transparent',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                      marginTop: '0.2rem',
                    }}
                    onMouseEnter={e => {
                      e.target.style.background = achievement.color + '22';
                    }}
                    onMouseLeave={e => {
                      e.target.style.background = 'transparent';
                    }}
                  >
                    {index === 0 ? 'View Leetcode Profile' : 'View Gfg Profile'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
