import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A1</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">A1 Furniture Polish</h3>
                <p className="text-sm text-amber-400">Professional Services</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Leading furniture polishing services in Mumbai. We restore and polish your wooden furniture to perfection with eco-friendly products and skilled craftsmen.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Services</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Wooden Furniture Polish</li>
              <li className="text-gray-300">Sofa & Chair Polishing</li>
              <li className="text-gray-300">Table & Bed Polishing</li>
              <li className="text-gray-300">Antique Restoration</li>
              <li className="text-gray-300">Commercial Polishing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-amber-400" />
                <a href="tel:+919920397636" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                  +91 99203 97636
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-amber-400" />
                <a href="mailto:A1furniturepolish@gmail.com" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                  A1furniturepolish@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-amber-400" />
                <span className="text-gray-300 text-sm">Shop No 18, Akbar Ali Compound, Relief Road, near HK College, Oshiwara, Jogeshwari West, Mumbai, Maharashtra 400102</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-amber-400" />
                <span className="text-gray-300 text-sm">24 Hours Service</span>
              </div>
              <a
                href="https://wa.me/919920397636"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 w-fit"
              >
                <MessageCircle size={16} />
                <span className="text-sm font-medium">WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 A1 Furniture Polish. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Professional Furniture Polishing Services in Mumbai
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;