import React from 'react';

const NavBar = () => {
  const navItems = ['Academics', 'Students', 'Research', 'Library', 'Alumni', 'CSE Clubs'];

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="h-10 w-10"
              src="/logo192.png"
              alt="CSE Department Logo"
            />
          </div>
          {/* Navigation Items */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
