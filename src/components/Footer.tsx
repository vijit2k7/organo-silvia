
import React from 'react';
import { Coffee, Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-coffee-dark text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <Coffee size={24} className="mr-2" />
              <span className="font-serif text-xl font-bold">OrganoSilvia</span>
            </div>
            <p className="mb-6 text-gray-300">
              Premium organic coffee, sustainably sourced and carefully roasted to perfection.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-gold transition-colors">Home</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-gold transition-colors">Products</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-gold transition-colors">About Us</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-gold transition-colors">Blog</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0 text-gold" />
                <span className="text-gray-300">123 Organic Lane, Coffee Valley, CA 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0 text-gold" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0 text-gold" />
                <span className="text-gray-300">info@organosilvia.com</span>
              </li>
            </ul>
          </div>
          
          {/* Business Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Business Hours</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} OrganoSilvia. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-gold transition-colors">Terms of Service</a>
            <a href="/shipping" className="hover:text-gold transition-colors">Shipping Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
