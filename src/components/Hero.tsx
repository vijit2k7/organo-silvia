
import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-nature-dark/70 to-nature-dark/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1600857544200-b2f468e9dcfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Organic Products" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container-custom relative z-20 text-center px-4">
        <h1 className="h1 text-white mb-6 animate-fade-in">
          <span className="block">Pure</span>
          <span className="text-gradient bg-gradient-to-r from-white to-gold">Organic Products</span>
        </h1>
        <div className="mx-auto w-20 h-1 bg-gold mb-6"></div>
        <p className="text-white text-xl md:text-2xl max-w-2xl mx-auto mb-8 animate-fade-in">
          Handcrafted organic bath salts, soaps, and home essentials for those who appreciate quality and sustainability.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#products" className="btn-primary animate-fade-in group">
            <span className="relative z-10 group-hover:text-white">Explore Products</span>
          </a>
          <a href="#about" className="btn-secondary bg-transparent border-white text-white hover:bg-white/20 animate-fade-in">
            Our Story
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a href="#products" className="text-white opacity-80 hover:opacity-100 transition-opacity duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
