
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();

  const handleStartStudy = () => {
    navigate("/study");
  };

  return (
    <nav className="fixed w-full top-0 z-50 px-6 py-4 bg-dark">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => document.dispatchEvent(new Event('toggleSidebar'))}
            className="p-2 hover:bg-white/5 rounded-lg transition-colors"
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
          <Link to="/" className="text-2xl font-bold text-white animate-fade-in">
            NexusNotes
          </Link>
        </div>
        <div className="flex items-center space-x-8">
          <Link to="/about" className="text-white/80 hover:text-white transition-colors">
            About
          </Link>
          <button className="button-primary" onClick={handleStartStudy}>
            Start Study
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
