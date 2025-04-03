// components/cta/cta-section.tsx
import React from "react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="cta-section py-5 text-center text-white" 
    >
      <div className="container">
        <h2 className="display-4 mb-2">Stay Ahead in Digital <span style={{ color: "#008080" }}>Transformation</span></h2>
        <img
            src="/assets/img/icon/line-longer.svg"
            alt="line Icon"
            style={{ marginLeft: "30rem", marginTop: "-3rem" }}
          />
        <p style={{color: "#636366", marginBottom: "3rem"}}>
        Get expert insights, AI trends & career-boosting tips – straight to your inbox!
        </p>
          <div className="subscription-form mt-4" style={{ width: "80%", margin: "0 auto" }}>
            <div className="input-group mb-3" style={{ borderRadius: '50px', display:"flex", justifyContent:"center"}}>
            <img
                  src="/assets/img/icon/meassage.svg"
                  alt="line Icon"
                  style={{ marginRight: "-3rem", zIndex: "3"}}
                />
              <input
                type="email"
                // className="form-control"
                placeholder="Enter your email address"
                style={{ borderRadius: '50px', color: "#636366", width: "40rem", paddingLeft: "3.5rem",  border: '2px solid #DBDADE'}}
              />
              <button className="btn mt-2 mb-2 text-white" type="button" id="button-addon2" style={{ borderRadius: '50px', backgroundColor:"#008080", marginLeft: "-9rem", padding: "5px", fontSize: "16px"}}>
                Get Insights Now
              </button>
            </div>
            <div className="text-center"  style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: "3rem" }}>
              <p style={{color: "#008080"}}><img
                  src="/assets/img/icon/vector.svg"
                  alt="line Icon"/> Free weekly insights</p>
              <p style={{color: "#008080"}}><img
                  src="/assets/img/icon/vector.svg"
                  alt="line Icon"/> No spam</p>
              <p style={{color: "#008080"}}><img
                  src="/assets/img/icon/vector.svg"
                  alt="line Icon"/> Unsubscribe anytime</p>
            </div>
          </div>
      </div>
    </section>
  );
};

export default CTASection;
