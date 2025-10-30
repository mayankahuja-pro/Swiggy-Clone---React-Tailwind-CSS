import React from 'react';

const Header = () => {
  const navItems = [
    { name: 'Search', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> },
    { name: 'Offers', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V11a1 1 0 011-1h4a1 1 0 011 1v.5a.5.5 0 001 0V11a2 2 0 00-2-2H8a2 2 0 00-2 2v.5a.5.5 0 001 0zM12 4h.01M17 4h.01M17 20h.01M7 20h.01M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
    { name: 'Help', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9.288a.5.5 0 01.32.748l-.348.694m0 0a.5.5 0 00.32.748l1.794 3.588a.5.5 0 00.902 0l1.794-3.588a.5.5 0 00.32-.748l-.348-.694m0 0a.5.5 0 01.32-.748l1.794-3.588a.5.5 0 00.902 0l1.794 3.588a.5.5 0 00.32.748l-.348.694" /></svg> },
    { name: 'Sign In', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> },
    { name: 'Cart', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg p-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
        <div className="flex items-center space-x-6">
          <div className="text-2xl font-extrabold text-orange-500 hover:scale-105 transition-transform duration-200 cursor-pointer tracking-wider">
            SWIGGY
          </div>

          <div className="flex items-center space-x-2 cursor-pointer group">
            <div className="font-bold text-sm text-gray-900 border-b-2 border-gray-900 group-hover:text-orange-500 group-hover:border-orange-500 transition-colors duration-200">
              Jodhpur
            </div>
            <div className="text-gray-500 text-sm truncate">
              Paota, Near Bus Stand...
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map(item => (
            <a
              key={item.name}
              href="#"
              className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 font-semibold text-base transition-colors duration-200 group"
            >
              {item.icon}
              <span>{item.name}</span>
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
        </div>
      </div>
    </header>
  );
};

export default Header;