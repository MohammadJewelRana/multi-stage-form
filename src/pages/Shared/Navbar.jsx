import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = (
    <>
      <li>
        <Link to="/" className="hover:text-blue-600 transition-colors duration-300">Add Product</Link>
      </li>
      <li>
        <Link to="/view-products" className="hover:text-blue-600 transition-colors duration-300">View Products</Link>
      </li>
    </>
  );

  return (
    <nav className="bg-green-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            className="p-2 rounded-md text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Logo */}
        <div className="text-xl font-semibold">
          <Link to="/" className="flex items-center text-green-900">
            multi<span className="text-red-600">Stage</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-grow justify-center">
          <ul className="flex space-x-6">
            {navItems}
          </ul>
        </div>

        {/* Login Button */}
        <div className="lg:ml-auto">
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white rounded-box shadow-md mt-2 p-2">
          <ul className="space-y-2">
            {navItems}
            
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
