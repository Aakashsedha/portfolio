import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, Cloud, Settings, Award, ChevronDown, Menu, X, Zap, TrendingUp, Shield, Cpu, Globe, Server } from 'lucide-react';

const Portfolio = () => {
const [activeSection, setActiveSection] = useState('hero');
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

useEffect(() => {
const handleMouseMove = (e) => {
setMousePosition({ x: e.clientX, y: e.clientY });
};

    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'achievements', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
}, []);

const scrollToSection = (sectionId) => {
document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
setIsMenuOpen(false);
};

const NavLink = ({ href, children, mobile = false }) => (
<button
onClick={() => scrollToSection(href)}
className={`${
        mobile ? 'block w-full text-left px-4 py-3' : 'px-4 py-2'
      } text-sm font-medium transition-all duration-300 hover:text-cyan-400 hover:scale-105 ${
        activeSection === href ? 'text-cyan-400 font-semibold' : 'text-gray-300'
      } relative group`}
>
{children}
<span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full ${activeSection === href ? 'w-full' : ''}`}></span>
</button>
);

const MetricCard = ({ value, label, icon: Icon, color }) => (
<div className="bg-gray-900/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300 group">
<div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
<Icon size={24} className="text-white" />
</div>
<div className="text-2xl font-bold text-white mb-1">{value}</div>
<div className="text-gray-400 text-sm">{label}</div>
</div>
);

const CompanyLogo = ({ src, alt, className = "" }) => (
<div className={`flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 ${className}`}>
<img src={src} alt={alt} className="max-h-8 w-auto object-contain" />
</div>
);

return (
<div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
{/* Animated Background */}
<div className="fixed inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
<div
className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"
style={{
transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
left: '10%',
top: '20%',
}}
></div>
<div
className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"
style={{
transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
right: '10%',
bottom: '20%',
}}
></div>
</div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-xl z-50 border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AS.dev
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1 bg-gray-800/50 rounded-full px-2 py-1 backdrop-blur-md">
              <NavLink href="hero">Home</NavLink>
              <NavLink href="about">About</NavLink>
              <NavLink href="experience">Experience</NavLink>
              <NavLink href="skills">Skills</NavLink>
              <NavLink href="projects">Projects</NavLink>
              <NavLink href="achievements">Achievements</NavLink>
              <NavLink href="contact">Contact</NavLink>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg bg-gray-800/50 backdrop-blur-md"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-800/90 backdrop-blur-md border-t border-gray-700/50 rounded-b-lg">
              <NavLink href="hero" mobile>Home</NavLink>
              <NavLink href="about" mobile>About</NavLink>
              <NavLink href="experience" mobile>Experience</NavLink>
              <NavLink href="skills" mobile>Skills</NavLink>
              <NavLink href="projects" mobile>Projects</NavLink>
              <NavLink href="achievements" mobile>Achievements</NavLink>
              <NavLink href="contact" mobile>Contact</NavLink>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6 animate-pulse">
                🚀 Software Engineer @ Cleartrip Arabia
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
              Aakashdeep Singh Sedha
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
              Cloud-Native Architecture Specialist
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Architecting enterprise-scale microservices that process millions of requests with 99.9% uptime. 
              Delivering 3x performance improvements through cutting-edge distributed systems design.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            <MetricCard value="3x" label="Performance Boost" icon={TrendingUp} color="from-green-500 to-emerald-600" />
            <MetricCard value="99.9%" label="System Uptime" icon={Shield} color="from-blue-500 to-cyan-600" />
            <MetricCard value="30%" label="Latency Reduction" icon={Zap} color="from-yellow-500 to-orange-600" />
            <MetricCard value="65%" label="Efficiency Gain" icon={Cpu} color="from-purple-500 to-pink-600" />
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <a 
              href="mailto:sedha007aakash@gmail.com" 
              className="flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 group"
            >
              <Mail size={20} />
              <span className="font-semibold">Let's Build Something Amazing</span>
              <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a 
              href="https://github.com/Aakashsedha" 
              className="flex items-center space-x-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-md"
            >
              <Github size={20} />
              <span className="font-semibold">View My Code</span>
            </a>
          </div>

          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-gray-400 hover:text-cyan-400 transition-colors duration-300"
          >
            <ChevronDown size={40} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Elite Software Engineer
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Transforming complex business requirements into scalable, high-performance solutions that power millions of users
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="prose prose-lg text-gray-300">
                <p className="text-lg leading-relaxed mb-6">
                  I'm a passionate <strong className="text-cyan-400">Software Engineer</strong> specializing in building 
                  enterprise-grade distributed systems. At <strong className="text-blue-400">Cleartrip Arabia</strong>, 
                  I architect cloud-native platforms that handle massive scale with exceptional reliability.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  My expertise lies in designing microservices architectures that deliver measurable business impact: 
                  <strong className="text-green-400"> 3x throughput improvements</strong>, 
                  <strong className="text-yellow-400"> 30% latency reduction</strong>, and 
                  <strong className="text-purple-400"> 99.9% uptime</strong> at enterprise scale.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin size={20} className="text-cyan-400" />
                  <span className="font-medium">Bangalore, India</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone size={20} className="text-cyan-400" />
                  <span className="font-medium">+91 7657926084</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Globe size={20} className="text-cyan-400" />
                  <span className="font-medium">Remote-Friendly</span>
                </div>
              </div>

              {/* Company Logos */}
              <div className="pt-8">
                <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">Trusted by Industry Leaders</p>
                <div className="grid grid-cols-3 gap-4">
                  <CompanyLogo 
                    src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
                    alt="AWS"
                  />
                  <CompanyLogo 
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure_Logo.svg" 
                    alt="Microsoft Azure"
                  />
                  <CompanyLogo 
                    src="https://seeklogo.com/images/C/cleartrip-logo-7B7A607E88-seeklogo.com.png" 
                    alt="Cleartrip"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="text-2xl font-bold text-cyan-400">Educational Excellence</h3>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-cyan-400 pl-6 py-4 bg-gradient-to-r from-cyan-400/5 to-transparent rounded-r-lg">
                  <h4 className="text-xl font-bold text-white mb-2">Bachelor of Engineering</h4>
                  <p className="text-cyan-400 font-semibold">Computer Science Engineering</p>
                  <p className="text-gray-400">Chitkara University, Punjab</p>
                  <div className="flex items-center space-x-4 mt-3">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-600 px-3 py-1 rounded-full text-sm font-bold">
                      CGPA: 9.06/10
                    </span>
                    <span className="text-gray-400 text-sm">2021-2025</span>
                  </div>
                </div>

                <div className="border-l-4 border-gray-500 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-gray-300">Class XII (CBSE)</h4>
                  <p className="text-gray-400">Government Model Senior Secondary School</p>
                  <span className="inline-block bg-blue-600 px-3 py-1 rounded-full text-sm font-semibold mt-2">
                    81% (2020-2021)
                  </span>
                </div>

                <div className="border-l-4 border-gray-500 pl-6 py-4">
                  <h4 className="text-lg font-semibold text-gray-300">Class X (CBSE)</h4>
                  <p className="text-gray-400">St. Joseph's Senior Secondary School</p>
                  <span className="inline-block bg-green-600 px-3 py-1 rounded-full text-sm font-semibold mt-2">
                    94.5% (2018-2019)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 bg-gradient-to-b from-gray-900/50 to-gray-800/50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Professional Journey
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Building enterprise-scale solutions that power millions of users worldwide
            </p>
          </div>

          <div className="space-y-12">
            {/* Current Role */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                  <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shrink-0">
                      <Server size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-cyan-400 mb-1">Software Engineer I (SDE-1)</h3>
                      <p className="text-xl text-white font-semibold">Cleartrip Arabia</p>
                      <p className="text-gray-400 flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>Bangalore, India</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-400 font-medium">July 2025 – Present</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-500/10 to-transparent p-4 rounded-lg border-l-4 border-green-500">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp size={16} className="text-green-400" />
                        <span className="text-green-400 font-semibold">Performance Impact</span>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Architected cloud-native visa booking platform delivering <strong>3x throughput improvement</strong> and <strong>99.9% uptime</strong> at enterprise scale
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-500/10 to-transparent p-4 rounded-lg border-l-4 border-blue-500">
                      <div className="flex items-center space-x-2 mb-2">
                        <Zap size={16} className="text-blue-400" />
                        <span className="text-blue-400 font-semibold">API Optimization</span>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Engineered high-performance RESTful APIs with multi-level caching, <strong>reducing latency by 30%</strong>
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-purple-500/10 to-transparent p-4 rounded-lg border-l-4 border-purple-500">
                      <div className="flex items-center space-x-2 mb-2">
                        <Shield size={16} className="text-purple-400" />
                        <span className="text-purple-400 font-semibold">Security & Scale</span>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Implemented secure token management with Java caching and MongoDB, enhancing authentication efficiency
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-orange-500/10 to-transparent p-4 rounded-lg border-l-4 border-orange-500">
                      <div className="flex items-center space-x-2 mb-2">
                        <Database size={16} className="text-orange-400" />
                        <span className="text-orange-400 font-semibold">Data Architecture</span>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Designed optimized NoSQL schemas for document workflows with transactional integrity
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Internship */}
            <div className="relative">
              <div className="bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                  <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center shrink-0">
                      <Code size={28} className="text-gray-300" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-300 mb-1">Software Engineer Intern</h3>
                      <p className="text-xl text-gray-200 font-semibold">Cleartrip Arabia</p>
                      <p className="text-gray-400 flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>Bangalore, India</span>
                      </p>
                    </div>
                  </div>
                  <span className="text-gray-400 font-medium">July 2024 – June 2025</span>
                </div>

                <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 shrink-0"></div>
                    <p className="text-sm leading-relaxed">
                      Spearheaded distributed Spring Boot microservices platform, <strong>reducing manual allocation by 40%</strong>
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></div>
                    <p className="text-sm leading-relaxed">
                      Crafted reactive admin dashboard with <strong>50ms response times</strong> and <strong>65% efficiency improvement</strong>
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                    <p className="text-sm leading-relaxed">
                      Engineered CI/CD pipeline with canary releases, ensuring <strong>99.99% service availability</strong>
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 shrink-0"></div>
                    <p className="text-sm leading-relaxed">
                      Developed bidirectional sync service achieving <strong>100% data consistency</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Technical Arsenal
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cutting-edge technologies and frameworks powering enterprise-scale solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 group hover:scale-105">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Code size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-cyan-400">Programming</h3>
              </div>
              <div className="space-y-3">
                {['Java (Spring Boot)', 'Python', 'SQL', 'Data Structures & Algorithms', 'Microservices Architecture', 'REST APIs'].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-green-500/30 transition-all duration-300 group hover:scale-105">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Database size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-400">Database & Storage</h3>
              </div>
              <div className="space-y-3">
                {['MongoDB', 'MySQL', 'Microsoft T-SQL', 'Distributed Caching', 'Data Modeling', 'Redis'].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 group hover:scale-105">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Cloud size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-purple-400">Cloud Platforms</h3>
              </div>
              <div className="space-y-3">
                {['Google Cloud Platform', 'AWS', 'Microsoft Azure', 'Kubernetes', 'Docker', 'Serverless'].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 group hover:scale-105">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Settings size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-orange-400">DevOps & Tools</h3>
              </div>
              <div className="space-y-3">
                {['Git', 'Maven, Gradle', 'IntelliJ IDEA', 'Postman, Swagger', 'CI/CD Pipelines', 'Monitoring'].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="mt-16 bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Core Competencies
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                'Distributed Systems',
                'High-Throughput Applications', 
                'Fault Tolerance',
                'Scalable System Design',
                'API Development',
                'Design Patterns'
              ].map((competency, index) => (
                <div key={index} className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-4 text-center hover:border-cyan-400/40 transition-all duration-300">
                  <span className="text-cyan-300 font-medium text-sm">{competency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 bg-gradient-to-b from-gray-900/50 to-gray-800/50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Enterprise-scale solutions powering millions of users worldwide
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Visa Booking Platform */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 h-full">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Globe size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400">Visa Booking Platform</h3>
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">Production</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Enterprise-scale cloud-native visa booking platform serving millions of users with complete HLD/LLD design using Spring Boot microservices on GCP.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-green-600/20 border border-green-500/30 text-green-400 text-xs px-3 py-1 rounded-full">Spring Boot</span>
                  <span className="bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs px-3 py-1 rounded-full">GCP</span>
                  <span className="bg-red-600/20 border border-red-500/30 text-red-400 text-xs px-3 py-1 rounded-full">MongoDB</span>
                  <span className="bg-purple-600/20 border border-purple-500/30 text-purple-400 text-xs px-3 py-1 rounded-full">Microservices</span>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <TrendingUp size={16} className="text-green-400" />
                    <span className="text-sm text-gray-300"><strong className="text-green-400">3x</strong> throughput improvement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield size={16} className="text-blue-400" />
                    <span className="text-sm text-gray-300"><strong className="text-blue-400">99.9%</strong> uptime at scale</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap size={16} className="text-yellow-400" />
                    <span className="text-sm text-gray-300"><strong className="text-yellow-400">30%</strong> latency reduction</span>
                  </div>
                </div>

                <a 
                  href="https://www.cleartrip.ae/visa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 text-sm font-medium"
                >
                  <ExternalLink size={16} />
                  <span>View Live Project</span>
                </a>
              </div>
            </div>

            {/* ProcureX */}
            <div className="bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 h-full">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <Cpu size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-400">ProcureX</h3>
                  <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">AI-Powered</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Next-generation ATS system leveraging Claude AI for intelligent resume processing and standardized JSON extraction at enterprise scale.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-yellow-600/20 border border-yellow-500/30 text-yellow-400 text-xs px-3 py-1 rounded-full">Python</span>
                <span className="bg-orange-600/20 border border-orange-500/30 text-orange-400 text-xs px-3 py-1 rounded-full">AWS</span>
                <span className="bg-purple-600/20 border border-purple-500/30 text-purple-400 text-xs px-3 py-1 rounded-full">Claude AI</span>
                <span className="bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs px-3 py-1 rounded-full">EC2/S3</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <span className="text-sm text-gray-300">Deployed on AWS EC2 and S3 for scalable computing</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span className="text-sm text-gray-300">Integrated Claude AI for intelligent resume parsing</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <span className="text-sm text-gray-300">Secure storage and database management</span>
                </div>
              </div>
            </div>

            {/* Distributed Microservices */}
            <div className="bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-green-500/30 transition-all duration-300 h-full">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Server size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-400">Distributed Microservices</h3>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">Enterprise</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                High-performance Spring Boot microservices platform with auto-scaling capabilities and zero-downtime deployment pipeline.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-green-600/20 border border-green-500/30 text-green-400 text-xs px-3 py-1 rounded-full">Spring Boot</span>
                <span className="bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs px-3 py-1 rounded-full">Kubernetes</span>
                <span className="bg-yellow-600/20 border border-yellow-500/30 text-yellow-400 text-xs px-3 py-1 rounded-full">CI/CD</span>
                <span className="bg-red-600/20 border border-red-500/30 text-red-400 text-xs px-3 py-1 rounded-full">Docker</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <TrendingUp size={16} className="text-green-400" />
                  <span className="text-sm text-gray-300"><strong className="text-green-400">40%</strong> reduction in manual allocation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap size={16} className="text-yellow-400" />
                  <span className="text-sm text-gray-300"><strong className="text-yellow-400">50ms</strong> response times</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield size={16} className="text-blue-400" />
                  <span className="text-sm text-gray-300"><strong className="text-blue-400">99.99%</strong> service availability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Achievements & Recognition
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Industry certifications and competitive programming excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-md rounded-2xl p-8 border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <Award size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-yellow-400">Competitive Achievements</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-500/10 to-transparent rounded-lg border-l-4 border-green-500">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-sm">🏆</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-400 mb-1">LeetCode SQL 50 Badge</h4>
                    <p className="text-gray-400 text-sm">Achieved top badge demonstrating advanced SQL proficiency and database optimization skills</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-500/10 to-transparent rounded-lg border-l-4 border-blue-500">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-sm">🎯</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-1">GeeksForGeeks College Rank #331</h4>
                    <p className="text-gray-400 text-sm">Ranked 331 out of 8,429 students - Top 4% in competitive programming</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-purple-500/10 to-transparent rounded-lg border-l-4 border-purple-500">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-sm">⭐</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-400 mb-1">Academic Excellence</h4>
                    <p className="text-gray-400 text-sm">CGPA 9.06/10 in Computer Science Engineering - Consistent top performer</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-md rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                  <Award size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-400">Industry Certifications</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-500/10 to-transparent rounded-lg border-l-4 border-blue-500">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shrink-0">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure_Logo.svg" alt="Azure" className="w-8 h-auto" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-1">Microsoft Azure AZ-900 Fundamentals</h4>
                    <p className="text-gray-400 text-sm">Cloud fundamentals and Azure services expertise</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-orange-500/10 to-transparent rounded-lg border-l-4 border-orange-500">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shrink-0">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" className="w-8 h-auto" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-1">AWS Certified Cloud Practitioner</h4>
                    <p className="text-gray-400 text-sm">Amazon Web Services cloud computing fundamentals</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-yellow-500/10 to-transparent rounded-lg border-l-4 border-yellow-500">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-white font-bold">🐍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-1">Python for Everyone (Coursera)</h4>
                    <p className="text-gray-400 text-sm">Advanced Python programming and development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-gradient-to-b from-gray-900/50 to-gray-800/50 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Let's Build Something Extraordinary
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ready to architect scalable solutions that make a real impact? Let's discuss how we can drive innovation together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <a 
              href="mailto:sedha007aakash@gmail.com"
              className="flex flex-col items-center space-y-3 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 hover:border-cyan-400/40 p-6 rounded-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-cyan-400 mb-1">Email</h4>
                <p className="text-gray-400 text-sm">sedha007aakash@gmail.com</p>
              </div>
            </a>

            <a 
              href="https://linkedin.com/in/aakashdeep-singh-sedha-657abb1a7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-3 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 hover:border-blue-400/40 p-6 rounded-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Linkedin size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-1">LinkedIn</h4>
                <p className="text-gray-400 text-sm">Professional Network</p>
              </div>
            </a>

            <a 
              href="https://github.com/Aakashsedha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-3 bg-gradient-to-br from-gray-500/10 to-gray-700/10 border border-gray-500/20 hover:border-gray-400/40 p-6 rounded-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Github size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-300 mb-1">GitHub</h4>
                <p className="text-gray-400 text-sm">Code Repository</p>
              </div>
            </a>

            <div className="flex flex-col items-center space-y-3 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 p-6 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-green-400 mb-1">Phone</h4>
                <p className="text-gray-400 text-sm">+91 7657926084</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold mb-4 text-white">Currently Open To</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-gradient-to-r from-cyan-500/10 to-transparent p-4 rounded-lg border-l-4 border-cyan-500">
                <h4 className="font-semibold text-cyan-400 mb-2">Senior SDE Roles</h4>
                <p className="text-gray-400">Full-time opportunities in distributed systems and microservices</p>
              </div>
              <div className="bg-gradient-to-r from-green-500/10 to-transparent p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-green-400 mb-2">Technical Consulting</h4>
                <p className="text-gray-400">Architecture reviews and performance optimization projects</p>
              </div>
              <div className="bg-gradient-to-r from-purple-500/10 to-transparent p-4 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-semibold text-purple-400 mb-2">Collaboration</h4>
                <p className="text-gray-400">Open source contributions and technical discussions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/90 backdrop-blur-md py-8 px-4 border-t border-gray-700/50 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400">
              <p>&copy; 2025 Aakashdeep Singh Sedha. Crafted with React & deployed on Vercel.</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 text-sm">Built for performance</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">Available for hire</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
);
};

export default Portfolio;