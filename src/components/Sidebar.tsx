
import { Download, Star, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleToggle = () => {
      setIsOpen(prev => !prev);
    };

    document.addEventListener('toggleSidebar', handleToggle);
    return () => document.removeEventListener('toggleSidebar', handleToggle);
  }, []);

  const sidebarItems = [
    { icon: Download, label: "Downloads", path: "/downloads" },
    { icon: Star, label: "Favorites", path: "/favorites" },
    { icon: Heart, label: "Liked Notes", path: "/liked" },
  ];

  return (
    <div 
      className={`fixed top-0 left-0 h-screen bg-dark-lighter transition-all duration-300 z-50 ${
        isOpen ? 'w-64' : 'w-0'
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex-1 p-4">
          <nav className="space-y-6">
            <TooltipProvider>
              {sidebarItems.map(({ icon: Icon, label, path }) => (
                <Tooltip key={label}>
                  <TooltipTrigger asChild>
                    <Link
                      to={path}
                      className={`flex items-center space-x-3 text-white/80 hover:text-white hover:bg-white/5 p-3 rounded-lg transition-all duration-300 ${
                        !isOpen ? 'opacity-0' : 'opacity-100'
                      }`}
                    >
                      <Icon className="w-6 h-6 min-w-[24px]" />
                      <span className="text-sm font-medium">{label}</span>
                    </Link>
                  </TooltipTrigger>
                  {!isOpen && (
                    <TooltipContent side="right">
                      <p>{label}</p>
                    </TooltipContent>
                  )}
                </Tooltip>
              ))}
            </TooltipProvider>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
