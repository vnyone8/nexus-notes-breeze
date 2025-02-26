
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();

  const handleStartStudy = () => {
    navigate("/study");
  };

  return (
    <nav className="fixed w-full top-0 z-50 h-20 bg-dark/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="h-full px-6 md:px-8 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => document.dispatchEvent(new Event('toggleSidebar'))}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle sidebar"
          >
            <Menu className="w-6 h-6 text-white" aria-hidden="true" />
          </button>
          <Link to="/" className="text-2xl md:text-3xl font-bold text-white animate-fade-in hover:text-gradient transition-all duration-300">
            NexusNotes
          </Link>
        </div>
        <div className="flex items-center gap-2 md:gap-6">
          <Link 
            to="/about" 
            className="text-white/80 hover:text-white transition-colors px-4 py-2 text-lg font-medium hover:bg-white/5 rounded-lg"
          >
            About
          </Link>
          <button 
            className="button-primary text-base md:text-lg px-6 md:px-8 py-2.5 shadow-glow"
            onClick={handleStartStudy}
            aria-label="Start using the study platform"
          >
            Start Study
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
