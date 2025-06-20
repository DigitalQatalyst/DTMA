"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactNode } from 'react';

// Assuming these are your actual dot images for active and inactive states
import ellipse_active_dot from "@/assets/img/testimonial/Ellipse 55.svg"; // Active dot image (teal/green)
import ellipse_inactive_dot from "@/assets/img/testimonial/Ellipse 56.svg"; // Inactive dot image (grey)

// Import the testimonial data from your new data file
import { testimonial_three_data } from "@/data/testimonial-data";


// Slider options
const testi_slider_opt = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 testimonials side-by-side
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
    // Custom dots styling - Retained inline styles as per request
    appendDots: (dots: ReactNode) => (
        <div style={{
            position: "absolute",
            bottom: "-60px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "40px"
        }}>
            <ul style={{ margin: "0px", padding: "0px", display: "flex", gap: "10px" }}> {dots} </ul>
        </div>
    ),
    customPaging: (i: number) => (
        // Render both images, CSS will control visibility and hover effects
        <div className="custom-dot-wrapper">
            <Image
                src={ellipse_inactive_dot}
                alt={`dot ${i + 1}`}
                width={12}
                height={12}
                className="dot-image dot-inactive"
            />
            <Image
                src={ellipse_active_dot}
                alt={`dot ${i + 1} active`}
                width={12}
                height={12}
                className="dot-image dot-active"
            />
        </div>
    )
};

export default function TestimonialSection() {
    return (
        <section className="testimonial-section">
            <div className="testimonial-container">
                <h4 className="testimonial-heading">What Our Learners Say</h4>

                <h5 className="testimonial-subheading">
                    Don’t just take our words - see how DTMA has empowered professionals like you:
                </h5>

                <Slider {...testi_slider_opt} className="custom-slick-dots">
                    {testimonial_three_data.map((item) => ( // <-- Using testimonial_three_data
                        <div key={item.id} className="slide-wrapper">
                            <div className="testimonial-item">
                                <div className="avatar-block">
                                    <Image
                                        src={item.avatar}
                                        alt={item.name}
                                        width={140}
                                        height={140}
                                        className="avatar"
                                    />
                                </div>
                                <div className="testimonial-content">
                                    <div className="rating">
                                        {[...Array(item.rating)].map((_, index) => (
                                            <i key={index} className="fa-solid fa-star star"></i>
                                        ))}
                                    </div>
                                    <p className="testimonial-text">{item.testimonial}</p>
                                    <div className="metadata">
                                        <h4 className="name">{item.name}</h4>
                                        <span className="company">{item.company}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}
