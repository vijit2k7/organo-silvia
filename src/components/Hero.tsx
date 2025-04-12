
import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-coffee-light">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-dark/70 to-coffee-dark/50 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Organic Coffee Beans" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container-custom relative z-20 text-center px-4">
        <h1 className="h1 text-white mb-6 animate-fade-in">Pure Organic Coffee</h1>
        <div className="mx-auto w-20 h-1 bg-gold mb-6"></div>
        <p className="text-white text-xl md:text-2xl max-w-2xl mx-auto mb-8 animate-fade-in">
          Handcrafted organic coffee for those who appreciate quality and sustainability.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#products" className="btn-primary animate-fade-in">
            Explore Products
          </a>
          <a href="#about" className="btn-secondary bg-transparent border-white text-white hover:bg-white/20 animate-fade-in">
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
