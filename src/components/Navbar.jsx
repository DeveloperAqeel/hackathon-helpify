import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  // Custom logic to handle the "Home" pill since it's the root path
  const isHomeActive = location.pathname === '/';
  const isAICenter = location.pathname === '/ai-center';
  
  const navLinkClass = ({ isActive }) => 
    `text-[14px] font-bold px-5 py-2.5 rounded-full transition-colors ${isActive ? 'bg-[#D6E6E1] text-primary' : 'text-textMuted hover:text-primary'}`;

  // Custom class specifically for Home because of exact matching issues in React Router sometimes
  const homeLinkClass = `text-[14px] font-bold px-5 py-2.5 rounded-full transition-colors ${isHomeActive ? 'bg-[#D6E6E1] text-primary' : 'text-textMuted hover:text-primary'}`;

  return (
    <nav className="sticky top-0 z-50 bg-[#F5F2EB]/90 backdrop-blur-md border-b border-[#EAECEB]">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20 gap-4">
          
          {/* Left Side: Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white font-bold text-[19px]">
              H
            </div>
            <Link to="/" className="font-bold text-[16px] tracking-tight text-primary">HelpHub AI</Link>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden lg:flex flex-1 justify-center items-center space-x-1">
            {isHomeActive ? (
              /* Home Center Links */
              <>
                <Link to="/" className={homeLinkClass}>Home</Link>
                <NavLink to="/explore" className={navLinkClass}>Explore</NavLink>
                <NavLink to="/leaderboard" className={navLinkClass}>Leaderboard</NavLink>
                <NavLink to="/ai-center" className={navLinkClass}>AI Center</NavLink>
              </>
            ) : isAICenter ? (
              /* AI Center specific links */
              <>
                <NavLink to="/dashboard" className={navLinkClass}>Dashboard</NavLink>
                <NavLink to="/create-request" className={navLinkClass}>Create Request</NavLink>
                <NavLink to="/ai-center" className={navLinkClass}>AI Center</NavLink>
              </>
            ) : (
              /* App Center Links (Default) */
              <>
                <NavLink to="/dashboard" className={navLinkClass}>Dashboard</NavLink>
                <NavLink to="/explore" className={navLinkClass}>Explore</NavLink>
                <NavLink to="/create-request" className={navLinkClass}>Create Request</NavLink>
                <NavLink to="/messages" className={navLinkClass}>Messages</NavLink>
                <NavLink to="/profile" className={navLinkClass}>Profile</NavLink>
              </>
            )}
          </div>

          {/* Right Side: Action Buttons */}
          <div className="flex items-center space-x-4 shrink-0">
            {isHomeActive ? (
              /* Public Right Buttons */
              <>
                <Link to="/notifications" className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full bg-white border border-gray-200 text-[14px] font-medium text-textMuted hover:text-primary hover:bg-gray-50 transition-colors shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse"></span>
                  Live community signals
                </Link>
                <Link to="/auth" className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full text-[14px] font-bold transition-colors shadow-sm inline-block">
                  Join the platform
                </Link>
              </>
            ) : isAICenter ? (
               /* AI Center Right (Empty as per design) */
               <div className="w-24"></div>
            ) : (
              /* App Right Buttons */
              <>
                <NavLink to="/notifications" className={({ isActive }) => `text-[14px] font-bold px-6 py-2.5 rounded-full border border-gray-200 transition-colors shadow-sm bg-white ${isActive ? 'text-primary' : 'text-textMuted hover:text-primary hover:bg-gray-50'}`}>
                  Notifications
                </NavLink>
                <Link to="/ai-center" className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full text-[14px] font-bold transition-colors shadow-sm inline-block">
                  Open AI Center
                </Link>
              </>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
