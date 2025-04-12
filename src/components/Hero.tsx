
import React from 'react';
import { ChevronDown, Leaf, Shield, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-nature-dark/80 to-teal-dark/70 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80" 
          alt="Organic Products" 
          className="w-full h-full object-cover scale-105 animate-scale"
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-5">
        <div className="absolute -top-4 left-1/4 transform -translate-x-1/2 w-72 h-72 rounded-full bg-teal-medium/20 blur-3xl animate-float"></div>
        <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 w-96 h-96 rounded-full bg-nature-dark/20 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 transform -translate-x-1/2 w-64 h-64 rounded-full bg-gold/20 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-20 text-center px-4">
        <div className="inline-block mb-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
          <div className="flex items-center gap-2">
            <Leaf size={16} className="text-white" />
            <span className="text-white text-sm font-medium">100% Organic Products</span>
          </div>
        </div>
        
        <h1 className="h1 text-white mb-6 animate-fade-in">
          <span className="block">Pure Nature's</span>
          <span className="text-gradient font-bold">Organic Essentials</span>
        </h1>
        
        <div className="mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-gold via-teal-medium to-nature-dark mb-6 shimmer"></div>
        
        <p className="text-white text-xl md:text-2xl max-w-2xl mx-auto mb-8 animate-fade-in">
          Handcrafted organic products for your home and personal care, made with love for those who appreciate quality and sustainability.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#products" className="btn-primary group animate-fade-in">
            <span className="flex items-center gap-2">
              <span>Explore Products</span>
              <Sparkles size={18} className="animate-pulse" />
            </span>
          </a>
          <a href="#about" className="btn-secondary bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 animate-fade-in">
            <span className="flex items-center gap-2">
              <Shield size={18} />
              <span>Our Mission</span>
            </span>
          </a>
        </div>
        
        <div className="flex justify-center mt-12 gap-8">
          <div className="text-center text-white/90">
            <div className="font-serif font-bold text-3xl">100%</div>
            <div className="text-sm uppercase tracking-widest">Organic</div>
          </div>
          <div className="text-center text-white/90">
            <div className="font-serif font-bold text-3xl">50+</div>
            <div className="text-sm uppercase tracking-widest">Products</div>
          </div>
          <div className="text-center text-white/90">
            <div className="font-serif font-bold text-3xl">10k+</div>
            <div className="text-sm uppercase tracking-widest">Happy Clients</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a href="#products" className="text-white opacity-80 hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-sm p-3 rounded-full">
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
