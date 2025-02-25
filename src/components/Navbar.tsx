
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();

  const handleStartStudy = () => {
    navigate("/study");
  };

  return (
    <nav className="fixed w-full top-0 z-50 h-16 bg-dark border-b border-white/10">
      <div className="h-full px-4 md:px-6 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => document.dispatchEvent(new Event('toggleSidebar'))}
            className="p-2 hover:bg-white/5 rounded-lg transition-colors"
            aria-label="Toggle sidebar"
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
          <Link to="/" className="text-xl md:text-2xl font-bold text-white animate-fade-in">
            NexusNotes
          </Link>
        </div>
        <div className="flex items-center">
          <Link 
            to="/about" 
            className="text-white/80 hover:text-white transition-colors px-4 py-2 mr-2 md:mr-4"
          >
            About
          </Link>
          <button 
            className="button-primary text-sm md:text-base px-4 md:px-6 py-2"
            onClick={handleStartStudy}
          >
            Start Study
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
