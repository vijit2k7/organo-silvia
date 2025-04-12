
import React from 'react';
import { Leaf, Award, Shield, Globe } from 'lucide-react';

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
    description: "Our Silvia Sparkle collection has won multiple awards for quality and sustainability."
  },
  {
    icon: Globe,
    title: "Sustainably Sourced",
    description: "We work directly with suppliers who are committed to sustainable farming practices."
  }
];

const FeatureCard = ({ feature }) => {
  const Icon = feature.icon;
  
  return (
    <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-nature-light text-nature-dark mx-auto">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-serif font-semibold mb-4 text-coffee-dark text-center">{feature.title}</h3>
      <p className="text-coffee-medium text-center">{feature.description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="h2 text-coffee-dark mb-4">Why Choose OrganoSilvia</h2>
          <div className="divider mx-auto"></div>
          <p className="paragraph text-coffee-medium max-w-2xl mx-auto">
            We're committed to providing you with the finest organic products while supporting sustainable practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
