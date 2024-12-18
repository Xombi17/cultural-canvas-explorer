import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "./ui/input";

export const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-semibold text-cultural-maroon">
            Heritage India
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/states" className="nav-link">
              States
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-secondary rounded-full transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {isSearchOpen && (
          <div className="py-4 border-t animate-fade-in">
            <Input
              type="search"
              placeholder="Search states..."
              className="max-w-md mx-auto"
            />
          </div>
        )}
      </div>
    </nav>
  );
};