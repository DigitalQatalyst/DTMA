// components/testimonials/testimonial-section.tsx
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO, TechCorp",
    quote:
      "DTMA helped transform our team with cutting-edge skills that are essential in today's digital world.",
    imgSrc: "/assets/img/testimonial1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Lead Analyst, DataTech",
    quote:
      "The course content was practical and relevant, providing deep insights into business management.",
    imgSrc: "/assets/img/testimonial2.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonials py-5 bg-light">
      <div className="container">
        <h2 className="display-4 mb-4 text-center">What Learners Say About DTMA</h2>
        <div className="row">
          {testimonials.map((testimonial) => (
            <div className="col-md-6 mb-4" key={testimonial.id}>
              <div className="testimonial-card p-4 bg-white shadow-sm rounded">
                <img
                  src={testimonial.imgSrc}
                  alt={testimonial.name}
                  className="testimonial-img rounded-circle mb-3"
                />
                <h5>{testimonial.name}</h5>
                <p>{testimonial.position}</p>
                <p className="testimonial-quote">{testimonial.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
