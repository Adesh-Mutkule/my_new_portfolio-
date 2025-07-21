import React, { useState } from 'react';
import './css/Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: '/images/E-commerce platform.jpg',
      description: 'A full-featured e-commerce platform built with React.js and Node.js. Features include user authentication, product management, shopping cart, and payment integration.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Stripe', 'Bootstrap'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'web',
      image: '/images/Task-Management-Application.jpg',
      description: 'A collaborative task management application with real-time updates, team collaboration, and progress tracking features.',
      technologies: ['React.js', 'Socket.io', 'Express.js', 'MongoDB', 'CSS3'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Portfolio Website',
      category: 'web',
        image: '/images/Portfolio Website.jpg',
      description: 'A responsive portfolio website showcasing professional work and skills with modern design and smooth animations.',
      technologies: ['React.js', 'Bootstrap', 'AOS', 'CSS3', 'JavaScript'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      category: 'web',
      image: '/images/Weather Dashboard.png',
      description: 'A weather dashboard application that displays current weather conditions and forecasts using external APIs.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Weather API', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Blog Platform',
      category: 'web',
       image: '/images/blog platform.jpg',
      description: 'A content management system for blogs with user authentication, article creation, and comment system.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Bootstrap'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Restaurant Website',
      category: 'web',
       image: '/images/Restaurant_Websites.jpg',
      description: 'A modern restaurant website with online ordering system, menu display, and reservation booking.',
      technologies: ['React.js', 'Node.js', 'MySQL', 'Bootstrap', 'jQuery'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'UI/UX Design' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="projects-hero section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center" data-aos="fade-up">
              <h1 className="page-title">
                My <span className="gradient-text">Projects</span>
              </h1>
              <p className="page-subtitle">
                Explore my latest work and creative solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section section-padding bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center" data-aos="fade-up">
              <div className="filter-buttons">
                {filters.map(filter => (
                  <button
                    key={filter.id}
                    className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                    onClick={() => setActiveFilter(filter.id)}
                  >
                    {filter.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid section-padding">
        <div className="container">
          <div className="row">
            {filteredProjects.map((project, index) => (
              <div 
                className={`col-lg-6 col-xl-4 mb-4 ${project.featured ? 'featured' : ''}`} 
                key={project.id}
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="project-card">
                  {project.featured && (
                    <div className="featured-badge">
                      <i className="fas fa-star"></i> Featured
                    </div>
                  )}
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                        <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span className="tech-tag" key={techIndex}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section section-padding bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5" data-aos="fade-up">
              <h2 className="section-title">
                Project <span className="gradient-text">Statistics</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-code"></i>
                </div>
                <h3>15+</h3>
                <p>Projects Completed</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>6+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="300">
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h3>1000+</h3>
                <p>Hours of Coding</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="400">
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-trophy"></i>
                </div>
                <h3>5+</h3>
                <p>Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="projects-cta section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center" data-aos="fade-up">
              <h2 className="cta-title">Have a Project in Mind?</h2>
              <p className="cta-description">
                Let's work together to bring your ideas to life. I'm always excited to take on new challenges!
              </p>
              <a href="/contact" className="btn btn-custom btn-lg">
                <i className="fas fa-rocket me-2"></i>Start Your Project
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 