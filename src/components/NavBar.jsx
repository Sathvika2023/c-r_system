import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const NavBar = () => {
  const [academicsOpen, setAcademicsOpen] = useState(false);

  const navItems = ['Home', 'Research', 'Library', 'Alumni', 'CSE Clubs'];

  return (
    <nav className="bg-gray-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="h-10 w-10"
              src="/Images/logo-blue.png"
              alt="CSE Department Logo"
            />
          </div>
          {/* Navigation Items */}
          <div className="hidden md:flex space-x-8 items-center relative">
            <div
              className="relative"
              onMouseEnter={() => setAcademicsOpen(true)}
              onMouseLeave={() => setAcademicsOpen(false)}
            >
              <button
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
              >
                Academics
              </button>
              {academicsOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-40 bg-gray-700 rounded-md shadow-lg z-10"
                  onMouseEnter={() => setAcademicsOpen(true)}
                  onMouseLeave={() => setAcademicsOpen(false)}
                >
                  <Link
                    to="/faculty"
                    className="block px-4 py-2 text-sm hover:bg-gray-600"
                  >
                    Faculty
                  </Link>
                  <Link
                    to="/students"
                    className="block px-4 py-2 text-sm hover:bg-gray-600"
                  >
                    Students
                  </Link>
                </div>
              )}
            </div>
            {navItems.map((item) => {
              const itemSlug = item.toLowerCase().replace(/\s+/g, '-');
              // Check if item is 'CSE Clubs' for page navigation
              return item === 'CSE Clubs' ? (
                <Link
                  key={item}
                  to="/cse-clubs" // Navigate to the CSE Clubs page
                  className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item}
                </Link>
              ) : (
                <Link
                  key={item}
                  to={item.toLowerCase() === 'home' ? '/' : `/${itemSlug}`} // Scroll to the section
                  className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
