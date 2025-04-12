
import React, { useState } from 'react';
import { Check } from 'lucide-react';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 gradient-overlay-nature z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1561&q=80" 
          alt="Natural Ingredients" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container-custom relative z-20 text-center px-4">
        <h2 className="h2 text-white mb-6 animate-fade-in">Join Our Organic Community</h2>
        <div className="divider bg-gold mx-auto"></div>
        <p className="text-white text-lg max-w-2xl mx-auto mb-8">
          Subscribe to our newsletter for exclusive offers, care tips, and updates on our latest products.
        </p>
        
        <div className="max-w-md mx-auto glass-card p-6 bg-white/10">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-lg focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              type="submit" 
              className="btn-primary whitespace-nowrap"
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                <span className="flex items-center">
                  <Check size={16} className="mr-1" />
                  Subscribed!
                </span>
              ) : 'Subscribe'}
            </button>
          </form>
          <p className="text-white/80 text-sm mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from OrganoSilvia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
