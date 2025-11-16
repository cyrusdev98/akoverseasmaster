export default function AboutPage() {
  return (
    <main className="about-page">
      {/* Chat FAB (same as home) */}
      <div id="chat-fab" className="chat-fab">
        <button id="fabToggle" className="fab-btn" aria-expanded="false" aria-controls="fabMenu" aria-label="Open chat options">
          <i className="fa-solid fa-comments" />
        </button>
        <div id="fabMenu" className="fab-menu" role="menu" aria-label="Chat options">
          <a className="fab-item fab-whatsapp" href="https://wa.me/919999999999?text=Hi%20KN%20Overseas%2C%20I%27d%20like%20to%20know%20more." target="_blank" rel="noopener">
            <i className="fa-brands fa-whatsapp" />
          </a>
          <a className="fab-item fab-phone" href="tel:+919999999999"><i className="fa-solid fa-phone" /></a>
          <a className="fab-item fab-mail" href="mailto:info@knoverseas.com"><i className="fa-solid fa-envelope" /></a>
        </div>
      </div>

      {/* keep id="hero" — we’ll scope it via .about-page */}
      <section
        id="hero"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,1), rgba(0,0,0,.5)), url('/images/about-hero.jpg')" } as React.CSSProperties}
      >
        <div id="hero-content">
          <nav className="scrolled">
            <div id="logo"><h1>AK Overseas</h1></div>
            <button className="nav-toggle" aria-label="Toggle menu" aria-controls="navitems" aria-expanded={false}>
              <i className="fa-solid fa-bars" /><i className="fa-solid fa-xmark" />
            </button>
            <ul id="navitems">
              <li className="navitem"><a href="/">Home</a></li>
              <li className="navitem"><a href="/#services">Our Services</a></li>
              <li className="navitem"><a href="/about">About Us</a></li>
              <li className="navitem"><a href="/#reviews">Testimonials</a></li>
              <li className="navitem"><a href="/#contact">Contact Us</a></li>
            </ul>
          </nav>
          <div id="hero-text"><h1>About Us</h1></div>
        </div>
      </section>

      <section id="about">
        <div className="about-wrap">
          <div className="about-grid">
            <div className="about-text">
              <h2 className="about-title">About AK Overseas</h2>
              <p>Welcome to <b>AK Overseas</b>, your trusted partner in the world of travel and visas…</p>
              <p>Over time, AK Overseas has grown into a comprehensive brand—recognized for <a className="mark" href="#">Visa Services</a>, <a className="mark" href="#">Flight Tickets</a>, <a className="mark" href="#">Travel Insurance</a>, holiday packages, passport assistance, and many more.</p>
              <p>Our dedicated team is passionate about assisting you at every step of your travel journey.</p>
              <a href="/#contact" className="about-btn">Apply Now</a>
              <span className="about-doodle" />
            </div>
            <figure className="about-image">
              <img src="/images/about.png" alt="Travel items on a world map" />
            </figure>
          </div>
        </div>
      </section>

      <section id="founder">
        <div className="founder-wrap">
          <div className="founder-grid">
            <figure className="founder-photo"><img src="/images/founder.jpg" alt="Founder portrait" /></figure>
            <div className="founder-text">
              <h2 className="founder-title">Founder's Talk</h2>
              <p className="founder-quote">My journey began with a dead-end job and ended with me climbing new heights as a startup founder.</p>
              <p className="founder-quote">From a career as a seasoned travel agent to earning my IATA credential, I stepped into entrepreneurship…</p>
              <p className="founder-sign">Founder's Name – Akash Kumar</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
