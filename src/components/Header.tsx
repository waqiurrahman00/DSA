import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Apply Now', href: '/apply' },
    { name: 'Payment', href: '/payment' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        {/* Left: Logo + Title */}
<div className="flex items-center space-x-2">
  <Link to="/" className="flex-shrink-0">
    <img
      src="/ChatGPT_Image_Jul_19__2025__05_18_39_AM-removebg-preview(3).png"
      alt="logo"
      width={50}
      className="object-contain"
    />
  </Link>
  <span className="text-lg font-bold text-gray-900 whitespace-nowrap">
    Delhi Safety Academy
  </span>
</div>

{/* Mobile menu button */}
<div className="md:hidden">
  <button
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
  >
    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
  </button>
</div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 ml-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
