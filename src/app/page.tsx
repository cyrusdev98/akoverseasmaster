export default function HomePage() {
  return (
    <>
      {/* FLOATING CHAT FAB */}
      <div id="chat-fab" className="chat-fab">
        <button id="fabToggle" className="fab-btn" aria-expanded="false" aria-controls="fabMenu" aria-label="Open chat options">
          <i className="fa-solid fa-comments" />
        </button>
        <div id="fabMenu" className="fab-menu" role="menu" aria-label="Chat options">
          <a className="fab-item fab-whatsapp" href="https://wa.me/919205049004?text=Hi%20AK%20Overseas%2C%20I%27d%20like%20to%20know%20more." target="_blank" rel="noopener" role="menuitem" aria-label="WhatsApp chat">
            <i className="fa-brands fa-whatsapp" />
          </a>
          <a className="fab-item fab-phone" href="tel:+919205049004" role="menuitem" aria-label="Call us">
            <i className="fa-solid fa-phone" />
          </a>
          <a className="fab-item fab-mail" href="mailto:info@akoverseas.com" role="menuitem" aria-label="Email us">
            <i className="fa-solid fa-envelope" />
          </a>
        </div>
      </div>

      {/* HERO */}
      <section id="hero">
        <div className="bg-fixed-carousel bg-hero" aria-hidden="true">
          <div className="slide" style={{ backgroundImage: "url('/images/hero3.jpg')" }} />
          <div className="slide" style={{ backgroundImage: "url('/images/hero2.jpg')" }} />
          <div className="slide" style={{ backgroundImage: "url('/images/hero1.jpg')" }} />
        </div>

        <div id="hero-content">
          <nav className="scrolled">
            <div id="logo"><h1>AK Overseas</h1></div>
            <button className="nav-toggle" aria-label="Toggle menu" aria-controls="navitems" aria-expanded={false}>
              <i className="fa-solid fa-bars" />
              <i className="fa-solid fa-xmark" />
            </button>
            <ul id="navitems">
              <li className="navitem"><a href="#">Home</a></li>
              <li className="navitem"><a href="#services">Our Services</a></li>
              <li className="navitem"><a href="/about">About Us</a></li>
              <li className="navitem"><a href="#reviews">Testimonials</a></li>
              <li className="navitem"><a href="#contact">Contact Us</a></li>
              {/* <li className="navitem"><a href="mailto:info@akoverseas.co.in">info@akoverseas.co.in</a></li> */}
              <li className="navitem"><a href="tel:+919205049004">+91-92050 49004</a></li>
            </ul>
          </nav>

          <div id="hero-text">
            <h1>Travel Beyond Expectations</h1>
            <h2>Dream. Decide. Depart.</h2>
            <a href="#contact">
              <button className="btn" id="hero-btn">
                <i className="fa-solid fa-phone-volume" /> Book Appointment
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="whatwedo">
        <div id="overlay-cards">
          <div className="ocard">
            <h2><i className="fa-solid fa-people-group" /> Understand</h2>
            <p>We aim to understand the reason for your travel, your profession, and the travel history of all individuals participating in your trip.</p>
          </div>
          <div className="ocard">
            <h2><i className="fa-solid fa-headset" /> Guide and Support</h2>
            <p>For your travel purpose, we provide guidance throughout the Visa process, help with necessary documents, and offer support for any questions or clarifications.</p>
          </div>
          <div className="ocard">
            <h2><i className="fa-solid fa-list-check" /> Process</h2>
            <p>Once your documents are received, we initiate the submission process, including completing forms online or offline, scheduling appointments, and providing support with the consulate or online.</p>
          </div>
        </div>

        <div id="whatwetext">
          <div id="offer-main">
            <h2>What we Offer</h2>
            <p>Welcome to AK Overseas, your reliable partner in travel and visa solutions. Dedicated to delivering excellence and ensuring customer satisfaction, we have proudly supported travelers for many years.</p>
            <p>Our story started with a mission to make the visa process straightforward and accessible, helping people explore the world with ease. Today, Newland Travel is recognized globally for its expertise in visa processing, passport services, and tailor-made travel experiences.</p>
            <h2>Our Services</h2>
            <ul id="service-list">
              <li>✅ Visa Assistance</li>
              <li>✅ Vacation Packages</li>
              <li>✅ Study Abroad Guidance</li>
              <li>✅ Flight Booking</li>
              <li>✅ Travel Insurance</li>
            </ul>
          </div>
          <img src="/images/why-image.jpg" alt="What we Offer" id="why-image" />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="has-fixed-bg svc-services">
        <div
          className="fixed-bg"
          style={
            {
              ["--bg" as any]: "url('/images/service-img.jpg')",
              ["--overlay" as any]: "linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,1))",
            } as React.CSSProperties
          }
        />
        <div id="service-title"><h2>Our Services</h2></div>

        <div className="svc-grid blur-bg">
          <article className="svc-card" data-title="Visa Services">
            <img src="/images/visa.png" alt="Visa Services" className="svc-thumb" />
            <div className="svc-body">
              <h3 className="svc-name">Visa Services</h3>
              <p className="svc-snippet">Tourist, business, study visas for USA, Canada, Australia, Schengen & more.</p>
              <a href="#" className="svc-more" data-target="#full-visa">View more</a>
            </div>
          </article>

          <article className="svc-card" data-title="Holiday Packages">
            <img src="/images/holiday.jpg" alt="Holiday Packages" className="svc-thumb" />
            <div className="svc-body">
              <h3 className="svc-name">Holiday Packages</h3>
              <p className="svc-snippet">Custom trips: beaches, cities, adventures—flights & stays arranged.</p>
              <a href="#" className="svc-more" data-target="#full-holiday">View more</a>
            </div>
          </article>

          <article className="svc-card" data-title="Travel Insurance">
            <img src="/images/insurance.jpg" alt="Travel Insurance" className="svc-thumb" />
            <div className="svc-body">
              <h3 className="svc-name">Travel Insurance</h3>
              <p className="svc-snippet">Cover cancellations, baggage, medical emergencies with 24/7 help.</p>
              <a href="#" className="svc-more" data-target="#full-insurance">View more</a>
            </div>
          </article>

          <article className="svc-card" data-title="Flight Tickets">
            <img src="/images/flight.jpg" alt="Flight Tickets" className="svc-thumb" />
            <div className="svc-body">
              <h3 className="svc-name">Flight Tickets</h3>
              <p className="svc-snippet">Great routes & deals—one-way, round-trip, or multi-city with support.</p>
              <a href="#" className="svc-more" data-target="#full-flight">View more</a>
            </div>
          </article>

          <article className="svc-card" data-title="Hotel Booking">
            <img src="/images/hotel.jpg" alt="Hotel Booking" className="svc-thumb" />
            <div className="svc-body">
              <h3 className="svc-name">Hotel Booking</h3>
              <p className="svc-snippet">Luxury to budget—transparent reviews and secure reservations.</p>
              <a href="#" className="svc-more" data-target="#full-hotel">View more</a>
            </div>
          </article>
        </div>

        {/* Hidden long texts used by modal */}
        <div id="full-visa" className="svc-hidden" hidden>
          <p>At AK Overseas, we know obtaining the right visa opens the door to your international travels. Our visa services cover many destinations including the USA, Canada, Australia, China, New Zealand, Schengen countries, and more, tailored for tourism, business, education, and beyond.</p>
          <p>Our experienced team offers personalized support to ensure your application meets all requirements and is processed efficiently and accurately. From initial questions to form submission and follow-up, we guide you every step of the way, making visa acquisition simple and reliable.</p>
          <p>With AK Overseas, you can trust in professional visa services designed to help you start your global journey with confidence and ease.</p>
        </div>

        <div id="full-holiday" className="svc-hidden" hidden>
          <p>At AK Overseas, we create memorable holiday experiences tailored to your preferences while ensuring comfort and enjoyment throughout your trip. We offer a wide selection of destinations across the globe, from peaceful beaches to vibrant cities.</p>
          <p>Our travel experts plan every detail meticulously, providing seamless and hassle-free service. We include everything from flights and accommodations to local tours and dining recommendations, all at competitive prices.</p>
          <p>With AK Overseas, embark on your ideal vacation with confidence, knowing you are supported by a team dedicated to making your travel dreams come true.</p>
        </div>

        <div id="full-insurance" className="svc-hidden" hidden>
          <p>At AK Overseas, we recognize that unforeseen events can interrupt your travel plans. That’s why we provide comprehensive travel insurance to give you peace of mind throughout your journey.</p>
          <p>Our insurance offers extensive coverage for scenarios like lost baggage, medical issues, and trip interruptions. With 24/7 assistance, support is always available whenever and wherever you need it.</p>
          <p>Choosing AK Overseas Travel Insurance means investing in a secure and worry-free travel experience.</p>
        </div>

        <div id="full-flight" className="svc-hidden" hidden>
          <p>At AK Overseas, we know that smooth flight bookings are the foundation of hassle-free travel. Our flight ticket service is designed to make your journey comfortable and straightforward from the start.</p>
          <p>With flexible options for one-way, round-trip, or multi-city bookings, you can tailor your itinerary to fit your travel plans perfectly.</p>
          <p>Choosing AK Overseas means choosing convenience, reliability, and excellent service for your flight bookings.</p>
        </div>

        <div id="full-hotel" className="svc-hidden" hidden>
          <p>We offer a wide range of lodging options to fit every traveler’s needs, from luxury resorts to affordable hotels worldwide.</p>
          <p>Enjoy competitive pricing and transparent reviews to help you make informed decisions. Your bookings are secure, and your personal information is protected.</p>
          <p>Choose AK Overseas for seamless hotel reservations that perfectly complement your travel.</p>
        </div>
      </section>

      {/* POPULAR DESTINATIONS */}
      <section id="popularc">
        <div id="popular-title"><h3>Most Popular Destinations</h3></div>
        <div className="pc-wrapper">
          <button className="pc-arrow prev" type="button" aria-label="Previous">
            <i className="fa-solid fa-angle-left" aria-hidden="true" />
          </button>

          <div className="pc-viewport">
            <div id="city-carousel" className="pc-track">
              {[
                ["dubai","Dubai"],["singapore","Singapore"],["bangkok","Bangkok"],["bali","Bali"],
                ["paris","Paris"],["london","London"],["rome","Rome"],["barcelona","Barcelona"],
                ["istanbul","Istanbul"],["amsterdam","Amsterdam"],["zurich","Zurich"],["tokyo","Tokyo"],
                ["seoul","Seoul"],["newyork","New York"],["sydney","Sydney"],["kualalumpur","Kuala Lumpur"]
              ].map(([img,label])=>(
                <div className="carousel-card" key={label}>
                  <img src={`/images/${img}.jpg`} alt={label} className="city-img" />
                  <p>{label}</p>
                </div>
              ))}
            </div>
          </div>

          <button className="pc-arrow next" type="button" aria-label="Next">
            <i className="fa-solid fa-angle-right" aria-hidden="true" />
          </button>
        </div>
      </section>

      {/* ABOUT KN */}
      <section id="about-kn">
        <div className="top-cards">
          <article className="info-card">
            <h3 className="info-title">Our Vision</h3>
            <p className="info-text">At <b>AK Overseas</b>, our vision is to be India’s most dependable travel & visa partner—a place where people feel informed, confident, and calm as their application moves forward.</p>
          </article>
          <article className="info-card">
            <h3 className="info-title">Our Mission</h3>
            <p className="info-text">We guide every client with clear steps, fast replies, and friendly support—so <b>AK Overseas</b> is your first choice for visas and travel planning, with fair, transparent pricing.</p>
          </article>
        </div>

        <div className="why-wrap">
          <div className="why-img"><img src="/images/why-choose-us.jpg" alt="Team assisting clients with visa documents" /></div>
          <div className="why-text">
            <h2 className="why-title">Why Choose Us for Your Visa & Travel Needs?</h2>
            <p className="why-intro">Planning international travel can be exciting—and confusing. <b>AK Overseas</b> keeps it simple. Our focused process and reliable timelines let you relax while we handle the details.</p>
            <ul className="points">
              <li><span className="tick" aria-hidden="true" /><div className="point-body"><b>Proven Expertise:</b> We’ve supported thousands of applicants—delivering memorable trips and solid results.</div></li>
              <li><span className="tick" aria-hidden="true" /><div className="point-body"><b>Tailored Plans:</b> Family, business, study, solo—we build itineraries that fit your goals and documents.</div></li>
              <li><span className="tick" aria-hidden="true" /><div className="point-body"><b>Visa Made Simple:</b> Clear checklists, appointment support, and document reviews reduce rework.</div></li>
              <li><span className="tick" aria-hidden="true" /><div className="point-body"><b>Responsive Team:</b> Quick answers on calls and chat, friendly updates at every step.</div></li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT (form wired by /public/app.js) */}
      <section id="contact">
        <div className="container">
          <p className="subheading">Contact With Us</p>
          <h2 className="heading">Feel Free to Get in Touch with us</h2>

          <form className="form" action="#" method="post">
            <div className="row">
              <input className="input" type="text" name="name" placeholder="Name" />
              <input className="input" type="email" name="email" placeholder="Email" />
            </div>
            <div className="row">
              <input className="input" type="tel" name="phone" placeholder="Phone Number" />
              <div className="select-wrap">
                <select className="select" name="service" aria-label="Select Services" defaultValue="">
                  <option value="" disabled>Select Services</option>
                  <option>Tour Packages</option>
                  <option>Flight Booking</option>
                  <option>Visa Assistance</option>
                  <option>Hotel Reservation</option>
                </select>
                <span className="arrow" />
              </div>
            </div>
            <textarea className="textarea" name="message" placeholder="Message" />
            <button className="button" type="submit">Send a Message</button>
          </form>
        </div>
      </section>

      {/* CONTACT CARDS + MAP */}
      <section id="contact-section">
        <div className="ct-container">
          <div className="ct-grid">
            <div className="ct-card">
              <span className="ct-icon"><i className="fa-solid fa-envelope-open-text" /></span>
              <h3>Write To Us</h3>
              <p><a href="mailto:info@akoverseas.co.in">info@akoverseas.co.in</a></p>
            </div>
            <div className="ct-card">
              <span className="ct-icon"><i className="fa-solid fa-location-dot" /></span>
              <h3>Visit Us</h3>
              <p>A-2/22, Dayalpur Colony, Shahdara, East Delhi, Delhi, 110094</p>
            </div>
            <div className="ct-card">
              <span className="ct-icon"><i className="fa-solid fa-phone" /></span>
              <h3>Call Us</h3>
              <p><a href="tel:+919205049004">+91 92050 49004</a><br /></p>
            </div>
          </div>
        </div>

        <div className="ct-map-wrap">
          <iframe
            className="ct-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94178.5662446353!2d77.20307670971829!3d28.69168341795276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb0f509c976f%3A0x9ec1dbe6a1f4fd3c!2sShahdara%2C%20Delhi!5e0!3m2!1sen!2sin!4v1763263679255!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            aria-label="AK Overseas, Delhi"
          />
          <div style={{ textAlign: "center", padding: "8px 0" }}>
            <a href="https://maps.app.goo.gl/vdy5t1aaszPAoScJA" target="_blank" rel="noopener">Open in Google Maps</a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews">
        <div className="reviews-head">
          <div className="stars-top" aria-hidden="true"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
          <p className="based-text">Based on Google Reviews</p>
          <div className="google-logo" aria-label="Google">
            <span className="g-b">G</span><span className="g-r">o</span><span className="g-y">o</span><span className="g-b">g</span><span className="g-g">l</span><span className="g-r">e</span>
          </div>
        </div>

        <div className="reviews-viewport" id="reviewsViewport">
          <ul className="reviews-track" id="reviewsTrack">
            {[
              ["I had a very smooth experience with AK Overseas. The team guided me clearly for my Schengen work visa and kept me updated at every step.","Sai Kumar Reddy (Andhra Pradesh)"],
              ["Thanks to AK Overseas for my Finland residence permit. Documents were checked thoroughly and I got approval in just 3 days.","Pranitha Chowdary (Telangana)"],
              ["Wonderful guidance for our family visas to Australia & Thailand. They even helped with address change in my child’s passport.","Ravi Teja (Andhra Pradesh)"],
              ["Got France visa exactly on the committed timeline. Transparent process and cooperative team at AK Overseas.","Shravani Goud (Telangana)"],
              ["My Canada study visa filing was stress-free. SOP, mock interviews and college shortlist were all on point.","Charan Kalyan (Andhra Pradesh)"],
              ["I approached them for UK business visa. Checklist was perfect and appointments well managed. Approved in first attempt!","Lavanya Reddy (Telangana)"],
              ["For my Dubai trip, they arranged visa, flights and hotel with zero last-minute issues. Very fair pricing.","Anil Kumar (Andhra Pradesh)"],
              ["Excellent support for my Schengen tourist visa. Quick responses and detailed document checks. Timelines respected.","Deepika Shetty (Telangana)"]
            ].map(([t,n],i)=>(
              <li className="review" key={i}>
                <figure className="review-wrap">
                  <div className="card">
                    <p className="text">{t}</p>
                    <div className="stars" aria-hidden="true">★★★★★</div>
                  </div>
                  <figcaption className="name">{n}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ONE shared modal for Services (keep only once in the page) */}
      <div id="svcModal" className="svc-modal" aria-hidden="true" role="dialog" aria-modal="true">
        <div className="svc-backdrop" data-close="1" />
        <div className="svc-dialog" role="document" aria-labelledby="svcModalTitle">
          <header className="svc-header">
            <h3 id="svcModalTitle" className="svc-modal-title">Title</h3>
            <button className="svc-close" aria-label="Close" title="Close">×</button>
          </header>
          <div className="svc-modal-body" />
        </div>
      </div>
    </>
  );
}
