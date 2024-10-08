import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-accent text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm">Nagrik Aur Samvidhan is dedicated to making the Indian Constitution accessible and understandable for all citizens.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary">Home</a></li>
              <li><a href="#" className="hover:text-primary">Learn</a></li>
              <li><a href="#" className="hover:text-primary">Games</a></li>
              <li><a href="#" className="hover:text-primary">Videos</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">Email: info@nagrikaursamvidhan.org</p>
            <p className="text-sm">Phone: +91 123 456 7890</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary"><Facebook /></a>
              <a href="#" className="hover:text-primary"><Twitter /></a>
              <a href="#" className="hover:text-primary"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-accent-light text-center">
          <p>&copy; 2024 Nagrik Aur Samvidhan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;