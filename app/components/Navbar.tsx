"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from './ThemeProvider';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar - Shrinks on scroll */}
      <div className="hidden lg:block fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-5">
        <motion.nav
          className={`mx-auto transition-all duration-500 ease-out ${isScrolled ? 'max-w-4xl' : 'max-w-7xl'
            }`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg rounded-full px-8 h-[50px] flex items-center">
            <div className="w-full flex items-center justify-between">
              {/* Logo */}
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-gray-900 dark:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-lg font-bold">HomeServe Pro</span>
              </motion.button>

              {/* Desktop Navigation */}
              <nav className="flex items-center gap-8" aria-label="Main navigation">
                <button
                  onClick={() => scrollToSection('services')}
                  className="transition-all cursor-pointer duration-300 hover:scale-105 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="transition-all cursor-pointer duration-300 hover:scale-105 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="transition-all cursor-pointer duration-300 hover:scale-105 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
                >
                  How It Works
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="transition-all cursor-pointer duration-300 hover:scale-105 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
                >
                  Contact
                </button>
              </nav>

              {/* Right Side Actions */}
              <div className="flex items-center gap-3">
                {/* Theme Toggle */}
                <motion.button
                  onClick={toggleTheme}
                  className="w-9 h-9 rounded-full cursor-pointer flex items-center justify-center transition-all duration-300 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </motion.button>

                {/* CTA Button */}
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="bg-orange-600 text-white px-6 py-2 cursor-pointer rounded-full hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 text-sm font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          </div>
        </motion.nav>
      </div>

      {/* Mobile/Tablet Navbar - Does NOT shrink */}
      <motion.nav
        className="lg:hidden fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] transition-all duration-300"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg rounded-full px-6 h-[50px] flex items-center">
          <div className="w-full flex items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-900 dark:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-lg font-bold">HomeServe Pro</span>
            </motion.button>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.nav
            className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl mt-2 overflow-hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            aria-label="Mobile navigation"
          >
            <div className="px-6 py-4 space-y-2">
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full bg-orange-600 text-white px-4 py-3 rounded-xl hover:shadow-lg transition-all text-sm font-semibold"
              >
                Get Started
              </button>
            </div>
          </motion.nav>
        )}
      </motion.nav>
    </>
  );
}