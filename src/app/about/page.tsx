export const metadata = {
  title: "About AK Overseas – Travel, Visa & Import-Export Experts",
  description:
    "Learn about AK Overseas, our journey, mission, and commitment to providing reliable visa services, travel planning, passport assistance, and import-export documentation support.",
};


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
              <li className="navitem"><a href="tel:+919205049004">+91-92050 49004</a></li>
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
              <p>
                Welcome to <b>AK Overseas</b>, your trusted partner for travel, visas, and
                international import–export support. What started as a simple travel assistance
                desk has grown into a brand known for reliability, transparency, and end-to-end guidance.
              </p>

              <p>
                Over time, AK Overseas has expanded into a comprehensive service provider—offering
                <a className="mark" href="/#contact">Visa Services</a>,
                <a className="mark" href="/#contact">Flight Tickets</a>,
                <a className="mark" href="/#contact">Travel Insurance</a>,
                holiday packages, passport assistance, and now
                <a className="mark" href="/#contact">Import & Export Services</a> including documentation, customs
                clearance, DGFT support, logistics planning, and shipment coordination.
              </p>

              <p>
                Our dedicated team ensures smooth processing—whether you are planning an international
                trip or handling business shipments. With AK Overseas, you get clear guidance, honest
                communication, and complete support from start to finish.
              </p>
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
