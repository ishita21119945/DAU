import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800 min-h-screen flex flex-col">
      
      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        {/* Logo + Title */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="DAU Logo" className="w-8 h-8" />
          <h1 className="text-xl font-bold text-blue-900">DAU</h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/dao">DAO</Link></li>
          <li><Link to="/certify">Certify</Link></li>
          <li><Link to="/mentors">Mentors</Link></li>
          <li><Link to="/join">Join</Link></li>
        </ul>

        {/* Connect Wallet / Login Button */}
        {/* Login and Signup Buttons */}
<div className="flex items-center gap-4">
  <Link to="/login">
    <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
      Login
    </button>
  </Link>
  <Link to="/signup">
    <button className="bg-white text-blue-900 px-4 py-2 border border-blue-900 rounded hover:bg-gray-100 transition">
      Sign Up
    </button>
  </Link>
</div>

      </nav>

      {/* Hero Section */}
      <section className="bg-blue-900 text-white text-center p-16 flex-grow flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Decentralized Autonomous University
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          DAU is a transparent, community-governed education platform built on the Internet Computer. Learn, Earn, and Govern — globally.
        </p>

        {/* Explore Courses Button */}
        <button className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Explore Courses
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center p-4">
        <p>© 2025 DAU | Built on the Internet Computer</p>
      </footer>
    </div>
  );
};

export default Homepage;
