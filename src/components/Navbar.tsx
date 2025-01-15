import React, { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import Headline from "./Headline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1A1C1F] text-white pb-4 fixed top-0 left-0 right-0 z-50">
      <Headline />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and primary navigation */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="text-emerald-400 font-bold text-xl">Logo</div>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="flex items-center px-3 py-2 text-lg hover:underline decoration-emerald-400 underline-offset-4"
                >
                  Platform
                </a>
                <a
                  href="#"
                  className="px-3 py-2 text-lg hover:underline decoration-emerald-400 underline-offset-4"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="flex items-center px-3 py-2 text-lg hover:underline decoration-emerald-400 underline-offset-4"
                >
                  Solutions
                </a>
                <a
                  href="#"
                  className="px-3 py-2 text-lg hover:underline decoration-emerald-400 underline-offset-4"
                >
                  Enterprise
                </a>
                <a
                  href="#"
                  className="px-3 py-2 text-lg hover:underline decoration-emerald-400 underline-offset-4"
                >
                  Developers
                </a>
                <a
                  href="#"
                  className="px-3 py-2 text-lg hover:underline decoration-emerald-400 underline-offset-4"
                >
                  Resources
                </a>
              </div>
            </div>
          </div>

          {/* Secondary Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-700 rounded-full">
              <Search className="h-5 w-5" />
            </button>
            <a
              href="#"
              className="text-lg hover:underline decoration-emerald-400 underline-offset-4"
            >
              Log in
            </a>
            <a
              href="#"
              className="text-lg border border-emerald-400 text-emerald-500 px-4 py-2 rounded-md"
            >
              Get Started Free
            </a>
            <a
              href="#"
              className="text-lg border border-white  px-4 py-2 rounded-md"
            >
              Get Pricing
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 text-base hover:underline decoration-emerald-400 underline-offset-4"
            >
              Platform
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base hover:underline decoration-emerald-400 underline-offset-4"
            >
              Pricing
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base hover:underline decoration-emerald-400 underline-offset-4"
            >
              Solutions
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base hover:underline decoration-emerald-400 underline-offset-4"
            >
              Enterprise
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base hover:underline decoration-emerald-400 underline-offset-4"
            >
              Developers
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base hover:underline decoration-emerald-400 underline-offset-4"
            >
              Resources
            </a>
            <div className="pt-4 space-y-2">
              <a
                href="#"
                className="block text-center bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-md"
              >
                Get Started Free
              </a>
              <a
                href="#"
                className="block text-center border border-gray-600 hover:border-gray-400 px-4 py-2 rounded-md"
              >
                Get Pricing
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
