import React from 'react';
import { Link } from 'react-router-dom';
import './css/Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      icon: 'fas fa-code',
      description: 'Custom web applications built with modern technologies like React.js, Node.js, and other cutting-edge frameworks.',
      features: [
        'Responsive Design',
        'Modern UI/UX',
        'Performance Optimization',
        'SEO Friendly',
        'Cross-browser Compatibility',
        'Mobile-first Approach'
      ],
      price: 'Starting from $500'
    },
    {
      id: 2,
      title: 'Frontend Development',
      icon: 'fas fa-laptop-code',
      description: 'Beautiful and interactive user interfaces built with React.js, Bootstrap, and modern CSS frameworks.',
      features: [
        'React.js Development',
        'Bootstrap Implementation',
        'CSS3 Animations',
        'JavaScript/jQuery',
        'Responsive Layouts',
        'Interactive Components'
      ],
      price: 'Starting from $300'
    },
    {
      id: 3,
      title: 'Backend Development',
      icon: 'fas fa-server',
      description: 'Robust server-side applications and APIs built with Node.js, Express.js, and various databases.',
      features: [
        'Node.js & Express.js',
        'RESTful APIs',
        'Database Design',
        'Authentication & Security',
        'Performance Optimization',
        'API Documentation'
      ],
      price: 'Starting from $400'
    },
   
  ];

  const process = [
    {
      step: 1,
      title: 'Discovery & Planning',
      description: 'Understanding your requirements and creating a detailed project plan.',
      icon: 'fas fa-lightbulb'
    },
    {
      step: 2,
      title: 'Design & Prototyping',
      description: 'Creating wireframes and prototypes to visualize the final product.',
      icon: 'fas fa-pencil-ruler'
    },
    {
      step: 3,
      title: 'Development',
      description: 'Building your application using modern technologies and best practices.',
      icon: 'fas fa-code'
    },
    {
      step: 4,
      title: 'Testing & Launch',
      description: 'Thorough testing and deployment to ensure everything works perfectly.',
      icon: 'fas fa-rocket'
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center" data-aos="fade-up">
              <h1 className="page-title">
                My <span className="gradient-text">Services</span>
              </h1>
              <p className="page-subtitle">
                Comprehensive web development solutions tailored to your needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5" data-aos="fade-up">
              <h2 className="section-title">
                What I <span className="gradient-text">Offer</span>
              </h2>
              <p className="section-description">
                I provide a wide range of web development services to help bring your ideas to life
              </p>
            </div>
          </div>
          <div className="row">
            {services.map((service, index) => (
              <div className="col-lg-6 col-xl-4 mb-4" key={service.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="service-card">
                  <div className="service-icon">
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <div className="service-features">
                    <h4>Features:</h4>
                    <ul>
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>
                          <i className="fas fa-check"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="service-price">
                    <span>{service.price}</span>
                  </div>
                  <Link to="/contact" className="btn btn-custom">
                    <i className="fas fa-paper-plane me-2"></i>Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section section-padding bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5" data-aos="fade-up">
              <h2 className="section-title">
                My <span className="gradient-text">Process</span>
              </h2>
              <p className="section-description">
                A systematic approach to delivering high-quality solutions
              </p>
            </div>
          </div>
          <div className="row">
            {process.map((step, index) => (
              <div className="col-lg-3 col-md-6 mb-4" key={step.step} data-aos="fade-up" data-aos-delay={index * 200}>
                <div className="process-card">
                  <div className="process-number">{step.step}</div>
                  <div className="process-icon">
                    <i className={step.icon}></i>
                  </div>
                  <h3 className="process-title">{step.title}</h3>
                  <p className="process-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="why-choose section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
              <div className="why-choose-content">
                <h2 className="section-title">
                  Why <span className="gradient-text">Choose Me</span>
                </h2>
                <p className="section-description">
                  I bring a unique combination of technical expertise, creative problem-solving, and dedication to delivering exceptional results.
                </p>
                <div className="benefits">
                  <div className="benefit-item">
                    <i className="fas fa-graduation-cap"></i>
                    <div>
                      <h4>MSc Computer Science</h4>
                      <p>Strong academic foundation in software engineering</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <i className="fas fa-briefcase"></i>
                    <div>
                      <h4>1 Year Experience</h4>
                      <p>Hands-on experience in real-world projects</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <i className="fas fa-clock"></i>
                    <div>
                      <h4>Timely Delivery</h4>
                      <p>Commitment to meeting deadlines and milestones</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <i className="fas fa-headset"></i>
                    <div>
                      <h4>24/7 Support</h4>
                      <p>Ongoing support and maintenance after project completion</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="400">
              <div className="why-choose-image">
                <div className="stats-card">
                  <div className="stat-item">
                    <h3>100%</h3>
                    <p>Client Satisfaction</p>
                  </div>
                  <div className="stat-item">
                    <h3>20+</h3>
                    <p>Projects Completed</p>
                  </div>
                  <div className="stat-item">
                    <h3>15+</h3>
                    <p>Happy Clients</p>
                  </div>
                  <div className="stat-item">
                    <h3>1 Year</h3>
                    <p>Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center" data-aos="fade-up">
              <h2 className="cta-title">Ready to Start Your Project?</h2>
              <p className="cta-description">
                Let's discuss your requirements and create something amazing together
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-custom btn-lg me-3">
                  <i className="fas fa-paper-plane me-2"></i>Get In Touch
                </Link>
                <Link to="/projects" className="btn btn-outline-custom btn-lg">
                  <i className="fas fa-eye me-2"></i>View My Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 