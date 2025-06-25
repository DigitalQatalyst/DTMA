import React from "react";

const ContactSection = () => {
  return (
    <div className="contact-wrapper">
      {/* First Section: Still Have Questions */}
      <div className="contact-section">
        <h3 className="contact-title">Still have questions?</h3>
        <p className="contact-description">
          Can’t find the answer you’re looking for? Please contact our team.
        </p>
        <a href="/contact">
          <button className="contact-button">Get in touch with our team</button>
        </a>
      </div>

      {/* Second Section: Ready to take your digital skills to the next level? */}
      <div className="skills-section">
        <div className="item-1">
          <h3 className="skills-title">
            Ready to take your digital skills to the next level?
          </h3>
          <p className="skills-description">
            Explore our AI-powered, role-specific courses designed to help you
            learn flexibly, upskill efficiently, <br /> and lead digital
            transformation in your organization.
          </p>
        </div>
        <div>
          <a href="/course-with-filter">
            <button className="skills-button">Discover Courses Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
