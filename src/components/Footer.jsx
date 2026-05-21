import React from 'react';

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaRegCalendarAlt } from 'react-icons/fa';
import { IoMailOutline, IoCallOutline, IoLocationOutline } from 'react-icons/io5';

const Footer = () => {
  return (
    
   <footer className="bg-[#001E36] text-gray-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white">
              <FaRegCalendarAlt className="h-6 w-6 text-[#0091FF]" />
              <span className="text-xl font-bold tracking-tight">DocTime</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your health is our top priority. Book appointments easily with reliable and experienced doctors, and receive quality medical care from the comfort of your home.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-[#0091FF] text-gray-400 transition-colors"><FaFacebookF className="h-5 w-5" /></a>
              <a href="#" className="hover:text-[#0091FF] text-gray-400 transition-colors"><FaTwitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-[#0091FF] text-gray-400 transition-colors"><FaLinkedinIn className="h-5 w-5" /></a>
              <a href="#" className="hover:text-[#0091FF] text-gray-400 transition-colors"><FaInstagram className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-[#0091FF] transition-colors">About Us</Link></li>
              <li><Link href="/doctors" className="hover:text-[#0091FF] transition-colors">Find a Doctor</Link></li>
              <li><Link href="/services" className="hover:text-[#0091FF] transition-colors">Our Services</Link></li>
              <li><Link href="/blogs" className="hover:text-[#0091FF] transition-colors">Health Blog</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/telemedicine" className="hover:text-[#0091FF] transition-colors">Online Telemedicine</Link></li>
              <li><Link href="/cardiology" className="hover:text-[#0091FF] transition-colors">Cardiology</Link></li>
              <li><Link href="/pediatrics" className="hover:text-[#0091FF] transition-colors">Pediatrics</Link></li>
              <li><Link href="/mental-health" className="hover:text-[#0091FF] transition-colors">Mental Health Care</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <IoLocationOutline className="h-5 w-5 text-[#0091FF] shrink-0 mt-0.5" />
                <span>Kandirpar, Comilla Sadar, Comilla, Bangladesh</span>
              </li>
              <li className="flex items-center space-x-3">
                <IoCallOutline className="h-5 w-5 text-[#0091FF] shrink-0" />
                <span>+880 1234-567890</span>
              </li>
              <li className="flex items-center space-x-3">
                <IoMailOutline className="h-5 w-5 text-[#0091FF] shrink-0" />
                <span>support@doctime.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-6"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} DocTime. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-gray-400 transition-colors">Cookie Settings</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;