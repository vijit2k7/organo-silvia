
import React from 'react';
import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Silvia's Organic Floor Cleaner",
    description: "Premium organic floor cleaner with natural essential oils and eco-friendly ingredients.",
    price: "$14.99",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 5
  },
  {
    id: 2,
    name: "Lavender Bath Salt",
    description: "Relaxing lavender bath salt made with pure sea salt and organic essential oils.",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1608571423174-a550bab66e26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    rating: 4
  },
  {
    id: 3,
    name: "Rejuvenating Face Serum",
    description: "Nourishing face serum with vitamin C and natural ingredients for radiant skin.",
    price: "$22.99",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    rating: 5
  }
];

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={i < product.rating ? "text-gold fill-gold" : "text-gray-300"} 
            />
          ))}
        </div>
        <h3 className="font-serif text-xl font-semibold mb-2 text-nature-dark">{product.name}</h3>
        <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-nature-dark font-bold">{product.price}</span>
          <button className="btn-primary py-2 px-4 bg-nature-dark hover:bg-nature-light hover:text-nature-dark">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  return (
    <section id="products" className="section-padding bg-cream">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="h2 text-nature-dark mb-4">Featured Products</h2>
          <div className="divider mx-auto bg-nature-dark"></div>
          <p className="paragraph text-coffee-medium max-w-2xl mx-auto">
            Discover our selection of premium organic products, carefully formulated with natural ingredients for you and your home.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="/products" className="btn-secondary border-nature-dark text-nature-dark hover:bg-nature-light">View All Products</a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
