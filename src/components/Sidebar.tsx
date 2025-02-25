
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
    <aside 
      className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-dark-lighter transition-all duration-300 z-40 
        ${isOpen ? 'w-64' : 'w-0'} border-r border-white/10`}
    >
      <div className="flex flex-col h-full">
        <div className="flex-1 py-4">
          <nav className="px-2 space-y-2">
            <TooltipProvider>
              {sidebarItems.map(({ icon: Icon, label, path }) => (
                <Tooltip key={label}>
                  <TooltipTrigger asChild>
                    <Link
                      to={path}
                      className={`flex items-center gap-3 text-white/80 hover:text-white hover:bg-white/5 p-3 rounded-lg transition-all duration-300 ${
                        !isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
                      }`}
                    >
                      <Icon className="w-5 h-5 min-w-[20px]" />
                      <span className="text-sm font-medium whitespace-nowrap">{label}</span>
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
    </aside>
  );
};

export default Sidebar;
