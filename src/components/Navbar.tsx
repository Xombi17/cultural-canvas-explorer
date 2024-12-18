import { Link } from "react-router-dom";

export const Navbar = () => {
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
          </div>
        </div>
      </div>
    </nav>
  );
};