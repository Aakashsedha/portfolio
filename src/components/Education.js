import React from 'react';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaStar, FaTrophy } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Chitkara University',
      location: 'Punjab, India',
      period: 'Aug 2021 - June 2025',
      grade: 'CGPA: 9.06',
      gradeType: 'cgpa',
      description: 'Specialized in software engineering, data structures, algorithms, and system design. Focused on cloud computing and distributed systems.',
      highlights: [
        'Maintained excellent academic performance with 9.06 CGPA',
        'Specialized in Software Engineering and System Design',
        'Active participation in coding competitions and hackathons',
        'Leadership roles in technical societies and projects'
      ],
      courses: [
        'Data Structures & Algorithms',
        'System Design',
        'Database Management Systems',
        'Cloud Computing',
        'Software Engineering',
        'Distributed Systems'
      ]
    },
    {
      degree: 'Class XII (CBSE)',
      institution: 'Government Model Senior Secondary School, Sector-35',
      location: 'Chandigarh, India',
      period: '2020 - 2021',
      grade: '81%',
      gradeType: 'percentage',
      description: 'Completed higher secondary education with focus on Science stream including Physics, Chemistry, and Mathematics.',
      highlights: [
        'Strong foundation in Mathematics and Science',
        'Developed analytical and problem-solving skills',
        'Participated in various academic competitions'
      ],
      courses: [
        'Mathematics',
        'Physics',
        'Chemistry',
        'Computer Science',
        'English'
      ]
    },
    {
      degree: 'Class X (CBSE)',
      institution: 'St. Joseph\'s Senior Secondary School, Sector-44-D',
      location: 'Chandigarh, India',
      period: '2018 - 2019',
      grade: '94.5%',
      gradeType: 'percentage',
      description: 'Completed secondary education with outstanding academic performance, laying a strong foundation for future studies.',
      highlights: [
        'Achieved exceptional academic performance with 94.5%',
        'Consistent top performer in class',
        'Active in extracurricular activities',
        'Strong foundation in core subjects'
      ],
      courses: [
        'Mathematics',
        'Science',
        'Social Studies',
        'English',
        'Hindi'
      ]
    }
  ];

  const getGradeColor = (gradeType, grade) => {
    if (gradeType === 'cgpa') {
      const cgpa = parseFloat(grade.split(': ')[1]);
      if (cgpa >= 9.0) return '#10b981';
      if (cgpa >= 8.0) return '#f59e0b';
      return 'var(--primary-color)';
    } else {
      const percentage = parseFloat(grade.replace('%', ''));
      if (percentage >= 80) return '#10b981';
      if (percentage >= 70) return '#f59e0b';
      return 'var(--primary-color)';
    }
  };

  return (
    <section id="education" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-timeline" style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
          {/* Timeline Line */}
          <div 
            style={{
              position: 'absolute',
              left: '2rem',
              top: '2rem',
              bottom: '2rem',
              width: '3px',
              background: 'linear-gradient(to bottom, var(--primary-color), var(--accent-color))',
              borderRadius: '1.5px'
            }}
          />

          {educationData.map((edu, index) => (
            <div 
              key={index}
              className="education-item"
              style={{
                position: 'relative',
                marginBottom: '3rem',
                paddingLeft: '5.5rem'
              }}
            >
              {/* Timeline Dot */}
              <div 
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '2rem',
                  width: '2rem',
                  height: '2rem',
                  background: 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))',
                  borderRadius: '50%',
                  border: '4px solid var(--bg-primary)',
                  boxShadow: '0 0 0 4px var(--primary-color)20',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '0.9rem'
                }}
              >
                <FaGraduationCap />
              </div>

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
                {/* Education Header */}
                <div
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
                      {edu.degree}
                    </h3>

                    {/* Institution with Logo */}
                    {edu.institution === 'Chitkara University' ? (
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
                            padding: '0.25rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: 'var(--shadow-md)'
                          }}
                        >
                          <img
                            src="/images/Chitkarauniversity.png"
                            alt="Chitkara University"
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
                              fontSize: '1.125rem',
                              fontWeight: '600',
                              color: 'var(--primary-color)'
                            }}
                          >
                            {edu.institution}
                          </div>
                          <div
                            style={{
                              color: 'var(--text-secondary)',
                              fontSize: '0.9rem'
                            }}
                          >
                            Private Research University
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        style={{
                          fontSize: '1.125rem',
                          fontWeight: '600',
                          color: 'var(--primary-color)',
                          marginBottom: '0.75rem'
                        }}
                      >
                        {edu.institution}
                      </div>
                    )}

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
                        {edu.period}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaMapMarkerAlt />
                        {edu.location}
                      </div>
                    </div>
                  </div>

                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      background: `${getGradeColor(edu.gradeType, edu.grade)}15`,
                      padding: '0.75rem 1rem',
                      borderRadius: '0.75rem',
                      border: `2px solid ${getGradeColor(edu.gradeType, edu.grade)}30`
                    }}
                  >
                    <FaStar style={{ color: getGradeColor(edu.gradeType, edu.grade) }} />
                    <span 
                      style={{
                        fontSize: '1.125rem',
                        fontWeight: '700',
                        color: getGradeColor(edu.gradeType, edu.grade)
                      }}
                    >
                      {edu.grade}
                    </span>
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
                  {edu.description}
                </p>

                {/* Highlights */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 
                    style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      marginBottom: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <FaTrophy style={{ color: 'var(--accent-color)' }} />
                    Key Highlights
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <li 
                        key={highlightIndex}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.75rem',
                          marginBottom: '0.5rem',
                          fontSize: '0.9rem',
                          color: 'var(--text-secondary)'
                        }}
                      >
                        <div 
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: 'var(--primary-color)',
                            marginTop: '0.5rem',
                            flexShrink: 0
                          }}
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Relevant Courses */}
                <div>
                  <h4 
                    style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      marginBottom: '0.75rem'
                    }}
                  >
                    Relevant Coursework
                  </h4>
                  <div 
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}
                  >
                    {edu.courses.map((course, courseIndex) => (
                      <span 
                        key={courseIndex}
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
                        {course}
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
          .education-item {
            padding-left: 4rem !important;
          }
          
          .education-timeline::before {
            left: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
