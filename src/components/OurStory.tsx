
import React from 'react';

const OurStory = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="h2 text-coffee-dark mb-4">Our Story</h2>
            <div className="divider"></div>
            <p className="paragraph text-coffee-medium mb-6">
              Founded in 2010, OrganoSilvia was born from a passion for exceptional coffee and sustainable farming practices. Our journey began when Silvia Moretti, a third-generation coffee farmer, decided to share her family's carefully cultivated organic coffee with the world.
            </p>
            <p className="paragraph text-coffee-medium mb-6">
              We work directly with small-scale organic coffee farmers in the most pristine growing regions, ensuring fair compensation and sustainable practices. Every bean is hand-selected, expertly roasted, and delivered fresh to provide you with the purest coffee experience.
            </p>
            <p className="paragraph text-coffee-medium mb-8">
              Our signature Silvia Sparkle blend embodies our commitment to quality, sustainability, and the perfect cup of coffee. When you choose OrganoSilvia, you're not just enjoying premium coffee – you're supporting a vision of environmental responsibility and community development.
            </p>
            <a href="/about" className="btn-primary">Learn More</a>
          </div>
          <div className="order-1 lg:order-2 relative">
            <img 
              src="https://images.unsplash.com/photo-1579868164111-ab2c166f5b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Coffee Plantation" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-nature-light rounded-lg hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1580933073521-dc51f24c5628?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80" 
                alt="Coffee Beans" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
