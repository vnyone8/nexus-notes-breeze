import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

interface Links {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
}

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

interface SidebarBodyProps extends React.ComponentProps<typeof motion.div> {
  children?: React.ReactNode;
}

export const SidebarBody = ({ children, ...props }: SidebarBodyProps) => {
  const { open, setOpen } = useSidebar();

  React.useEffect(() => {
    const handleToggle = (e: Event) => {
      e.preventDefault();
      setOpen(prev => !prev);
    };
    document.addEventListener('toggleSidebar', handleToggle);
    return () => document.removeEventListener('toggleSidebar', handleToggle);
  }, [setOpen]);

  return (
    <>
      <button
        onClick={() => setOpen(prev => !prev)}
        className="fixed top-4 left-4 z-50 text-purple-200 hover:text-white transition-colors duration-200 md:hidden"
        aria-label="Toggle sidebar"
        aria-expanded={open}
      >
        <Menu size={24} />
      </button>
      <DesktopSidebar {...props}>{children}</DesktopSidebar>
      <MobileSidebar {...props}>{children}</MobileSidebar>
    </>
  );
};

interface SidebarBaseProps extends React.ComponentProps<typeof motion.div> {
  children?: React.ReactNode;
}

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: SidebarBaseProps) => {
  const { open, setOpen, animate } = useSidebar();
  return (
    <motion.div
      className={cn(
        "h-full px-4 py-4 hidden md:flex md:flex-col bg-black/80 backdrop-blur-md w-[300px] flex-shrink-0 border-r border-purple-800",
        className
      )}
      animate={{
        width: animate ? (open ? "300px" : "60px") : "300px",
        transition: {
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1]
        }
      }}
      onMouseEnter={() => animate && setOpen(true)}
      onMouseLeave={() => animate && setOpen(false)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const MobileSidebar = ({
  className,
  children,
  ...props
}: SidebarBaseProps) => {
  const { open, setOpen } = useSidebar();
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={cn(
            "fixed h-full w-full inset-0 bg-black/90 backdrop-blur-md p-10 z-[100] flex flex-col justify-between md:hidden",
            className
          )}
          {...props}
        >
          <button
            className="absolute right-10 top-10 z-50 text-purple-200 cursor-pointer hover:text-white transition-colors duration-200"
            onClick={() => setOpen(false)}
            aria-label="Close sidebar"
          >
            <X />
          </button>
          <div className="h-full">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const SidebarLink = ({
  link,
  className,
  ...props
}: {
  link: Links;
  className?: string;
  [key: string]: any;
}) => {
  const { open, animate } = useSidebar();
  return (
    <Link
      to={link.href}
      className={cn(
        "flex items-center justify-start gap-2 group/sidebar py-2 text-purple-200 hover:text-white transition-colors",
        className
      )}
      {...props}
    >
      {link.icon}
      <motion.span
        initial={false}
        animate={{
          opacity: animate ? (open ? 1 : 0) : 1,
          width: animate ? (open ? "auto" : 0) : "auto",
          display: "inline-block"
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
          opacity: { duration: 0.1 }
        }}
        className="text-purple-200 group-hover/sidebar:text-white text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre overflow-hidden"
      >
        {link.label}
      </motion.span>
    </Link>
  );
};
