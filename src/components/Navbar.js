import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={closeMenu}>
          <i className="fas fa-code me-2"></i>
          <span className="gradient-text fw-bold">Adesh Mutkule</span>
        </Link>

        <button
          className={`navbar-toggler ${isOpen ? 'collapsed' : ''}`}
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/') ? 'active' : ''}`} 
                to="/" 
                onClick={closeMenu}
              >
                <i className="fas fa-home me-1"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/about') ? 'active' : ''}`} 
                to="/about" 
                onClick={closeMenu}
              >
                <i className="fas fa-user me-1"></i> About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/services') ? 'active' : ''}`} 
                to="/services" 
                onClick={closeMenu}
              >
                <i className="fas fa-cogs me-1"></i> Services
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/projects') ? 'active' : ''}`} 
                to="/projects" 
                onClick={closeMenu}
              >
                <i className="fas fa-project-diagram me-1"></i> Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/blog') ? 'active' : ''}`} 
                to="/blog" 
                onClick={closeMenu}
              >
                <i className="fas fa-blog me-1"></i> Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`} 
                to="/contact" 
                onClick={closeMenu}
              >
                <i className="fas fa-envelope me-1"></i> Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 