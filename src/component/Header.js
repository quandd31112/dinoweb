import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';

const Header = ({ title, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold hover:text-yellow-400 transition-colors duration-300">
        {title}
      </Link>
      <nav className="space-x-6 flex items-center">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive ? "text-yellow-400" : "hover:text-yellow-400"
          }
        >
          Trang chủ
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
