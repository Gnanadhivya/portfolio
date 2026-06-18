import React, { useState, useEffect } from 'react';
import {
  Home,
  User,
  Zap,
  Monitor,
  Award,
  Briefcase,
  Trophy,
  MessageSquare,
  Sun,
  Moon
} from 'lucide-react';

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      document.documentElement.style.colorScheme = 'light';
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollSections = [
        'home',
        'about',
        'education',
        'skills',
        'experience',
        'achievements',
        'projects',
        'contact'
      ];

      let current = 'home';
      const threshold = 160;

      for (const section of scrollSections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { label: 'Home', id: 'home', icon: Home },
    { label: 'About', id: 'about', icon: User },
    { label: 'Skills', id: 'skills', icon: Zap },
    { label: 'Works', id: 'projects', icon: Monitor },
    { label: 'Education', id: 'education', icon: Award },
    { label: 'Experience', id: 'experience', icon: Briefcase },
    { label: 'Trophy', id: 'achievements', icon: Trophy },
    { label: 'Contact', id: 'contact', icon: MessageSquare },
  ];

  return (
    <header
  className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-8 py-3 ${
    scrolled
      ? 'bg-white/80 dark:bg-black/75 backdrop-blur-md shadow-sm border-b border-zinc-200 dark:border-zinc-900/50'
      : 'bg-transparent'
  }`}
>
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
        {/* Logo */}
        <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
          <h1 className="text-xl sm:text-2xl font-bold tracking-widest italic text-[#8B3DFF] dark:text-[#6bfff7] transition-all duration-300 hover:scale-105">
            GNANADHIVYA
          </h1>
        </div>

        {/* Inline Top Navigation Bar */}
        <nav
          className="hidden md:flex items-center justify-center p-1.5 gap-1 sm:gap-2 rounded-full border bg-white/90 border-zinc-200/80 dark:bg-zinc-950/90 dark:border-zinc-800/85 backdrop-blur-xl shadow-md transition-all duration-300"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                aria-label={item.label}
                className={`relative transition-all duration-300 ease-out cursor-pointer flex items-center justify-center ${
                  isActive
                    ? 'bg-blue-600 text-white px-4 py-1.5 rounded-full gap-1.5 font-bold shadow-[0_4px_16px_rgba(37,99,235,0.4)] hover:bg-blue-500'
                    : 'p-2 rounded-full text-zinc-500 hover:text-black hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800/50'
                }`}
              >
                <Icon className="h-4 w-4" />
                {isActive && (
                  <span className="text-xs font-bold tracking-wide transition-opacity duration-300">
                    {item.label}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Header Actions */}
        <div className="flex items-center">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="text-gray-900 dark:text-white hover:text-[#8B3DFF] dark:hover:text-[#6bfff7] p-2 rounded-xl border border-gray-200 dark:border-zinc-800/80 hover:bg-gray-150/50 dark:hover:bg-zinc-900/80 transition-all duration-300 cursor-pointer"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4 sm:h-5 sm:w-5" /> : <Moon className="h-4 w-4 sm:h-5 sm:w-5" />}
          </button>
        </div>
      </div>
    </header>
  );
}