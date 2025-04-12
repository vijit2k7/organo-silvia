
import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <Coffee size={28} className="text-coffee-dark mr-2" />
            <span className="font-serif text-xl md:text-2xl font-bold text-coffee-dark">OrganoSilvia</span>
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-coffee-dark hover:text-coffee-medium font-medium">Home</Link>
          <Link to="/products" className="text-coffee-dark hover:text-coffee-medium font-medium">Products</Link>
          <Link to="/about" className="text-coffee-dark hover:text-coffee-medium font-medium">About Us</Link>
          <Link to="/contact" className="text-coffee-dark hover:text-coffee-medium font-medium">Contact</Link>
          <button className="flex items-center">
            <ShoppingBag size={20} className="text-coffee-dark" />
            <span className="ml-1 bg-nature-dark text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">0</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? (
            <X size={24} className="text-coffee-dark" />
          ) : (
            <Menu size={24} className="text-coffee-dark" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 md:hidden">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-coffee-dark hover:text-coffee-medium font-medium" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/products" className="text-coffee-dark hover:text-coffee-medium font-medium" onClick={() => setIsOpen(false)}>Products</Link>
            <Link to="/about" className="text-coffee-dark hover:text-coffee-medium font-medium" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/contact" className="text-coffee-dark hover:text-coffee-medium font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
            <button className="flex items-center">
              <ShoppingBag size={20} className="text-coffee-dark" />
              <span className="ml-1 bg-nature-dark text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">0</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
