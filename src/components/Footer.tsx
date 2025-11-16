export default function Footer() {
  return (
    <footer
      id="kn-footer"
      className="kf"
      /* React style for CSS var: uses your existing .kf styles in /public/styles.css */
      style={{ ["--footer-bg" as any]: "url('/images/footer-bg.jpg')" }}
    >
      {/* Top strip */}
      <div className="kf-top kf-container">
        <p className="kf-strap">
          Approved Traveler Visa Applications. <a href="#">Get Your Visa</a>
        </p>
        <p className="kf-help">
          <i className="fa-solid fa-comments"></i>
          Have Question? <strong><a href="tel:+919205049004">Free +91 92050 49004</a></strong>
        </p>
      </div>

      <hr className="kf-rule" />

      <div className="kf-grid kf-container">
        {/* About */}
        <div className="kf-col kf-about">
          <h4 className="kf-title">About Company</h4>
          <p>
            Welcome to <strong>AK Overseas</strong>, your trusted partner in the world of travel
            and visas. With a commitment to excellence and customer satisfaction, we have been
            serving travelers’ needs for years.
          </p>

          <div className="kf-social">
            <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f" style={{ color: "black" }} /></a>
            <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram" style={{ color: "black" }} /></a>
            <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube" style={{ color: "black" }} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="kf-col">
          <h4 className="kf-title">Quick Links</h4>
          <ul className="kf-links">
            <li><a href="/#hero">Home</a></li>
            <li><a href="/#whatwedo">Company</a></li>
            <li><a href="/#services">Our Services</a></li>
            <li><a href="/#services">Visa Services</a></li>
            <li><a href="/#reviews">Testimonials</a></li>
            <li><a href="/#contact-section">Contact Us</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="kf-col">
          <h4 className="kf-title">Services</h4>
          <ul className="kf-links">
            <li><a href="/#services">Visa Services</a></li>
            <li><a href="/#services">Holiday Packages</a></li>
            <li><a href="/#services">Flight Ticket</a></li>
            <li><a href="/#services">Hotel Booking</a></li>
            <li><a href="/#services">Travel Insurance</a></li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div className="kf-col">
          <h4 className="kf-title">Get In Touch</h4>

          <div className="kf-line">
            <span className="kf-ico"><i className="fa-solid fa-envelope"></i></span>
            <div><a href="mailto:info@akoverseas.co.in">info@akoverseas.co.in</a></div>
          </div>

          <div className="kf-line">
            <span className="kf-ico"><i className="fa-solid fa-phone"></i></span>
            <div>
              <a href="tel:+919205049004">+91 92050 49004</a><br />
            </div>
          </div>

          <div className="kf-line">
            <span className="kf-ico"><i className="fa-solid fa-location-dot"></i></span>
            <address>
              A-2/22, Dayalpur Colony, Shahdara, East Delhi, Delhi, 110094
            </address>
          </div>
        </div>
      </div>

      <div className="kf-bottom">
        © All Copyright 2024 by <strong>AK Overseas</strong> | All Rights Reserved
      </div>
    </footer>
  );
}
