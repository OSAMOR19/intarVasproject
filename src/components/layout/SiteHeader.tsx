import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import explorebtn from "@/assets/buttons/exploreservicebutton.svg";
import requestbtn from "@/assets/buttons/requestdemobutton.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Infinity as InfinityIcon, ChevronDown, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import intervaslogoblack from "@/assets/intervaslogoblack.svg";
import logoblack from "@/assets/intervaslogoblack.svg";

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOnLightBackground, setIsOnLightBackground] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Change to glassmorphism after scrolling past 100px (adjust as needed)
      setIsScrolled(scrollPosition > 100);
      
      // Detect background color at header position
      const elements = document.elementsFromPoint(window.innerWidth / 2, 80);
      let backgroundIsLight = false;
      
      for (const el of elements) {
        const styles = window.getComputedStyle(el);
        const bgColor = styles.backgroundColor;
        
        // Skip transparent backgrounds
        if (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') {
          continue;
        }
        
        // Extract RGB values
        const rgbMatch = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (rgbMatch) {
          const [, r, g, b] = rgbMatch.map(Number);
          
          // Calculate brightness (0-255)
          const brightness = (r * 299 + g * 587 + b * 114) / 1000;
          
          // If brightness is above 128, it's a light background
          if (brightness > 128) {
            backgroundIsLight = true;
            break;
          }
        }
        
        // Check for hex colors
        const hexMatch = bgColor.match(/#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})/);
        if (hexMatch) {
          let hex = hexMatch[1];
          if (hex.length === 3) {
            hex = hex.split('').map(char => char + char).join('');
          }
          
          const r = parseInt(hex.substr(0, 2), 16);
          const g = parseInt(hex.substr(2, 2), 16);
          const b = parseInt(hex.substr(4, 2), 16);
          
          const brightness = (r * 299 + g * 587 + b * 114) / 1000;
          
          if (brightness > 128) {
            backgroundIsLight = true;
            break;
          }
        }
      }
      
      setIsOnLightBackground(backgroundIsLight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if we should use black logo (on services pages or when scrolled)
  const shouldUseBlackLogo = location.pathname.includes('/services') || isScrolled;

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `${
      isActive 
        ? `${isOnLightBackground ? "text-gray-800" : "text-white"} font-semibold` 
        : "text-gray-400 hover:text-white"
    } transition-colors`;

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/10 backdrop-blur-md border-b border-white/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="md:container md:mx-auto flex h-16 items-center justify-between md:px-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="md:flex items-center gap-2 font-semibold">
            <img
              src={shouldUseBlackLogo ? intervaslogoblack : "/images/Logo.svg"}
              alt="IntarVAS Logo"
              className="h-8 w-[200px]"
            />
          </Link>

          <nav className="hidden md:gap-6 md:flex">
          <NavLink color="#C2C6CE" to="/" end className={linkCls}>
            Home
          </NavLink>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-gray-400 hover:text-white">
              <span className={linkCls({ isActive: false })}>Services</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="z-50">
              <DropdownMenuItem asChild>
                <Link to="/services/all-in-solutions">All In Solutions</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/services/pbx">IntarVAS PBX</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/services/bulk-messaging">Bulk Messaging</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/services/numbers">0700 & 0800 Numbers</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <NavLink to="/about" className={linkCls}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={linkCls}>
            Contact Us
          </NavLink>
          </nav>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="outline" asChild>
            <a href="https://wiki.ccaas.intarvas.com" target="_blank" rel="noopener noreferrer">Explore Services</a>
          </Button>
          <Button variant="hero" asChild>
            <a href="https://api.ccaas.intarvas.com" target="_blank" rel="noopener noreferrer">Request Demo</a>
          </Button>
        </div>

        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="p-2">
              <Menu color="#C2C6CE" className="h-6 w-6 text-foreground" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="z-50">
              <DropdownMenuItem asChild>
                <Link to="/">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/services/all-in-solutions">All In Solutions</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/services/pbx">IntarVAS PBX</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/services/bulk-messaging">Bulk Messaging</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/services/numbers">0700 & 0800 Numbers</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/about">About Us</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/contact">Contact Us</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="https://wiki.ccaas.intarvas.com" target="_blank" rel="noopener noreferrer">Explore Services</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="https://api.ccaas.intarvas.com" target="_blank" rel="noopener noreferrer">Request Demo</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
