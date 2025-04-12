
import React, { useState } from 'react';
import { Star, ShoppingBag, Shield, Award, Sparkles, Leaf } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Organic Floor Cleaner",
    description: "Natural floor cleaner with insecta class repellent and antimicrobial properties.",
    price: "₹199",
    image: "public/lovable-uploads/829e9094-87a1-4511-b01d-55dd66f637a5.png",
    rating: 5,
    badge: "bestseller",
    icon: Shield,
    features: ["Non-toxic", "Anti-microbial", "Insect repellent"]
  },
  {
    id: 2,
    name: "Lavender Bath Salt",
    description: "Luxurious touch of lavender detox bath salt for relaxation and skin rejuvenation.",
    price: "₹249",
    image: "public/lovable-uploads/881f2512-cd67-46d6-8f3e-76d09dad4043.png",
    rating: 5,
    badge: "organic",
    icon: Sparkles,
    features: ["Detoxifying", "Relaxing", "Skin softening"]
  },
  {
    id: 3,
    name: "Pee Secure",
    description: "Natural urinary tract health supplement for maintaining kidney and bladder health.",
    price: "₹299",
    image: "https://images.unsplash.com/photo-1634622582876-e9d09cc36ce9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    rating: 4,
    badge: "new",
    icon: Shield,
    features: ["UTI prevention", "Bladder health", "Natural ingredients"]
  },
  {
    id: 4,
    name: "Room Freshener Collection",
    description: "Aromatic room fresheners in Rose, Lemongrass and Lavender variants for your home.",
    price: "₹179",
    image: "public/lovable-uploads/f824089a-f3b8-4012-bac5-c57ba70688b6.png",
    rating: 5,
    badge: "organic",
    icon: Leaf,
    features: ["Long-lasting", "Natural scents", "No harmful chemicals"]
  },
  {
    id: 5,
    name: "Hand Made Soaps",
    description: "Artisanal soaps crafted with natural ingredients for gentle cleansing and nourishment.",
    price: "₹149",
    image: "https://images.unsplash.com/photo-1607006483204-b9fb17716911?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    rating: 5,
    badge: "bestseller",
    icon: Award,
    features: ["Handcrafted", "All natural", "Gentle cleansing"]
  },
  {
    id: 6,
    name: "Herbal Hair Growth Oil",
    description: "Potent herbal formula for hair regrowth and thickening with coconut oil base.",
    price: "₹399",
    image: "public/lovable-uploads/3497d10e-7008-41f3-b869-f37987748903.png",
    rating: 4,
    badge: "new",
    icon: Sparkles,
    features: ["Hair regrowth", "Thickening", "Prevents hair fall"]
  }
];

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = product.icon;
  
  return (
    <div 
      className="product-card relative h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {product.badge && (
        <div className={`product-badge ${product.badge}`}>
          {product.badge === "new" ? "New Arrival" : 
           product.badge === "bestseller" ? "Best Seller" : "100% Organic"}
        </div>
      )}
      
      <div className="img-zoom h-64">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={`${i < product.rating ? "text-gold fill-gold" : "text-gray-300"} transition-colors duration-300`} 
            />
          ))}
        </div>
        
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 rounded-full bg-nature-dark/10">
            <Icon size={16} className="text-nature-dark" />
          </div>
          <h3 className="font-serif text-xl font-semibold text-nature-dark transition-colors duration-300">{product.name}</h3>
        </div>
        
        <p className="text-gray-600 mb-4 text-sm flex-grow">{product.description}</p>
        
        <div className="mt-auto">
          {isHovered && (
            <div className="mb-4 animate-fade-in">
              <ul className="flex flex-wrap gap-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="text-xs bg-nature-dark/10 text-nature-dark px-2 py-1 rounded-full">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="flex justify-between items-center">
            <span className="price-badge">{product.price}</span>
            <button className="group flex items-center gap-2 relative overflow-hidden px-4 py-2 bg-nature-dark text-white rounded-lg hover:bg-teal-dark transition-all duration-300">
              <ShoppingBag size={16} />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
      
      {isHovered && (
        <div className="badge-organic animate-fade-in">
          OrganoSilvia
        </div>
      )}
    </div>
  );
};

const FeaturedProducts = () => {
  return (
    <section id="products" className="section-padding bg-gradient-to-b from-cream to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-nature-dark text-sm font-bold uppercase tracking-wider mb-2">Our Selection</p>
          <h2 className="h2 text-nature-dark mb-4">Premium Organic Products</h2>
          <div className="divider mx-auto"></div>
          <p className="paragraph text-gray-700 max-w-2xl mx-auto">
            Discover our selection of premium organic products, carefully formulated with natural ingredients for you and your home.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a href="/products" className="btn-primary inline-block">
            <span>Explore All Products</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
