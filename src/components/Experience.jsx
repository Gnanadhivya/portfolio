import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Trophy, Calendar, Terminal, Code, Cpu, X, Image as ImageIcon } from 'lucide-react';

export default function Experience() {
  const sectionRef = useRef(null);
  const [imageErrors, setImageErrors] = useState({});
  const [activeMedia, setActiveMedia] = useState(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = sectionRef.current?.querySelectorAll(
      '.fade-in, .slide-in-left, .slide-in-right'
    );
    animatedElements?.forEach((el) => observer.observe(el));

    return () => {
      animatedElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Prevent body scrolling behind lightbox modal overlay
  useEffect(() => {
    if (activeMedia) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeMedia]);

  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const internships = [
    {
      id: 'nsic',
      company: 'NSIC Technical Service Centre, Chennai',
      role: 'Web Development Intern',
      duration: 'June 2025 - July 2025',
      image: '/certs/nsic1.jpg',
      bullets: [
        'Developed and maintained responsive web applications using HTML, CSS, and JavaScript, enhancing user experience.',
        'Implemented front-end features, optimizing load times by 15% through efficient code.',
        'Collaborated with senior developers on API integration for dynamic content delivery.',
        'Gained practical experience with version control systems like Git.',
      ],
      fallbackSvg: (
        <div className="w-full h-full bg-gradient-to-br from-indigo-950 to-blue-900 flex flex-col items-center justify-center text-white/50 p-4 border border-white/5">
          <Terminal className="h-12 w-12 text-[#6bfff7] mb-2" />
          <span className="text-[10px] font-black tracking-widest uppercase">Web Dev Workspace</span>
        </div>
      ),
    },
    {
      id: 'anjana',
      company: 'Anjana InfoTech, Rajapalayam',
      role: 'Data Analytics Intern',
      duration: 'Nov 2025 - Dec 2025',
      image: '/certs/Data-analytics.png',
      bullets: [
        'Engineered data transformation pipelines using Python and SQL to clean, filter, and structure raw business operational data.',
        'Built comprehensive data visualization dashboards to surface key metrics, accelerating internal reporting efficiency.',
      ],
      fallbackSvg: (
        <div className="w-full h-full bg-gradient-to-br from-indigo-950 to-purple-950 flex flex-col items-center justify-center text-white/50 p-4 border border-white/5">
          <Code className="h-12 w-12 text-[#fafb63] mb-2" />
          <span className="text-[10px] font-black tracking-widest uppercase">Data Analytics Node</span>
        </div>
      ),
    },
  ];

  const achievements = [
    {
      id: 'takkertrivia',
      institution: 'Mepco Schlenk Engineering College, Sivakasi',
      event: 'Takker Trivia Contest',
      year: '2025',
      prize: 'Second Prize & Cash Award',
      image: '/certs/mepco.jpeg',
      stageImage: '/certs/certificate.jpeg',
      isDualMedia: true,
      details: [
        'Orchestrated a successful inter-college trivia event, Takker Trivia, engaging over 100 participants.',
        'Managed all aspects from question curation and event promotion to logistics and scoring, ensuring a seamless experience.',
      ],
      fallbackSvg: (
        <div className="w-full h-32 bg-gradient-to-br from-purple-900 to-indigo-900 flex flex-col items-center justify-center text-[#fafb63] border border-white/5 rounded-t-xl">
          <Trophy className="h-10 w-10 animate-pulse" />
          <span className="text-[9px] font-black uppercase tracking-widest text-white/70 mt-1">Trivia Trophy Winner</span>
        </div>
      ),
    },
    {
      id: 'science-day-2024',
      institution: 'P.S.R. Engineering College (Science & Humanities)',
      event: 'National Science Day Drawing Competition',
      year: '2024',
      prize: 'Third Prize (III-Prize)',
      image: '/certs/Drawing photo.jpeg',
      stageImage: '/certs/drawing.jpeg',
      isDualMedia: true,
      details: [
        'Awarded 3rd prize out of numerous institutional competitors in the fine arts rendering challenge during National Science Day.',
        'Recognized with an official commemorative shield award and merit certification profile background document.',
      ],
      fallbackSvg: (
        <div className="w-full h-32 bg-gradient-to-br from-amber-950 to-orange-900 flex flex-col items-center justify-center text-amber-400 border border-white/5 rounded-t-xl">
          <Trophy className="h-10 w-10" />
          <span className="text-[9px] font-black uppercase tracking-widest text-white/70 mt-1">Drawing Honor Variant</span>
        </div>
      ),
    },
    {
      id: 'hackathons',
      institution: 'National & Collegiate Competitions',
      event: 'Hackathon Participation',
      year: '2024 - 2026',
      image: '/achievements/hackathons.png',
      details: [
        'Participated in multiple national and collegiate hackathons, collaborating in teams of 3-4 to build prototype applications under strict 24-48h constraints.',
      ],
      fallbackSvg: (
        <div className="w-full h-32 bg-gradient-to-br from-emerald-950 to-teal-900 flex flex-col items-center justify-center text-[#6bfff7] border border-white/5 rounded-t-xl">
          <Cpu className="h-10 w-10 animate-bounce" />
          <span className="text-[9px] font-black uppercase tracking-widest text-white/70 mt-1">Hackathon Showcase</span>
        </div>
      ),
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl italic font-extrabold mb-4 fade-in text-[#8B3DFF] dark:text-[#6bfff7]">
            Experience & Achievements
          </h2>
          <p className="text-lg text-gray-700 dark:text-[#fafb63] max-w-2xl mx-auto fade-in leading-relaxed font-semibold">
            Bridging technical knowledge with hands-on internships and collaborative accomplishments.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: Internships */}
          <div className="lg:col-span-7 space-y-8 slide-in-left">
            <h3 className="text-2xl font-extrabold italic text-[#8B3DFF] dark:text-[#6bfff7] flex items-center gap-2 mb-6">
              <Briefcase className="h-6 w-6" /> Internships
            </h3>

            <div className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-4 pl-6 space-y-10">
              {internships.map((intern) => (
                <div key={intern.id} className="relative group">
                  <span className="absolute -left-[31px] top-1.5 bg-[#8B3DFF] dark:bg-[#6bfff7] h-4 w-4 rounded-full border-4 border-white dark:border-black transition-transform duration-300 group-hover:scale-125 shadow" />

                  <div className="bg-gray-50 dark:bg-gray-955 border border-gray-150 dark:border-gray-800/80 rounded-xl overflow-hidden shadow-md">
                    <div className="w-full aspect-video md:aspect-[21/9] overflow-hidden relative border-b border-gray-150 dark:border-gray-800">
                      {!imageErrors[intern.id] ? (
                        <img
                          src={intern.image}
                          alt={intern.company}
                          className="w-full h-full object-cover"
                          onError={() => handleImageError(intern.id)}
                        />
                      ) : (
                        intern.fallbackSvg
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                        <div>
                          <h4 className="font-extrabold text-lg text-zinc-900 dark:text-black leading-tight">
                            {intern.role}
                          </h4>
                          <p className="text-[#8B3DFF] dark:text-[#6bfff7] text-sm font-black mt-1">
                            {intern.company}
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-gray-600 dark:text-gray-400 whitespace-nowrap bg-white dark:bg-black px-2.5 py-1 rounded border border-gray-200 dark:border-gray-800">
                          <Calendar className="h-3 w-3" /> {intern.duration}
                        </span>
                      </div>

                      <ul className="list-disc pl-5 space-y-2 text-zinc-800 dark:text-black-300 text-sm font-semibold leading-relaxed">
                        {intern.bullets.map((bullet, bIdx) => (
                          <li key={bIdx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="achievements" className="lg:col-span-5 space-y-8 slide-in-right">
            <h3 className="text-2xl font-extrabold italic text-[#8B3DFF] dark:text-[#6bfff7] flex items-center gap-2 mb-6">
              <Trophy className="h-6 w-6" /> Achievements
            </h3>

            <div className="space-y-6">
              {achievements.map((ach) => (
                <div
                  key={ach.id}
                  className="bg-gray-55 dark:bg-gray-955 border border-gray-200 dark:border-gray-800/80 rounded-2xl shadow-lg relative overflow-hidden group hover:scale-[1.01] transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00C4CC] to-[#8B3DFF] dark:from-[#FAFB63] dark:to-[#6BFFF7] z-10" />
                  
                  {/* Visual Header Thumbnail */}
                  <div className="w-full h-36 overflow-hidden relative border-b border-zinc-150 dark:border-zinc-900 cursor-pointer" onClick={() => setActiveMedia(ach.image)}>
                    {!imageErrors[ach.id] ? (
                      <img
                        src={ach.image}
                        alt={ach.event}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                        onError={() => handleImageError(ach.id)}
                      />
                    ) : (
                      ach.fallbackSvg
                    )}
                  </div>

                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-yellow-100 dark:bg-yellow-955/40 text-yellow-800 dark:text-yellow-400 text-xs font-black rounded-full mb-3 uppercase tracking-wider">
                      {ach.prize}
                    </span>

                    <h4 className="font-extrabold text-lg text-zinc-900 dark:text-white mb-1">
                      {ach.event}
                    </h4>
                    <p className="text-xs font-bold text-gray-600 dark:text-gray-400 mb-4">
                      {ach.institution} • {ach.year}
                    </p>

                    <ul className="list-disc pl-5 space-y-2 text-zinc-800 dark:text-zinc-300 text-sm font-semibold leading-relaxed mb-6">
                      {ach.details.map((detail, dIdx) => (
                        <li key={dIdx}>{detail}</li>
                      ))}
                    </ul>

                    {/* Conditional Action Render Block for Presentation Modals */}
                    {ach.isDualMedia && (
                      <div className="flex flex-col sm:flex-row gap-2.5 border-t border-gray-150 dark:border-gray-900 pt-4 mt-4">
                        <button
                          onClick={() => setActiveMedia(ach.image)}
                          className="flex-1 flex items-center justify-center gap-1.5 text-xs font-extrabold px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer text-[#8B3DFF] dark:text-[#6bfff7]"
                        >
                          <ImageIcon className="h-3.5 w-3.5" />
                          <span>View Stage Presentation</span>
                        </button>
                        <button
                          onClick={() => setActiveMedia(ach.stageImage)}
                          className="flex-1 flex items-center justify-center gap-1.5 text-xs font-extrabold px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer text-[#8B3DFF] dark:text-[#6bfff7]"
                        >
                          <ImageIcon className="h-3.5 w-3.5" />
                          <span>View Certificate & Trophy</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ==================== GLOBAL MEDIA PORTFOLIO LIGHTBOX ==================== */}
      {activeMedia && (
        <div 
          onClick={() => setActiveMedia(null)}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black/90 backdrop-blur-sm cursor-pointer animate-fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] overflow-hidden flex flex-col items-center rounded-2xl bg-black/40 border border-zinc-800 p-1 shadow-2xl"
          >
            <button
              onClick={() => setActiveMedia(null)}
              className="absolute top-4 right-4 text-white bg-black/60 hover:bg-black/80 backdrop-blur-sm p-2 rounded-full transition-colors z-20 cursor-pointer border border-white/10"
              aria-label="Close Viewport Overlay"
            >
              <X className="h-5 w-5" />
            </button>

            <img 
              src={activeMedia} 
              alt="Achievement proof verification preview" 
              className="max-w-full max-h-[80vh] object-contain rounded-xl"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
          <p className="text-xs font-bold text-zinc-500 tracking-wide mt-3 uppercase pointer-events-none">
            Click outside boundaries to collapse window preview
          </p>
        </div>
      )}
    </section>
  );
}