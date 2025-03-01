
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const Navbar = () => {
  const navigate = useNavigate();

  const handleStartStudy = () => {
    navigate("/study");
  };

  return (
    <nav className="fixed w-full top-0 z-50 h-20 bg-black backdrop-blur-md border-b border-purple-800 transition-all duration-300">
      <div className="h-full px-6 md:px-8 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => document.dispatchEvent(new Event('toggleSidebar'))}
            className="p-2 rounded-lg transition-colors hover:bg-purple-800/50"
            aria-label="Toggle sidebar"
          >
            <Menu className="w-6 h-6 text-purple-200" aria-hidden="true" />
          </button>
          <Link to="/" className="flex items-center gap-1 text-2xl md:text-3xl font-bold animate-fade-in transition-all duration-300 group">
            <span className="relative">
              <span className="bg-gradient-to-r from-[#8A2BE2] via-[#B23AEE] to-[#DDA0DD] bg-clip-text text-transparent 
                hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.5)] transition-all duration-300 relative z-10">
                <span className="font-light">Purple</span><span className="font-bold">Notes</span>
              </span>
              <span className="h-[2px] w-0 bg-gradient-to-r from-[#8A2BE2] to-[#DDA0DD] absolute bottom-0 left-0 
                group-hover:w-full transition-all duration-500"></span>
            </span>
            <span className="text-xs text-purple-300 font-normal mt-auto mb-1 hidden sm:block">Study Smarter</span>
          </Link>
        </div>
        <div className="flex items-center gap-2 md:gap-6">
          <Link 
            to="/about" 
            className="text-purple-200 hover:text-white hover:bg-purple-800/50 transition-colors px-4 py-2 text-lg font-medium rounded-lg"
          >
            About
          </Link>
          <BackgroundGradient className="rounded-lg">
            <button 
              className="text-white text-base md:text-lg px-6 md:px-8 py-2.5 rounded-lg hover:shadow-lg hover:shadow-purple-200 transition-all duration-300"
              onClick={handleStartStudy}
              aria-label="Start using the study platform"
            >
              Start Study
            </button>
          </BackgroundGradient>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
