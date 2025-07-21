import React from 'react';
import { Gamepad2, Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Games: ['Action', 'Adventure', 'RPG', 'Strategy', 'Racing', 'Sports'],
    Community: ['Forums', 'Discord', 'Tournaments', 'Leaderboards', 'Streaming', 'Events'],
    Support: ['Help Center', 'Contact Us', 'Bug Reports', 'Feature Requests', 'Status', 'Documentation'],
    Company: ['About Us', 'Careers', 'Press', 'Blog', 'Partners', 'Investors']
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Gamepad2 className="h-6 w-6 sm:h-8 sm:w-8 text-green-400" />
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                GameVault
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4 sm:mb-6">
              The ultimate gaming platform connecting millions of gamers worldwide.
              <br />
              A product of <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-semibold">THE IK.PRO TECH HUB.</span> Contact them for more INFO.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <p className="text-white text-sm sm:text-base font-semibold">Stay Updated</p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-green-400 transition-colors duration-200"
                />
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors duration-200 sm:flex-shrink-0">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="sm:col-span-1">
              <h3 className="text-white text-sm sm:text-base font-semibold mb-3 sm:mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 text-xs sm:text-sm hover:text-green-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
          <div className="text-gray-400 text-xs sm:text-sm order-3 lg:order-1">
            © 2024 GameVault. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-3 sm:space-x-4 order-1 lg:order-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-green-600 transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center space-x-4 sm:space-x-6 order-2 lg:order-3">
            <a href="#" className="text-gray-400 text-xs sm:text-sm hover:text-green-400 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 text-xs sm:text-sm hover:text-green-400 transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;