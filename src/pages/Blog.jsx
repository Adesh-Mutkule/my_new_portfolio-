import React, { useState } from 'react';
import './css/Blog.css';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React.js Development',
      category: 'react',
      excerpt: 'Learn the fundamentals of React.js and how to build your first component-based application.',
      content: 'React.js has revolutionized the way we build user interfaces. In this comprehensive guide, we\'ll explore the core concepts of React, including components, props, state, and lifecycle methods...',
      author: 'Adesh Mutkule',
      date: '2024-01-15',
      readTime: '5 min read',
      image: './images/blog.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Modern CSS Techniques for Better Web Design',
      category: 'css',
      excerpt: 'Discover advanced CSS techniques including Grid, Flexbox, and CSS animations for modern web design.',
      content: 'CSS has evolved significantly over the years. Modern CSS provides powerful tools like Grid and Flexbox that make layout design more intuitive and flexible...',
      author: 'Adesh Mutkule',
      date: '2024-01-10',
      readTime: '7 min read',
      image: './images/UI.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Node.js Backend Development Best Practices',
      category: 'nodejs',
      excerpt: 'Essential best practices for building scalable and maintainable Node.js applications.',
      content: 'Node.js has become the go-to choice for backend development. In this article, we\'ll cover essential best practices for building robust and scalable applications...',
      author: 'Adesh Mutkule',
      date: '2024-01-05',
      readTime: '8 min read',
      image: './images/nodejs.jpg',
      featured: true
    },
    {
      id: 4,
      title: 'Responsive Design Principles',
      category: 'design',
      excerpt: 'Master the principles of responsive web design to create websites that work on all devices.',
      content: 'Responsive design is no longer optional in today\'s multi-device world. Learn the key principles and techniques for creating websites that adapt seamlessly...',
      author: 'Adesh Mutkule',
      date: '2023-12-28',
      readTime: '6 min read',
      image: './images/responsive.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'JavaScript ES6+ Features You Should Know',
      category: 'javascript',
      excerpt: 'Explore the powerful features introduced in ES6 and later versions of JavaScript.',
      content: 'ES6 brought significant improvements to JavaScript. From arrow functions to destructuring, these features make your code more readable and maintainable...',
      author: 'Adesh Mutkule',
      date: '2023-12-20',
      readTime: '9 min read',
      image: './images/javascript.jpg',
      featured: false
    },

  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    // { id: 'react', name: 'React.js' },
    { id: 'javascript', name: 'JavaScript' },
    { id: 'css', name: 'CSS' },
    // { id: 'nodejs', name: 'Node.js' },
    { id: 'design', name: 'Design' },
    // { id: 'database', name: 'Database' }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center" data-aos="fade-up">
              <h1 className="page-title">
                My <span className="gradient-text">Blog</span>
              </h1>
              <p className="page-subtitle">
                Insights, tutorials, and thoughts on web development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="featured-post section-padding bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5" data-aos="fade-up">
              <h2 className="section-title">
                Featured <span className="gradient-text">Post</span>
              </h2>
            </div>
          </div>
          <div className="row">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <div className="col-12" key={post.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="featured-post-card">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="featured-post-image">
                        <img src={post.image} alt={post.title} />
                        <div className="featured-badge">
                          <i className="fas fa-star"></i> Featured
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="featured-post-content">
                        <div className="post-meta">
                          <span className="category">{categories.find(cat => cat.id === post.category)?.name}</span>
                          <span className="date">{formatDate(post.date)}</span>
                          <span className="read-time">{post.readTime}</span>
                        </div>
                        <h2 className="post-title">{post.title}</h2>
                        <p className="post-excerpt">{post.excerpt}</p>
                        <div className="post-author">
                          <i className="fas fa-user"></i>
                          <span>{post.author}</span>
                        </div>
                        <button className="btn btn-custom">
                          <i className="fas fa-book-open me-2"></i>Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="blog-posts section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5" data-aos="fade-up">
              <h2 className="section-title">
                Latest <span className="gradient-text">Posts</span>
              </h2>
              <p className="section-description">
                Explore my latest articles and tutorials on web development
              </p>
            </div>
          </div>

          {/* Category Filter */}
          <div className="row">
            <div className="col-12 text-center mb-5" data-aos="fade-up">
              <div className="category-filter">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="row">
            {filteredPosts.filter(post => !post.featured).map((post, index) => (
              <div className="col-lg-6 col-xl-4 mb-4" key={post.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="blog-post-card">
                  <div className="post-image">
                    <img src={post.image} alt={post.title} />
                    <div className="category-badge">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </div>
                  </div>
                  <div className="post-content">
                    <div className="post-meta">
                      <span className="date">
                        <i className="fas fa-calendar"></i>
                        {formatDate(post.date)}
                      </span>
                      <span className="read-time">
                        <i className="fas fa-clock"></i>
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-excerpt">{post.excerpt}</p>
                    <div className="post-footer">
                      <div className="post-author">
                        <i className="fas fa-user"></i>
                        <span>{post.author}</span>
                      </div>
                      <button className="read-more-btn">
                        Read More <i className="fas fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section section-padding bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center" data-aos="fade-up">
              <h2 className="newsletter-title">Stay Updated</h2>
              <p className="newsletter-description">
                Subscribe to my newsletter for the latest articles and web development tips
              </p>
              <div className="newsletter-form">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email address"
                    aria-label="Email address"
                  />
                  <button className="btn btn-custom" type="button">
                    <i className="fas fa-paper-plane me-2"></i>Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog; 