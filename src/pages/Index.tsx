
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import OurStory from '../components/OurStory';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const animateElements = document.querySelectorAll('.animate-on-scroll');
      
      animateElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (elementPosition.top < windowHeight * 0.8) {
          element.classList.add('animate');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check in case elements are in view when page loads
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.title = "OrganoSilvia - Premium Organic Coffee";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        <OurStory />
        <Features />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
