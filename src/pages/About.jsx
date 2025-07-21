import React from 'react';
import { Link } from 'react-router-dom';
import './css/About.css';

const About = () => {
  const skills = [
    { name: 'React.js', level: 90, icon: 'fab fa-react' },
    { name: 'JavaScript', level: 85, icon: 'fab fa-js-square' },
    { name: 'php (coordinator)', level: 80, icon: 'fab fa-node-js' },
    { name: 'HTML5', level: 95, icon: 'fab fa-html5' },
    { name: 'CSS3', level: 90, icon: 'fab fa-css3-alt' },
    { name: 'Bootstrap', level: 85, icon: 'fab fa-bootstrap' },
    { name: 'jQuery', level: 80, icon: 'fas fa-code' },
    { name: 'Git', level: 75, icon: 'fab fa-git-alt' },
    { name: 'MongoDB', level: 70, icon: 'fas fa-database' },
    { name: 'MySQL', level: 75, icon: 'fas fa-database' }
  ];

  const experience = [
    {
      title: 'Full Stack Developer',
      company: ' A2Z IT HUB PVT LTD',
      period: '2023 - Present',
      description: 'Developing modern web applications using React.js, Node.js, and various modern technologies. Working on client projects and maintaining existing applications.',
      technologies: ['React.js', 'Node.js', 'JavaScript', 'Bootstrap', 'MongoDB']
    }
  ];

  const education = [
    {
      degree: 'MSc Computer Science',
      institution: 'Savitribai Phule Pune University,',

      period: '2024 - 2026',
      description: 'Specialized in Software Engineering with focus on modern web technologies and software development methodologies.'
    },
    {
      degree: 'BSc Computer Science',
      institution: 'Dr. Babasaheb Ambedkar Marathwada University ...',
      period: '2022 - 2024',
      description: 'Foundation in computer science principles, programming, and software development.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center" data-aos="fade-up">
              <h1 className="page-title">
                About <span className="gradient-text">Me</span>
              </h1>
              <p className="page-subtitle">
                Passionate Full Stack Developer with expertise in modern web technologies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Info Section */}
      <section className="personal-info section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
              <div className="about-content">
                <h2 className="section-title">
                  Who I <span className="gradient-text">Am</span>
                </h2>
                <p className="section-description">
                  I am Adesh Ashok Mutkule, a passionate Full Stack Developer with a Master's degree in Computer Science. 
                  Currently working at  A2Z IT HUB PVT LTD, I have 1 year of experience in developing modern web applications.
                </p>
                <p className="section-description">
                  My journey in software development began during my academic years, where I developed a strong foundation 
                  in computer science principles and programming. I specialize in creating responsive, user-friendly web 
                  applications using cutting-edge technologies.
                </p>
                <div className="personal-details">
                  <div className="detail-item">
                    <i className="fas fa-user"></i>
                    <div>
                      <strong>Name:</strong> Adesh Ashok Mutkule
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-graduation-cap"></i>
                    <div>
                      <strong>Education:</strong> MSc Computer Science
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-briefcase"></i>
                    <div>
                      <strong>Experience:</strong> 1 Year
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-building"></i>
                    <div>
                      <strong>Company:</strong>  A2Z IT HUB PVT LTD
                    </div>
                  </div>
                </div>
                <Link to="/contact" className="btn btn-custom mt-4">
                  <i className="fas fa-paper-plane me-2"></i>Get In Touch
                </Link>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="400">
              <div className="about-image">
                <div className="profile-card-large">
                  <div className="profile-image-large">
                                    <img src="/images/adesh.jpg" alt="Adesh Mutkule" className="profile-photo-large" />

                  </div>
                  <div className="profile-details">
                    <h3>Adesh Ashok Mutkule</h3>
                    <p className="title">Full Stack Developer</p>
                    <div className="tech-stack">
                      <span className="tech-tag">React.js</span>
                      <span className="tech-tag">Node.js</span>
                      <span className="tech-tag">JavaScript</span>
                      <span className="tech-tag">Bootstrap</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section section-padding bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5" data-aos="fade-up">
              <h2 className="section-title">
                My <span className="gradient-text">Skills</span>
              </h2>
              <p className="section-description">
                I have expertise in various technologies and frameworks for modern web development
              </p>
            </div>
          </div>
          <div className="row">
            {skills.map((skill, index) => (
              <div className="col-lg-6 col-md-6 mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="skill-card">
                  <div className="skill-header">
                    <i className={skill.icon}></i>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-progress">
                    <div 
                      className="skill-bar" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5" data-aos="fade-up">
              <h2 className="section-title">
                Work <span className="gradient-text">Experience</span>
              </h2>
              <p className="section-description">
                My professional journey in software development
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="timeline">
                {experience.map((exp, index) => (
                  <div className="timeline-item" key={index} data-aos="fade-up" data-aos-delay={index * 200}>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h3>{exp.title}</h3>
                        <span className="company">{exp.company}</span>
                        <span className="period">{exp.period}</span>
                      </div>
                      <p className="timeline-description">{exp.description}</p>
                      <div className="technologies">
                        {exp.technologies.map((tech, techIndex) => (
                          <span className="tech-badge" key={techIndex}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section section-padding bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5" data-aos="fade-up">
              <h2 className="section-title">
                <span className="gradient-text">Education</span>
              </h2>
              <p className="section-description">
                My academic background and qualifications
              </p>
            </div>
          </div>
          <div className="row">
            {education.map((edu, index) => (
              <div className="col-lg-6 mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 200}>
                <div className="education-card">
                  <div className="education-icon">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <div className="education-content">
                    <h3>{edu.degree}</h3>
                    <p className="institution">{edu.institution}</p>
                    <p className="period">{edu.period}</p>
                    <p className="description">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center" data-aos="fade-up">
              <h2 className="cta-title">Interested in Working Together?</h2>
              <p className="cta-description">
                Let's discuss your project and see how I can help bring your ideas to life
              </p>
              <div className="cta-buttons">
                <Link to="/projects" className="btn btn-custom me-3">
                  <i className="fas fa-eye me-2"></i>View My Work
                </Link>
                <Link to="/contact" className="btn btn-outline-custom">
                  <i className="fas fa-envelope me-2"></i>Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 