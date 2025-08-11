import React from "react";
import HeroSection from "@/components/hero-area/hero-section-landingPage";
import CategoriesSection from "@/components/categories-landingPage/categories";
import FeaturedCoursesSection from "@/components/courses/featured-courses";
import TestimonialSection from "@/components/testimonials/testimonial";
import CTASection from "@/components/cta/cta-landingPage";
import Footer from "@/components/footer/dtma";
import PreFooter from "@/components/footer/footer-landingPage";
import Navbar from "@/components/header/navbar/dtma-navbar";

const LandingPage = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <FeaturedCoursesSection />
      <TestimonialSection />
      <CTASection />
      <PreFooter />
      <Footer />
    </main>
  );
};

export default LandingPage;
