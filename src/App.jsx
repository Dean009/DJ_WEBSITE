import React from 'react'

export default function App() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#hero">
              <img src="/logo.jpeg" alt="DJ Logo" height="40" className="d-inline-block align-text-top me-2" />
              DJ Demo
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navMenu">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero d-flex align-items-center text-light bg-primary">
          <div className="container text-center">
            <img src="/logo.jpeg" alt="DJ Logo" className="logo-main mb-4" />
            <h1 className="display-4">Lorem ipsum dolor sit amet</h1>
            <p className="lead">Consectetur adipiscing elit — sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>
              <a href="#about" className="btn btn-outline-light btn-lg">Learn more</a>
            </p>
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
    </>
  )
}
