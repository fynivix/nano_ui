import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";

import {
  Menu,
  X,
  LayoutDashboard,
  Package,
  ShoppingCart,
  LogOut,
  User,
} from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const handleLogout = () => {
    dispatch(logout());

    navigate("/login", {
      replace: true,
    });

    setMobileMenuOpen(false);
  };

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={18} />,
      path: "/dashboard",
    },
    {
      name: "Products",
      icon: <Package size={18} />,
      path: "/products",
    },
    {
      name: "Orders",
      icon: <ShoppingCart size={18} />,
      path: "/orders",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 shadow-lg">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30">
              <span className="text-white font-bold">
                M
              </span>
            </div>

            <div>
              <h1 className="text-xl font-bold text-white">
                MyShop ERP
              </h1>

              <p className="text-xs text-gray-400 hidden sm:block">
                Business Management
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">

            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() =>
                  navigate(item.path)
                }
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-300 hover:bg-gray-800 hover:text-green-400 transition"
              >
                {item.icon}
                {item.name}
              </button>
            ))}

          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">

            {/* User */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-800">

              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <User size={16} />
              </div>

              <span className="text-sm text-gray-300">
                Admin
              </span>

            </div>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl transition"
            >
              <LogOut size={18} />
              Logout
            </button>

          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() =>
              setMobileMenuOpen(
                !mobileMenuOpen
              )
            }
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 py-4 space-y-2">

          {/* User */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-800 mb-4">

            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
              <User size={18} />
            </div>

            <div>
              <p className="font-medium">
                Admin User
              </p>

              <p className="text-sm text-gray-400">
                administrator
              </p>
            </div>

          </div>

          {/* Navigation */}
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                navigate(item.path);
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-gray-800 hover:text-green-400 transition"
            >
              {item.icon}
              {item.name}
            </button>
          ))}

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500 hover:bg-red-600 transition"
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>
      )}

    </nav>
  );
}