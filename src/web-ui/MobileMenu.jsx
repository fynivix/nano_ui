import { X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function MobileMenu({ isOpen, setIsOpen }) {
  const navigate = useNavigate();

  if (!isOpen) {
    return null;
  }

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLogin = () => {
    setIsOpen(false);
    navigate("/login");
  };

  const handleRegister = () => {
    setIsOpen(false);
    navigate("/register");
  };

  return (
    <>
      {/* Dark Overlay */}
      <div
        className="fixed inset-0 z-[60] bg-black/40"
        onClick={closeMenu}
      />

      {/* Right Side Menu */}
      <div
        className="
          fixed
          top-0
          right-0
          z-[70]
          h-screen
          w-1/2
          min-w-[280px]
          overflow-y-auto
          bg-green-100
          text-gray-900
          shadow-2xl
        "
      >

        {/* Menu Header */}
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-green-200
            px-6
            py-5
          "
        >
          <h2 className="text-xl font-bold text-green-900">
            Menu
          </h2>

          <button
            onClick={closeMenu}
            className="
              rounded-full
              p-2
              text-green-900
              hover:bg-green-200
              transition
            "
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 px-6 py-6">

          <Link
            to="/"
            onClick={closeMenu}
            className="
              rounded-lg
              px-4
              py-3
              font-medium
              hover:bg-green-200
              transition
            "
          >
            Home
          </Link>

          <Link
            to="/features"
            onClick={closeMenu}
            className="
              rounded-lg
              px-4
              py-3
              font-medium
              hover:bg-green-200
              transition
            "
          >
            Features
          </Link>

          <Link
            to="/about"
            onClick={closeMenu}
            className="
              rounded-lg
              px-4
              py-3
              font-medium
              hover:bg-green-200
              transition
            "
          >
            About Us
          </Link>

          <Link
            to="/career"
            onClick={closeMenu}
            className="
              rounded-lg
              px-4
              py-3
              font-medium
              hover:bg-green-200
              transition
            "
          >
            Career
          </Link>

          <Link
            to="/contact"
            onClick={closeMenu}
            className="
              rounded-lg
              px-4
              py-3
              font-medium
              hover:bg-green-200
              transition
            "
          >
            Contact
          </Link>

          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-3">

            <button
              onClick={handleLogin}
              className="
                w-full
                rounded-xl
                border
                border-green-600
                py-3
                font-semibold
                text-green-800
                hover:bg-green-200
                transition
              "
            >
              Login
            </button>

            <button
              onClick={handleRegister}
              className="
                w-full
                rounded-xl
                bg-green-600
                py-3
                font-semibold
                text-white
                hover:bg-green-700
                transition
              "
            >
              Register
            </button>

          </div>

        </nav>

      </div>
    </>
  );
}
