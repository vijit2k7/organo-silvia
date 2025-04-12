
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Emma Thompson",
    role: "Coffee Enthusiast",
    text: "The Silvia Sparkle blend is exceptional! The aroma fills my kitchen every morning, and the taste is smooth with just the right amount of boldness. I love supporting a company that prioritizes organic farming.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    name: "Michael Rodriguez",
    role: "Café Owner",
    text: "As a café owner, I've tried countless coffee brands, but OrganoSilvia stands out for its consistency and quality. My customers can taste the difference, and they appreciate our commitment to serving organic products.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    name: "Sophia Chen",
    role: "Sustainable Living Blogger",
    text: "I've been featuring OrganoSilvia on my blog for years because they truly embody what sustainable business should look like. The coffee is delicious, and I can enjoy every cup knowing it was ethically sourced.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80"
  }
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md relative">
      <div className="flex items-center mb-6">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-gold"
        />
        <div>
          <h4 className="font-semibold text-coffee-dark">{testimonial.name}</h4>
          <p className="text-sm text-coffee-medium">{testimonial.role}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < testimonial.rating ? "text-gold fill-gold" : "text-gray-300"} 
          />
        ))}
      </div>
      <p className="text-coffee-medium italic">{testimonial.text}</p>
      <div className="absolute top-4 right-4 text-gold opacity-30">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 11H6C5.44772 11 5 10.5523 5 10V6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V10C11 10.5523 10.5523 11 10 11Z" fill="currentColor"/>
          <path d="M18 11H14C13.4477 11 13 10.5523 13 10V6C13 5.44772 13.4477 5 14 5H18C18.5523 5 19 5.44772 19 6V10C19 10.5523 18.5523 11 18 11Z" fill="currentColor"/>
          <path d="M10 19H6C5.44772 19 5 18.5523 5 18V14C5 13.4477 5.44772 13 6 13H10C10.5523 13 11 13.4477 11 14V18C11 18.5523 10.5523 19 10 19Z" fill="currentColor"/>
          <path d="M18 19H14C13.4477 19 13 18.5523 13 18V14C13 13.4477 13.4477 13 14 13H18C18.5523 13 19 13.4477 19 14V18C19 18.5523 18.5523 19 18 19Z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="h2 text-coffee-dark mb-4">What Our Customers Say</h2>
          <div className="divider mx-auto"></div>
          <p className="paragraph text-coffee-medium max-w-2xl mx-auto">
            Don't just take our word for it. Here's what coffee lovers are saying about OrganoSilvia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
