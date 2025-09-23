import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <img src={logo} alt="Sian Technologies" className="h-10" />
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/about" className="hover:text-blue-400">About</Link>
        <Link to="/products" className="hover:text-blue-400">Products</Link>
        <Link to="/services" className="hover:text-blue-400">Services</Link>
        <Link to="/contact" className="hover:text-blue-400">Contact</Link>
      </div>
    </nav>
  );
}
