import React, { useState } from 'react';
import './css/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
{
icon: 'fas fa-map-marker-alt',
title: 'Address',
content: 'A2Z IT HUB, Ahmednagar, Maharashtra, India',
link: 'https://maps.app.goo.gl/CncREkGe9BA5CBP16'
},

    {
      icon: 'fas fa-phone',
      title: 'Phone',
      content: '+91 7066179197',
      link: 'tel:+917066179197'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      content: 'adeshmutkule9197@gmail.com',
      link: 'mailto:adeshmutkule9197@gmail.com'
    },
    {
      icon: 'fas fa-clock',
      title: 'Working Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM',
      link: null
    }
  ];

  const socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/', label: 'GitHub' },
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/adesh-mutkule-3a5622282', label: 'LinkedIn' },
    // { icon: 'fab fa-twitter', url: 'https://twitter.com', label: 'Twitter' },
    // { icon: 'fab fa-instagram', url: 'https://instagram.com', label: 'Instagram' }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center" data-aos="fade-up">
              <h1 className="page-title">
                Get In <span className="gradient-text">Touch</span>
              </h1>
              <p className="page-subtitle">
                Let's discuss your project and create something amazing together
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="contact-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8" data-aos="fade-right" data-aos-delay="200">
              <div className="contact-form-container">
                <h2 className="section-title">
                  Send Me a <span className="gradient-text">Message</span>
                </h2>
                <p className="section-description">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
                
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-group mb-3">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>
                  
                  <div className="form-group mb-4">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control"
                      rows="6"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-custom"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin me-2"></i>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane me-2"></i>
                        Send Message
                      </>
                    )}
                  </button>
                </form>

                {submitStatus === 'success' && (
                  <div className="alert alert-success mt-3" role="alert">
                    <i className="fas fa-check-circle me-2"></i>
                    Thank you! Your message has been sent successfully. I'll get back to you soon.
                  </div>
                )}
              </div>
            </div>
            
            <div className="col-lg-4" data-aos="fade-left" data-aos-delay="400">
              <div className="contact-info-container">
                <h3 className="contact-info-title">Contact Information</h3>
                <p className="contact-info-description">
                  Feel free to reach out to me through any of these channels.
                </p>
                
                <div className="contact-info-list">
                  {contactInfo.map((info, index) => (
                    <div className="contact-info-item" key={index}>
                      <div className="contact-info-icon">
                        <i className={info.icon}></i>
                      </div>
                      <div className="contact-info-content">
                        <h4>{info.title}</h4>
                        {info.link ? (
                          <a href={info.link} target="_blank" rel="noopener noreferrer">
                            {info.content}
                          </a>
                        ) : (
                          <p>{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="social-links-section">
                  <h4>Follow Me</h4>
                  <div className="social-links">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        title={social.label}
                      >
                        <i className={social.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section section-padding bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5" data-aos="fade-up">
              <h2 className="section-title">
                Find Me <span className="gradient-text">Here</span>
              </h2>
              <p className="section-description">
                Ahmadnagar, Maharashtra, India
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12" data-aos="fade-up" data-aos-delay="200">
              <div className="map-container">
                <div className="map-placeholder">
                  <i className="fas fa-map-marked-alt"></i>
                  <h3>Ahmadnagar, Maharashtra, India</h3>
                  <p>I'm based in Ahmadnagar and available for remote work worldwide</p>
                  <a
                    href="https://maps.app.goo.gl/CncREkGe9BA5CBP16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-custom"
                  >
                    <i className="fas fa-map me-2"></i>View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5" data-aos="fade-up">
              <h2 className="section-title">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              <p className="section-description">
                Common questions about my services and process
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="200">
              <div className="faq-item">
                <h4>What is your typical project timeline?</h4>
                <p>Project timelines vary depending on complexity. Simple websites take 1-2 weeks, while complex applications can take 4-8 weeks or more.</p>
              </div>
            </div>
            <div className="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="300">
              <div className="faq-item">
                <h4>Do you provide ongoing support?</h4>
                <p>Yes, I offer ongoing support and maintenance packages to ensure your website continues to run smoothly after launch.</p>
              </div>
            </div>
            <div className="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="400">
              <div className="faq-item">
                <h4>What technologies do you use?</h4>
                <p>I work with modern technologies including React.js, Node.js, JavaScript, HTML5, CSS3, Bootstrap, and various databases.</p>
              </div>
            </div>
            <div className="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="500">
              <div className="faq-item">
                <h4>Do you work with international clients?</h4>
                <p>Absolutely! I work with clients worldwide and am comfortable with remote collaboration and different time zones.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 