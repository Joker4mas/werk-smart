import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center mx-4 md:mx-16 flex-wrap md:gap-6 mt-4 justify-between">
      <img src="/logo.png" alt="Logo" className="w-32 md:w-52" />

      {/* Hamburger Menu Button - Only visible on mobile */}
      <button
        className="lg:hidden p-2 hover:bg-blue-400 rounded-md"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Navigation and Buttons */}
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row absolute lg:relative top-16 lg:top-0 left-0 lg:left-auto w-full mx-4 lg:w-auto lg:bg-transparent p-4 lg:p-0 space-y-4 lg:space-y-0 lg:items-center lg:space-x-8 bg-gray-500 shadow-lg lg:shadow-none`}
      >
        <ul className="flex flex-col md:flex-row space-x-4 list-none flex-wrap flex-1 items-center justify-end text-lg gap-4 text-gray-100 md:text-white">
          <li>
            <Link to="/price">Pricing</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/learn-more">Learn More</Link>
          </li>
        </ul>
        <div className="login flex flex-col md:flex-row gap-4 flex-wrap">
          <Link to="/login">
            <button className="w-56 md:w-32 rounded-full bg-blue-700 hover:border-2 hover:border-blue-600 hover:bg-black text-lg mx-auto md:mx-0 hover:transition-ease-in-out">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="w-56 md:w-32 rounded-full bg-blue-700 hover:border-2 hover:border-blue-600 hover:bg-black text-lg mx-auto md:mx-0">
              Get Started
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
