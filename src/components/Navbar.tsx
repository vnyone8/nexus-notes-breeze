
import { Link, useNavigate } from "react-router-dom";
import { Menu, Notebook } from "lucide-react";

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
          <Link to="/" className="flex items-center gap-1 text-2xl md:text-3xl font-bold animate-fade-in transition-all duration-300 group">
            <span className="relative">
              <Notebook className="w-6 h-6 text-[#8a2be2]/90 absolute -left-1 -top-1 transform scale-90 opacity-80 group-hover:opacity-100 transition-all duration-300" />
              <span className="bg-gradient-to-r from-[#4b0082]/80 via-[#8a2be2]/80 to-[#e0b0ff]/80 bg-clip-text text-transparent 
                hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.5)] transition-all duration-300 relative z-10 pl-5">
                <span className="font-light">Purple</span><span className="font-bold">Notes</span>
              </span>
              <span className="h-[2px] w-0 bg-gradient-to-r from-[#8a2be2]/50 to-[#e0b0ff]/50 absolute bottom-0 left-6 
                group-hover:w-[calc(100%-24px)] transition-all duration-500"></span>
            </span>
            <span className="text-xs text-white/70 font-normal mt-auto mb-1 hidden sm:block">Study Smarter</span>
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
