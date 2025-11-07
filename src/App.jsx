import React, { useState, useEffect } from 'react';

import { FaBars, FaTimes } from 'react-icons/fa';
import Profile from './components/profile';
import Skills from './components/skills';
import Certifications from './components/certifications';
import Education from './components/education';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen((v) => !v);

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'backdrop-blur-md shadow-[0_0_30px_rgba(168,85,247,0.18)]'
            : 'backdrop-blur-sm'
        }`}
        /* fully transparent, purple bottom border */
        style={{
          background: 'transparent',
          borderBottom: '1px solid rgba(168,85,247,0.35)',
        }}
      >
        <nav className="container mx-auto px-4 flex justify-between items-center py-3">
          {/* KR Logo Badge */}
          <a href="#profile" className="inline-flex items-center gap-3">
            <span
              className="relative inline-grid place-items-center w-12 h-12 rounded-full text-lg font-black tracking-tight"
              style={{
                background:
                  'linear-gradient(#000,#000) padding-box, linear-gradient(135deg,#e879f9,#8b5cf6) border-box',
                border: '2px solid transparent',
              }}
              aria-label="KR - Home"
              title="KR - Home"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-purple-500">
                KR
              </span>
            </span>

            <span className="sr-only">Kaveetha Randili</span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 items-center">
            {['Profile', 'Skills', 'Certifications', 'Education', 'Projects'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="font-semibold text-gray-300 hover:text-white transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-fuchsia-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
            <li>
              {/* Solid gradient button like Profile.jsx */}
              <a
                href="#contact"
                className="btn-solid-gradient px-6 py-2 rounded-full font-bold transition-all duration-500 hover:scale-105"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} aria-label="Toggle navigation">
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <ul className="md:hidden flex flex-col items-center space-y-4 mt-4 pb-4 border-t border-purple-700/40 bg-black/40 backdrop-blur-md">
            {['Profile', 'Skills', 'Certifications', 'Education', 'Projects'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-fuchsia-300 transition-colors duration-300 font-semibold text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="btn-solid-gradient px-6 py-2 rounded-full font-bold transition-all duration-500 hover:scale-105"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </header>

      {/* Main */}
      <main>
        <Profile />
        <Skills />
        <Certifications />
        <Education />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative bg-gradient-to-t from-gray-900 to-black text-center py-12 border-t border-gray-800 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '30px 30px',
            }}
          />
        </div>
        <div className="relative z-10 space-y-4">
          <p className="text-gray-400 font-extrabold">
            &copy; {new Date().getFullYear()} Kaveetha Randili. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Styles */}
      <style>{`
        /* Solid purple gradient button (matches Profile.jsx vibe) */
        .btn-solid-gradient {
          background: linear-gradient(90deg,#e879f9,#8b5cf6);
          color: #fff;
          box-shadow: 0 6px 24px rgba(167,139,250,.25);
        }
        .btn-solid-gradient:hover {
          filter: saturate(110%);
          box-shadow: 0 8px 30px rgba(167,139,250,.35);
        }
      `}</style>
    </div>
  );
}

export default App;
