
import { Search, Download, Star, Heart, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`fixed top-0 left-0 h-screen bg-dark-lighter transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="absolute right-[-12px] top-6 bg-primary rounded-full p-1 hover:bg-primary-hover"
      >
        <Menu className="w-4 h-4 text-white" />
      </button>
      
      <div className="p-4 mt-4">
        {isOpen && (
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input
              type="text"
              placeholder="Search notes..."
              className="w-full bg-dark/50 text-white pl-10 pr-4 py-2 rounded-full border border-white/10 focus:outline-none focus:border-primary"
            />
          </div>
        )}
        
        <nav className="space-y-2">
          <Link to="/downloads" className="flex items-center space-x-3 text-white/80 hover:text-white hover:bg-white/5 p-2 rounded-lg transition-colors">
            <Download className="w-5 h-5" />
            {isOpen && <span>My Downloads</span>}
          </Link>
          <Link to="/favorites" className="flex items-center space-x-3 text-white/80 hover:text-white hover:bg-white/5 p-2 rounded-lg transition-colors">
            <Star className="w-5 h-5" />
            {isOpen && <span>Favorites</span>}
          </Link>
          <Link to="/liked" className="flex items-center space-x-3 text-white/80 hover:text-white hover:bg-white/5 p-2 rounded-lg transition-colors">
            <Heart className="w-5 h-5" />
            {isOpen && <span>Liked Notes</span>}
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
