import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Book, Users, Video, GamepadIcon, Bell, Menu, X, User } from 'lucide-react';
import NotificationDropdown from './NotificationDropdown';

const Header: React.FC = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    setIsLoggedIn(!!token);
  }, []);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const closeNotifications = () => {
    setShowNotifications(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-md relative">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Book className="text-primary w-8 h-8 mr-2" />
          <Link to="/" className="text-2xl font-bold text-accent">Nagrik Aur Samvidhan</Link>
        </div>
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-6 mr-6">
            <li><Link to="/" className="flex items-center text-gray-600 hover:text-primary"><Book className="w-4 h-4 mr-1" /> Learn</Link></li>
            <li><Link to="/games" className="flex items-center text-gray-600 hover:text-primary"><GamepadIcon className="w-4 h-4 mr-1" /> Games</Link></li>
            <li><Link to="#" className="flex items-center text-gray-600 hover:text-primary"><Video className="w-4 h-4 mr-1" /> Videos</Link></li>
            <li><Link to="/community" className="flex items-center text-gray-600 hover:text-primary"><Users className="w-4 h-4 mr-1" /> Community</Link></li>
          </ul>
        </nav>
        <div className="flex items-center">
          <div ref={notificationRef} className="relative">
            <button
              onClick={toggleNotifications}
              className="relative p-2 text-gray-600 hover:text-primary focus:outline-none"
            >
              <Bell className="w-6 h-6" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                3
              </span>
            </button>
            {showNotifications && (
              <div className="absolute right-0 mt-2 z-50">
                <NotificationDropdown onClose={closeNotifications} />
              </div>
            )}
          </div>
          {isLoggedIn ? (
            <div className="relative ml-4">
              <button className="flex items-center text-gray-600 hover:text-primary focus:outline-none">
                <User className="w-6 h-6 mr-1" />
                <span>Profile</span>
              </button>
              <button onClick={handleLogout} className="ml-4 text-gray-600 hover:text-primary focus:outline-none">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="ml-4 text-gray-600 hover:text-primary focus:outline-none">
              Login
            </Link>
          )}
          <button
            onClick={toggleMobileMenu}
            className="ml-4 md:hidden text-gray-600 hover:text-primary focus:outline-none"
          >
            {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {showMobileMenu && (
        <nav className="md:hidden bg-white py-4 px-4">
          <ul className="space-y-4">
            <li><Link to="/" className="flex items-center text-gray-600 hover:text-primary"><Book className="w-4 h-4 mr-2" /> Learn</Link></li>
            <li><Link to="/games" className="flex items-center text-gray-600 hover:text-primary"><GamepadIcon className="w-4 h-4 mr-2" /> Games</Link></li>
            <li><Link to="#" className="flex items-center text-gray-600 hover:text-primary"><Video className="w-4 h-4 mr-2" /> Videos</Link></li>
            <li><Link to="/community" className="flex items-center text-gray-600 hover:text-primary"><Users className="w-4 h-4 mr-2" /> Community</Link></li>
            {isLoggedIn ? (
              <>
                <li><Link to="/profile" className="flex items-center text-gray-600 hover:text-primary"><User className="w-4 h-4 mr-2" /> Profile</Link></li>
                <li><button onClick={handleLogout} className="text-gray-600 hover:text-primary">Logout</button></li>
              </>
            ) : (
              <li><Link to="/login" className="text-gray-600 hover:text-primary">Login</Link></li>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;