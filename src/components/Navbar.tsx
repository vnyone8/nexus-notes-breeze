
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white animate-fade-in">
          Nexus-notes
        </Link>
        <div className="flex items-center space-x-8">
          <Link to="/features" className="text-white/80 hover:text-white transition-colors">
            Features
          </Link>
          <Link to="/about" className="text-white/80 hover:text-white transition-colors">
            About
          </Link>
          <button className="button-primary">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
