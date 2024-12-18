import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-950/90 via-purple-900/80 to-indigo-950/90 backdrop-blur-xl border-b border-purple-500/20 shadow-lg shadow-purple-500/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-semibold text-purple-100 hover:text-amber-400 transition-all duration-300">
            Heritage India
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-xl font-semibold text-purple-100 hover:text-amber-400 transition-all duration-300">
              Home
            </Link>
            <Link to="/states" className="text-xl font-semibold text-purple-100 hover:text-amber-400 transition-all duration-300">
              States
            </Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
};