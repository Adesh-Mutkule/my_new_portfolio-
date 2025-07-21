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
          className={`navbar-toggler${isOpen ? ' open' : ''}`}
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <div className="hamburger">
            <div className="hamburger-bar bar1"></div>
            <div className="hamburger-bar bar2"></div>
            <div className="hamburger-bar bar3"></div>
          </div>
        </button>

        <ul className={`navbar-nav${isOpen ? ' open' : ''}`}>
          <li className="nav-item">
            <Link 
              className={`nav-link${isActive('/') ? ' active' : ''}`} 
              to="/" 
              onClick={closeMenu}
            >
              <span className="nav-icon"><i className="fas fa-home"></i></span>
              <span className="nav-text">Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              className={`nav-link${isActive('/about') ? ' active' : ''}`} 
              to="/about" 
              onClick={closeMenu}
            >
              <span className="nav-icon"><i className="fas fa-user"></i></span>
              <span className="nav-text">About</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              className={`nav-link${isActive('/services') ? ' active' : ''}`} 
              to="/services" 
              onClick={closeMenu}
            >
              <span className="nav-icon"><i className="fas fa-cogs"></i></span>
              <span className="nav-text">Services</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              className={`nav-link${isActive('/projects') ? ' active' : ''}`} 
              to="/projects" 
              onClick={closeMenu}
            >
              <span className="nav-icon"><i className="fas fa-project-diagram"></i></span>
              <span className="nav-text">Projects</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              className={`nav-link${isActive('/blog') ? ' active' : ''}`} 
              to="/blog" 
              onClick={closeMenu}
            >
              <span className="nav-icon"><i className="fas fa-blog"></i></span>
              <span className="nav-text">Blog</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              className={`nav-link${isActive('/contact') ? ' active' : ''}`} 
              to="/contact" 
              onClick={closeMenu}
            >
              <span className="nav-icon"><i className="fas fa-envelope"></i></span>
              <span className="nav-text">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 