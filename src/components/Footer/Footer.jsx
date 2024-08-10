import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-indigo-600 text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col justify-between">
            <div className="mb-6">
              <Link to='/'>
                <Logo width="70px" />
              </Link>
            </div>
            <div className="text-sm text-gray-300">
              &copy; Copyright 2024. All Rights Reserved by CodeTitans.
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold uppercase text-gray-100 mb-4">Company</h3>
            <ul>
              <li className="mb-2">
                <Link to="/" className="text-gray-300 hover:text-yellow-400 transition duration-300">Features</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-gray-300 hover:text-yellow-400 transition duration-300">Pricing</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-gray-300 hover:text-yellow-400 transition duration-300">HackOut'24</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-yellow-400 transition duration-300">DAIICT</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold uppercase text-gray-100 mb-4">Sumpot</h3>
            <ul>
              <li className="mb-2">
                <Link to="/" className="text-gray-300 hover:text-yellow-400 transition duration-300">Account</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-gray-300 hover:text-yellow-400 transition duration-300">Help</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-gray-300 hover:text-yellow-400 transition duration-300">Contact Us</Link>
              </li>
              <li className="mb-2">
                <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition duration-300">GitHub</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold uppercase text-gray-100 mb-4">Made By</h3>
            <ul>
              <li className="mb-2">
                <Link to="/" className="text-gray-300 hover:text-yellow-400 transition duration-300">Om Kariya</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-gray-300 hover:text-yellow-400 transition duration-300">Keyur Kurani</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-yellow-400 transition duration-300">Vandan Khambholiya</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-yellow-400 transition duration-300">Krushil Kalariya</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

