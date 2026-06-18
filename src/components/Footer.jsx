import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white dark:bg-gray-950 text-gray-500 dark:text-gray-400 py-10 transition-colors duration-300 border-t border-gray-150 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm font-semibold tracking-wide">
        <p>
          &copy; {currentYear === 2026 ? '2026' : `2026 - ${currentYear}`} Gnanadhivya G. All rights reserved.
        </p>
        <p className="mt-2 text-xs text-gray-450 dark:text-gray-500">
          Built with  React, Tailwind CSS, and Modern AI Technologies.
        </p>
      </div>
    </footer>
  );
}
