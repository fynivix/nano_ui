import { useState } from "react";
import { Menu } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur border-b border-gray-800">

      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">

        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src="/logo/logo-bg.png"
            alt="NanoDx Corp"
            className="h-14 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">

          <Link
            to="/"
            className="hover:text-green-400 transition"
          >
            Home
          </Link>

          <Link
            to="/features"
            className="hover:text-green-400 transition"
          >
            Features
          </Link>

          <Link
            to="/about"
            className="hover:text-green-400 transition"
          >
            About Us
          </Link>

          <Link
            to="/career"
            className="hover:text-green-400 transition"
          >
            Career
          </Link>

          <Link
            to="/contact"
            className="hover:text-green-400 transition"
          >
            Contact
          </Link>

          <button
            onClick={() => navigate("/login")}
            className="
              px-5
              py-2
              border
              border-green-500
              rounded-xl
              hover:bg-green-500
              transition
            "
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="
              px-5
              py-2
              bg-green-500
              rounded-xl
              hover:bg-green-600
              transition
            "
          >
            Register
          </button>

        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>

      </div>

      {/* Separate Mobile Menu */}
      <MobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

    </header>
  );
}