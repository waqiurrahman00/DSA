import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src='public/ChatGPT_Image_Jul_19__2025__05_18_39_AM-removebg-preview(3).png' alt='logo' width={40} />
              <span className="text-xl font-bold">Delhi Safety Academy</span>
            </div>
            <p className="text-gray-300 mb-4">
              Leading safety training institute in Delhi, providing comprehensive safety education and certification programs for industrial and workplace safety.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5 transition-transform hover:scale-110" />
              </a>
              <a href="#" className="text-blue-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-700 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:underline text-gray-300">About Us</Link></li>
              <li><Link to="/certification" className="hover:underline text-gray-300">Certification</Link></li>
              <li><Link to="/training-schedule" className="hover:underline text-gray-300">Training Schedule</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@delhisafetyacademy.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <span className="text-gray-300">123 Safety Plaza, Connaught Place, New Delhi - 110001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2025 Delhi Safety Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
