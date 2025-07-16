import React from 'react';
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-1 text-gray-300">
            <li>Explore Hackathons</li>
            <li>How it Works?</li>
            <li>Testimonials</li>
            <li>Contact Us</li>
          </ul>
        </div>
        

        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <ul className="space-y-1 text-gray-300">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Accessibility</li>
          </ul>
        </div>



        <div>
          <h3 className="font-semibold mb-3">Contact Information</h3>
          <ul className="space-y-1 text-gray-300">
            <li>Email: support@techsphere.org</li>
            <li>Phone: +1 (800) 123-4567</li>
            <li>Address: 123 Square Avenue, City, Country</li>
          </ul>
        </div>



        <div className="flex flex-col items-start md:items-end">
          <div className="text-orange-500 font-bold text-xl mb-1">TechSphere</div>
          <div className="text-sm text-gray-400 mb-4">Where tech minds gather!</div>
          <div className="flex space-x-3">
            <Youtube className="w-5 h-5 text-white hover:text-orange-500" />
            <Instagram className="w-5 h-5 text-white hover:text-orange-500" />
            <Linkedin className="w-5 h-5 text-white hover:text-orange-500" />
            <Facebook className="w-5 h-5 text-white hover:text-orange-500" />
          </div>
        </div>
      </div>



      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-400">
        © 2025 InnoHack. Empowering Innovators Worldwide.
      </div>
    </footer>
  );
};

export default Footer;
