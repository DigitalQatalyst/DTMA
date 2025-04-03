=

const Footer = () => {
  return (
<section className="footer-section py-5" style={{ backgroundColor: "#f8f9fa" }}>
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-4">
      <img
                  src="/assets/img/icon/DTMA.svg"
                  alt="line Icon"
                  style={{ marginRight: "-3rem", zIndex: "3"}}
                />
        <p className="mb-4" style={{ color: "#6c757d", marginTop: "2rem" }}>
          Designed for professionals and organizations, <span color="#008080">DTMA</span> <br/> provides cutting-edge learning in AI, automation, and <br /> digital transformation, empowering a future-ready <br/> workforce.
        </p>
        <a href="/contact" className="btn" style={{backgroundColor: "#008080", color: "WHITE"}}>
          Contact Us <span>&#8594;</span>
        </a>
      </div>

      <div className="col-12 col-md-2" style={{marginLeft: "3rem"}}>
        <h5 style={{ color: "#4B465C" }}>Quick Links</h5>
        <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
          <li><a href="/courses" style={{ color: "#6c757d", textDecoration: "none" }}>Explore Courses</a></li>
          <li><a href="/resources" style={{ color: "#6c757d", textDecoration: "none" }}>Resources</a></li>
          <li><a href="/account" style={{ color: "#6c757d", textDecoration: "none" }}>Your Account</a></li>
        </ul>
      </div>

      <div className="col-12 col-md-2" style={{marginLeft: "3rem"}}>
        <h5 style={{ color: "#4B465C" }}>Get to Know Us</h5>
        <ul style={{ listStyleType: "none", paddingLeft: "0", lineHeight: "" }}>
          <li><a href="/about" style={{ color: "#6c757d", textDecoration: "none" }}>About DTMA</a></li>
          <li><a href="/updates" style={{ color: "#6c757d", textDecoration: "none" }}>Updates <span style={{ color: "white", backgroundColor: "#008080", borderRadius: "5px", padding: '5px', marginLeft: ".8rem" }}>New</span></a></li>
          <li><a href="/contact" style={{ color: "#6c757d", textDecoration: "none" }}>Contact Us</a></li>
        </ul>
      </div>
      <div className="col-12 col-md-2" style={{marginLeft: "3rem"}}>

        <h5 style={{ color: "#4B465C" }}>Legal</h5>
        <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
          <li><a href="/privacy-policy" style={{ color: "#6c757d", textDecoration: "none" }}>Privacy Policy</a></li>
          <li><a href="/cookie-policy" style={{ color: "#6c757d", textDecoration: "none" }}>Cookie Policy</a></li>
          <li><a href="/terms-of-service" style={{ color: "#6c757d", textDecoration: "none" }}>Terms of Service</a></li>
        </ul>
      </div>
    </div>
  </div>
</section>


    // <footer className="footer py-4 bg-dark text-white">
    //   <div className="container text-center">
    //     <p>&copy; 2025 DTMA. All rights reserved.</p>
    //   </div>
    // </footer>
  );
};

export default Footer;
