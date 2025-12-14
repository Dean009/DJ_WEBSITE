import React from 'react'

export default function App() {
  return (
    <div className="site-card">
      <header>
        <div className="nav-panel">
          <nav className="navbar">
            <div className="container">
              <a className="navbar-brand" href="#hero">
                <img src={import.meta.env.BASE_URL + 'logo.jpeg'} alt="DJ Logo" height="40" className="d-inline-block align-text-top me-2" />
                DJ Demo
              </a>
              <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="hero">
          <div className="container-fluid hero-container py-5">
            <div className="row mb-4">
              <div className="col-12 hero-logo d-flex align-items-center justify-content-center">
                <img src={import.meta.env.BASE_URL + 'logo.svg'} alt="DJ Logo" className="hero-logo-img" />
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6 hero-left">
                <h1 className="display-4 mb-3">Lorem Ipsum Magnificus,
                  <br />Aeterna Lux</h1>
                <p className="lead text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.</p>
                <a href="#contact" className="btn btn-primary btn-lg cta-btn">Contact Us</a>
              </div>
              <div className="col-lg-6 position-relative">
                <div className="stats d-flex justify-content-end mb-3">
                  <div className="stat text-end me-4">
                    <div className="stat-value">15+</div>
                    <div className="stat-label text-muted">Years Of Experience</div>
                  </div>
                  <div className="stat text-end me-4">
                    <div className="stat-value">100+</div>
                    <div className="stat-label text-muted">Projects Delivered</div>
                  </div>
                  <div className="stat text-end">
                    <div className="stat-value">1%</div>
                    <div className="stat-label text-muted">Client's Satisfaction</div>
                  </div>
                </div>

                <div className="hero-media">
                  <img src="https://via.placeholder.com/800x480" alt="project" className="hero-image" />
                </div>

                <div className="service-cards d-none d-md-flex">
                  <div className="card orange-card me-3">
                    <div className="card-body">
                      <h6 className="card-title">Residential Construction</h6>
                      <p className="card-text">We offer comprehensive residential construction services, from building new homes to remodeling projects.</p>
                    </div>
                  </div>
                  <div className="card orange-card">
                    <div className="card-body">
                      <h6 className="card-title">Commercial Construction</h6>
                      <p className="card-text">We provide expertise in constructing commercial spaces such as offices, retail outlets, and restaurants.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="testimonials" className="py-5">
          <div className="container panel-up">
            <div className="row">
              <div className="col-12">
                <div className="testimonial-box">
                  <div className="text-center mb-3">
                    <h3 className="mb-2">What Clients Say</h3>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit — testimonials lorem ipsum.</p>
                  </div>

                  <div className="row">
                    <div className="col-md-4">
                      <div className="card testimonial-card mb-3">
                        <div className="card-body">
                          <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, excepturi."</p>
                          <div className="fw-bold">— Marcus A.</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card testimonial-card mb-3">
                        <div className="card-body">
                          <p className="card-text">"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                          <div className="fw-bold">— Julia R.</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card testimonial-card mb-3">
                        <div className="card-body">
                          <p className="card-text">"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."</p>
                          <div className="fw-bold">— Anton P.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-5">
          <div className="container">
            <h2 className="mb-4">About</h2>
            <div className="row">
              <div className="col-md-6">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                <p>Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>
              </div>
              <div className="col-md-6">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Our Mission</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-5 bg-light">
          <div className="container">
            <h2 className="mb-4">Services</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Service One</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quidem.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Service Two</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quidem.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Service Three</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quidem.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-5">
          <div className="container">
            <h2 className="mb-4">Portfolio</h2>
            <div className="row g-4">
              <div className="col-sm-6 col-lg-4">
                <div className="card h-100">
                  <img src="https://via.placeholder.com/600x400" className="card-img-top" alt="project" />
                  <div className="card-body">
                    <h5 className="card-title">Project A</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="card h-100">
                  <img src="https://via.placeholder.com/600x400" className="card-img-top" alt="project" />
                  <div className="card-body">
                    <h5 className="card-title">Project B</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="card h-100">
                  <img src="https://via.placeholder.com/600x400" className="card-img-top" alt="project" />
                  <div className="card-body">
                    <h5 className="card-title">Project C</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-5 bg-dark text-light">
          <div className="container">
            <h2 className="mb-4">Contact</h2>
            <div className="row">
              <div className="col-md-6">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
                <ul className="list-unstyled">
                  <li><strong>Email:</strong> info@example.com</li>
                  <li><strong>Phone:</strong> (123) 456-7890</li>
                </ul>
              </div>
              <div className="col-md-6">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Your name" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="you@example.com" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea className="form-control" rows="3" placeholder="Write a message..."></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Send</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-3 bg-secondary text-light">
        <div className="container text-center small">© {new Date().getFullYear()} DJ Demo — Lorem ipsum dolor sit amet</div>
      </footer>
    </div>
  )
}
