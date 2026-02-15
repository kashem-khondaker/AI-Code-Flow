import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenueisOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full bg-slate-950/30 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <img src="/logo.png" alt="logo" className="w-9 h-9" />
          <span className="text-xl font-semibold">
            <span className="text-white">Your</span>
            <span className="text-green-500">Home</span>
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm sm:text-sm md:text-base lg:text-lg font-medium">
          <a
            href="#home"
            className="text-gray-300 hover:text-green-500 transition "
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:text-green-500 transition"
          >
            About
          </a>
          <a
            href="#services"
            className="text-gray-300 hover:text-green-500 transition"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-green-500 transition"
          >
            Contact
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-gray-300 hover:text-green-500 transition"
        >
          {mobileMenueisOpen ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6 hover:text-red-400" />
          ) : (
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </button>

        {mobileMenueisOpen && (
          <div className="absolute top-16 left-0 right-0 md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
            <div className="p-4 sm:py-6 flex flex-col space-y-4 sm:space-y-6">
              <a
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                href="#home"
                className="text-gray-300 hover:text-green-500 transition  "
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="text-gray-300 hover:text-green-500 transition  "
              >
                About
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="text-gray-300 hover:text-green-500 transition  "
              >
                Services
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="text-gray-300 hover:text-green-500 transition  "
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
