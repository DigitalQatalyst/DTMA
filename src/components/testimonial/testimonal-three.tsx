"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    appendDots: dots => (
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
    customPaging: i => (
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
        <section style={styles.testimonialSection}>
            <div style={styles.container}>
                <h4 style={{ fontSize: '28px', fontWeight: '700', color: '#333', marginBottom: '20px', fontFamily: 'sans-serif' }}>What Our Learners Say</h4>

                <h5 style={{
                    fontSize: '18px', fontWeight: '500', color: '#666', marginBottom: '60px', fontFamily: 'sans-serif'
                }} >
                    Don’t just take our words - see how DTMA has empowered professionals like you:
                </h5>

                <Slider {...testi_slider_opt} className="custom-slick-dots">
                    {testimonial_three_data.map((item) => ( // <-- Using testimonial_three_data
                        <div key={item.id} style={styles.slideWrapper}>
                            <div style={styles.testimonialItem}>
                                {/* Removed backgroundColor from avatarBlock as avatarBgColor is gone */}
                                <div style={styles.avatarBlock}>
                                    <Image
                                        src={item.avatar}
                                        alt={item.name}
                                        width={140}
                                        height={140}
                                        style={styles.avatar}
                                    />
                                </div>
                                <div style={styles.testimonialContent}>
                                    <div style={styles.rating}>
                                        {[...Array(item.rating)].map((_, index) => (
                                            <i key={index} className="fa-solid fa-star" style={styles.star}></i>
                                        ))}
                                    </div>
                                    <p style={styles.testimonialText}>{item.testimonial}</p>
                                    <div style={styles.metadata}>
                                        <h4 style={styles.name}>{item.name}</h4>
                                        <span style={styles.company}>{item.company}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section >
    );
}

// Styles for the component - Retained as inline styles in this file
const styles = {
    testimonialSection: {
        paddingTop: '60px',
        paddingBottom: '120px',
        textAlign: 'center',
        backgroundColor: '#FFFFFF',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
    },


    slideWrapper: {
        padding: '0 15px',
        outline: 'none',
        boxSizing: 'border-box'
    },
    testimonialItem: {
        display: 'flex',
        flexDirection: 'row', // Flexed in one row
        alignItems: 'flex-start',
        gap: '30px',
        textAlign: 'left',
    },
    avatarBlock: {
        flexShrink: 0,
        width: '160px',
        height: '160px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        // backgroundColor: item.avatarBgColor was here, now removed
    },
    avatar: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '0px',
    },
    testimonialContent: {
        flexGrow: 1,
        padding: '0',
        position: 'relative',
    },
    rating: {
        display: 'flex',
        gap: '5px',
        marginBottom: '10px',
    },
    star: {
        color: '#008080', // Changed to #008080 as per the fill color you specified earlier
        fontSize: '16px',
    },
    testimonialText: {
        fontSize: '16px',
        color: '#555',
        lineHeight: '1.6',
        marginBottom: '15px',
    },
    metadata: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '10px',
    },
    name: {
        fontSize: '18px',
        fontWeight: '700',
        color: '#333',
        margin: '0',
    },
    company: {
        fontSize: '15px',
        fontWeight: '500',
        color: '#008080',
        textDecoration: 'none',
    },
};