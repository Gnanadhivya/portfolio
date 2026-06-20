import React, { useState } from 'react';
import { User, Download } from 'lucide-react';
import BackgroundParticles from './BackgroundParticles';

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    // Open hero.jsx and change the top section wrapper to this:
<section
  id="home"
  className="relative min-h-screen flex items-center justify-center transition-colors duration-300 overflow-hidden"
>
      {/* Interactive Background Particles */}
      <BackgroundParticles />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="animate-floating">
          {/* Profile Card */}
          <div className="hero-card rounded-2xl p-8 sm:p-12 shadow-2xl max-w-[450px] min-h-[450px] mx-auto transition-all duration-300 hover:scale-103 flex flex-col items-center justify-center text-center">
            
            {/* Avatar Container with Auto-Fallback */}
            <div className="relative w-32 h-32 rounded-full flex items-center justify-center mb-6 overflow-hidden bg-gradient-to-r from-[#6bfff7] to-[#fafb63] dark:from-[#6bfff7] dark:to-[#fafb63] light:from-[#a78bfa] light:to-[#38a9f2] p-1 shadow-lg group cursor-pointer" title="Add your photo as profile.png in the public folder to display it here">
              {!imageError ? (
                <img
                  src="/certs/profile1.png"
                  alt="Gnanadhivya G"
                  className="w-full h-full object-cover rounded-full bg-black/40"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full bg-black/60 dark:bg-black/80 light:bg-white/90 rounded-full flex flex-col items-center justify-center transition-all duration-300 group-hover:bg-black/40">
                  <User className="h-14 w-14 text-[#6bfff7] dark:text-[#6bfff7] light:text-[#8B3DFF] group-hover:scale-105 transition-transform" />
                  <span className="text-[10px] font-bold text-gray-400 dark:text-gray-400 light:text-gray-600 mt-1 opacity-80 group-hover:opacity-100 uppercase tracking-widest">
                    GG
                  </span>
                </div>
              )}
            </div>

            {/* Name */}
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-1 text-[#8B3DFF] dark:text-[#6bfff7] transition-colors duration-300">
              GNANADHIVYA G
            </h2>

            {/* Subtitle */}
<p className="text-neutral-600 dark:text-zinc-400 font-semibold mb-6 tracking-wide text-sm sm:text-base">
  Software Developer
</p>

{/* Objective-aligned Quotes */}
<div className="mb-8 space-y-2 max-w-sm">
  <p className="text-neutral-700 dark:text-zinc-300 italic text-sm leading-relaxed">
    "Driven to build scalable, efficient digital systems."
  </p>
  <p className="text-neutral-700 dark:text-zinc-300 italic text-sm leading-relaxed">
    "Demonstrating strong problem-solving logic through real-world applications."
  </p>
</div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-3 w-full mt-auto">
              <button
                onClick={() => scrollToSection('projects')}
                className="flex-1 px-5 py-3 rounded-xl font-bold transition-all duration-300 cursor-pointer bg-gradient-to-r from-[#6bfff7] to-[#4fd1c7] dark:from-[#6bfff7] dark:to-[#4fd1c7] light:from-[#a78bfa] light:to-[#8b5cf6] text-black dark:text-black light:text-white shadow-md hover:shadow-cyan-400/20 hover:-translate-y-0.5"
              >
                View My Work
              </button>
              
              {/* Replaced 'Get In Touch' button with Resume Link Action */}
              <a
                href="/Gnanadhivya_resume.pdf"
                download="Gnanadhivya_resume.pdf"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold transition-all duration-350 cursor-pointer bg-gradient-to-r from-[#fafb63] to-[#f0f14a] dark:from-[#fafb63] dark:to-[#f0f14a] light:from-[#38a9f2] light:to-[#2563eb] text-black dark:text-black light:text-white shadow-md hover:shadow-yellow-400/20 hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}