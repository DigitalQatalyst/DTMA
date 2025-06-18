import React from "react";
import "./styles.scss";

const ContactUsSection = () => {
    return (
        <section className="quick-help-section">
            <div className="container">
                <h2 className="quick-help-title">Contact Us</h2>
                <p className="quick-help-subtitle">
                    Everything to succeed with your Digital Transformation & Technology Initiative
                </p>
                <div className="quick-help-cards">

                    <div className="quick-help-card">
                        <div className="quick-help-icon">

                            <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.5 23.5v3a2 2 0 0 1-2 2A17 17 0 0 1 7.5 10.5a2 2 0 0 1 2-2h3a1 1 0 0 1 1 0.76l1.1 4.4a1 1 0 0 1-0.29 0.98l-2.2 2.2a13.01 13.01 0 0 0 6.5 6.5l2.2-2.2a1 1 0 0 1 0.98-0.29l4.4 1.1a1 1 0 0 1 0.76 1z" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="quick-help-card-title">Phone Support</div>
                        <div className="quick-help-card-desc">
                            Available Mon-Fri 9am - 6pm EST
                        </div>
                        <a className="quick-help-link" href="tel:+1932567342">+1 (932) 567 342</a>
                    </div>


                    <div className="quick-help-card">
                        <div className="quick-help-icon">

                            <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="5" y="9" width="26" height="18" rx="3" stroke="#059669" strokeWidth="2" />
                                <path d="M7 11l11 9 11-9" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="quick-help-card-title">Email Support</div>
                        <div className="quick-help-card-desc">
                            We'll Respond Within 24 Hours
                        </div>
                        <a className="quick-help-link" href="mailto:support@example.com">support@example.com</a>
                    </div>


                    <div className="quick-help-card">
                        <div className="quick-help-icon">

                            <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18" cy="18" r="15" stroke="#059669" strokeWidth="2" />
                                <path d="M9 22v-2a9 9 0 0 1 18 0v2" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
                                <rect x="8" y="22" width="4" height="6" rx="2" stroke="#059669" strokeWidth="2" />
                                <rect x="24" y="22" width="4" height="6" rx="2" stroke="#059669" strokeWidth="2" />
                            </svg>
                        </div>
                        <div className="quick-help-card-title">Live Chat</div>
                        <div className="quick-help-card-desc">
                            Chat with Our Support Team
                        </div>
                        <a className="quick-help-link" href="#">Start Chat</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUsSection;
