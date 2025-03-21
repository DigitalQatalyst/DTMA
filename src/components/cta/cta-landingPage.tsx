// components/cta/cta-section.tsx
import React from "react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="cta-section py-5 text-center text-white" style={{ backgroundColor: "rgb(0, 169, 165)" }}>
      <div className="container">
        <h2 className="display-4 mb-3">Stay Ahead in Digital Transformation</h2>
        <p className="lead mb-4">
          Join thousands of learners who are shaping the future of digital transformation.
        </p>
        <Link href="/contact" className="btn btn-light btn-lg">
          Get Started Today
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
