
import React from 'react';
import { Leaf, Award, Shield, Globe, Droplets, Heart, Rabbit } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: "100% Organic",
    description: "All our products are certified organic, made without synthetic chemicals or harsh ingredients."
  },
  {
    icon: Shield,
    title: "Eco-Friendly",
    description: "We use sustainable packaging and environmentally responsible production methods."
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Our organic collection has won multiple awards for quality and sustainability."
  },
  {
    icon: Rabbit,
    title: "Cruelty-Free",
    description: "We never test on animals and ensure our suppliers follow the same ethical standards."
  },
  {
    icon: Heart,
    title: "Handcrafted",
    description: "Each product is carefully handcrafted with attention to detail and quality control."
  },
  {
    icon: Droplets,
    title: "Pure Ingredients",
    description: "We source the finest natural ingredients to ensure maximum effectiveness and safety."
  }
];

const FeatureCard = ({ feature }) => {
  const Icon = feature.icon;
  
  return (
    <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-nature-dark/10 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-nature-light/10 to-teal-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-nature-dark to-teal-dark text-white mx-auto overflow-hidden relative group-hover:animate-pulse">
        <Icon size={28} className="relative z-10 transition-transform duration-500 group-hover:scale-110" />
      </div>
      
      <h3 className="text-xl font-serif font-semibold mb-4 text-nature-dark text-center relative z-10">{feature.title}</h3>
      
      <p className="text-gray-700 text-center relative z-10">{feature.description}</p>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-nature-dark to-teal-medium transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-cream">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-nature-dark text-sm font-bold uppercase tracking-wider mb-2">Why Choose Us</p>
          <h2 className="h2 text-nature-dark mb-4">The OrganoSilvia Difference</h2>
          <div className="divider mx-auto"></div>
          <p className="paragraph text-gray-700 max-w-2xl mx-auto">
            We're committed to providing you with the finest organic products while supporting sustainable practices and embracing eco-friendly alternatives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
        
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-nature-dark/10 to-teal-dark/10 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-serif font-semibold text-nature-dark mb-4">Join our eco-conscious community</h3>
              <p className="text-gray-700">Be part of a movement that values health, sustainability, and natural living. Every purchase helps us grow our mission for a greener future.</p>
            </div>
            <div className="md:w-1/3 text-center">
              <a href="#products" className="btn-primary inline-block">
                <span>Shop Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
