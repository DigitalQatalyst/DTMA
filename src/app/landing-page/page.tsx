import React from "react";
import HeroSection from "@/components/hero-area/hero-section-landingPage";
import CategoriesSection from "@/components/categories-landingPage/categories"; 
import FeaturedCoursesSection from "@/components/courses/featured-courses";
import TestimonialSection from "@/components/testimonials/testimonial";
import CTASection from "@/components/cta/cta-landingPage";
import Footer from "@/components/footer/footer-landingPage";

const LandingPage = () => {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <FeaturedCoursesSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default LandingPage;
