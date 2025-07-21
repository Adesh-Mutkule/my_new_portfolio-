import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Home.css';

const Home = () => {
  useEffect(() => {
    // Initialize scroll-to-top functionality
    const handleScroll = () => {
      const scrollTop = document.querySelector('.scroll-to-top');
      if (window.scrollY > 300) {
        scrollTop.classList.add('show');
      } else {
        scrollTop.classList.remove('show');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg">
          <div className="hero-particles"></div>
        </div>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
              <div className="hero-content">
                <h1 className="hero-title">
                  Hi, I'm <span className="gradient-text">Adesh pawar</span>
                </h1>
                <h2 className="hero-subtitle">Full Stack Developer</h2>
                <p className="hero-description">
                  Passionate about creating innovative web solutions with cutting-edge technologies. 
                  Specialized in React, Node.js, and modern web development practices.
                </p>
                <div className="hero-buttons">
                  <Link to="/projects" className="btn btn-custom me-3">
                    <i className="fas fa-eye me-2"></i>View Projects
                  </Link>
                  <Link to="/contact" className="btn btn-outline-custom">
                    <i className="fas fa-paper-plane me-2"></i>Get In Touch
                  </Link>
                </div>
                <div className="hero-stats">
                  <div className="stat-item">
                    <h3>1+</h3>
                    <p>Years Experience</p>
                  </div>
                  <div className="stat-item">
                    <h3>20+</h3>
                    <p>Projects Completed</p>
                  </div>
                  <div className="stat-item">
                    <h3>15+</h3>
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="400">
              <div className="hero-image">
                <img src="/images/adesh.jpg" alt="Adesh Mutkule" className="profile-photo-large" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="about-content">
                <h2 className="section-title">
                  About <span className="gradient-text">Me</span>
                </h2>
                <p className="section-description">
                  I am a passionate Full Stack Developer with a Master's degree in Computer Science. 
                  Currently working at  A2Z IT HUB PVT LTD with 1 year of experience in 
                  developing modern web applications.
                </p>
                <div className="skills-preview">
                  <div className="skill-item">
                    <i className="fab fa-react"></i>
                    <span>React.js</span>
                  </div>
                  <div className="skill-item">
                    <i className="fab fa-node-js"></i>
                    <span>Php </span>
                  </div>
                  <div className="skill-item">
                    <i className="fab fa-js-square"></i>
                    <span>JavaScript</span>
                  </div>
                  <div className="skill-item">
                    <i className="fab fa-html5"></i>
                    <span>HTML5</span>
                  </div>
                  <div className="skill-item">
                    <i className="fab fa-css3-alt"></i>
                    <span>CSS3</span>
                  </div>
                  <div className="skill-item">
                    <i className="fab fa-bootstrap"></i>
                    <span>Bootstrap</span>
                  </div>
                </div>
                <Link to="/about" className="btn btn-custom mt-4">
                  <i className="fas fa-user me-2"></i>Learn More About Me
                </Link>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div className="about-image">
                <div className="experience-card">
                  <div className="experience-icon">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <h3>Education</h3>
                  <p>MSc Computer Science</p>
                  <p>Specialized in Software Engineering</p>
                </div>
                <div className="experience-card">
                  <div className="experience-icon">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <h3>Experience</h3>
                  <p>1 Year at  A2Z IT HUB</p>
                  <p>Full Stack Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="services-preview section-padding bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5" data-aos="fade-up">
              <h2 className="section-title">
                My <span className="gradient-text">Services</span>
              </h2>
              <p className="section-description">
                I offer comprehensive web development services to help bring your ideas to life
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-code"></i>
                </div>
                <h4>Web Development</h4>
                <p>Custom web applications built with modern technologies and best practices.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="300">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h4>Responsive Design</h4>
                <p>Mobile-first responsive designs that work perfectly on all devices.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="400">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-database"></i>
                </div>
                <h4>Database Design</h4>
                <p>Efficient database architecture and optimization for your applications.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/services" className="btn btn-custom">
              <i className="fas fa-cogs me-2"></i>View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center" data-aos="fade-up">
              <h2 className="cta-title">Ready to Start Your Project?</h2>
              <p className="cta-description">
                Let's work together to create something amazing. Get in touch with me today!
              </p>
              <Link to="/contact" className="btn btn-custom btn-lg">
                <i className="fas fa-rocket me-2"></i>Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;