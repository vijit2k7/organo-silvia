
import React from 'react';

const CTA = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-coffee-dark/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1561&q=80" 
          alt="Natural Ingredients" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container-custom relative z-20 text-center px-4">
        <h2 className="h2 text-white mb-6">Join Our Organic Community</h2>
        <div className="divider bg-gold mx-auto"></div>
        <p className="text-white text-lg max-w-2xl mx-auto mb-8">
          Subscribe to our newsletter for exclusive offers, care tips, and updates on our latest products.
        </p>
        
        <div className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-nature-dark"
            />
            <button className="btn-primary bg-nature-dark hover:bg-nature-light hover:text-coffee-dark whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-white/80 text-sm mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from OrganoSilvia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
