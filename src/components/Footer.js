import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
              <div className="footer-widget">
                <h5 className="footer-title">
                  <i className="fas fa-code me-2"></i>
                  Adesh Mutkule
                </h5>
                <p className="footer-text">
                  Full Stack Developer with expertise in modern web technologies. 
                  Passionate about creating innovative solutions and delivering exceptional user experiences.
                </p>
                <div className="social-links">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
              <div className="footer-widget">
                <h5 className="footer-title">Quick Links</h5>
                <ul className="footer-links">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/projects">Projects</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="300">
              <div className="footer-widget">
                <h5 className="footer-title">Services</h5>
                <ul className="footer-links">
                  <li>Web Development</li>
                  <li>Mobile Development</li>
                  <li>UI/UX Design</li>
                  <li>Database Design</li>
                  <li>API Development</li>
                  <li>Cloud Solutions</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="400">
              <div className="footer-widget">
                <h5 className="footer-title">Contact Info</h5>
                <div className="contact-info">
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Ahmednagar, Maharashtra, India</span>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <span>7066179197</span>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <span>adeshmutkule9197@gmail.com</span>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-clock"></i>
                    <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="copyright">
                © {currentYear} Adesh Ashok Mutkule. All rights reserved.
              </p>
            </div>
            <div className="col-md-6">
              <div className="footer-bottom-links">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
                <a href="#sitemap">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <i className="fas fa-arrow-up"></i>
      </div>
    </footer>
  );
};

export default Footer; 