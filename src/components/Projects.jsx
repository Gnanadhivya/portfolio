import React, { useEffect, useRef, useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  Award, 
  CheckCircle2, 
  Briefcase, 
  Leaf, 
  ShieldAlert, 
  FolderGit2 
} from 'lucide-react';

export default function Projects() {
  const sectionRef = useRef(null);
  const [lightboxCert, setLightboxCert] = useState(null);
  const [projectImageErrors, setProjectImageErrors] = useState({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = sectionRef.current?.querySelectorAll('.fade-in');
    animatedElements?.forEach((el) => observer.observe(el));

    return () => {
      animatedElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Prevent body from scrolling behind modals when open
  useEffect(() => {
    if (lightboxCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [lightboxCert]);

  const handleProjectImageError = (id) => {
    setProjectImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const handleLiveDemoRedirect = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const projects = [
    {
      id: 'job-platform',
      title: 'Job & Internship Application Platform',
      year: '2024',
      gradient: 'from-blue-500/80 to-cyan-500/80',
      description:
        'Developed using React.js and Spring Boot. Implemented JWT-based authentication and role-based access control. Designed REST APIs for job posting and application management. Integrated MySQL database for secure data handling. Added resume upload and job tracking features.',
      tags: ['React.js', 'Spring Boot', 'JWT', 'REST APIs', 'MySQL'],
      codeLink: 'https://github.com/Gnanadhivya/CareerSphere',
      demoLink: 'https://carrersphere.vercel.app/', // Replace with production URL when ready
      icon: <Briefcase className="h-5 w-5 text-white" />,
      image: '/certs/jobInternship.png',
    },
    {
      id: 'nutripack',
      title: 'NutriPack – Smart Sustainable Food Packaging',
      year: '2025',
      note: 'MSME Innovation Project',
      gradient: 'from-emerald-500/80 to-green-500/80',
      description:
        'Designed biodegradable food packaging using natural waste materials and sustainable processing methods. Proposed low-cost rural-friendly packaging solution with environmental benefits.',
      tags: ['Sustainable Design', 'Bio-materials', 'MSME Innovation', 'Research'],
      codeLink: null,
      demoLink: null, // Set link string if a research site goes live
      icon: <Leaf className="h-5 w-5 text-white" />,
      image: '/project-screens/nutripack.png',
    },
    {
      id: 'cyberbullying',
      title: 'Cyberbullying & Spam Detection System',
      year: '2026',
      gradient: 'from-fuchsia-500/80 to-pink-500/80',
      description:
        'Built an ML-based application to identify cyberbullying and spam content using NLP techniques. Improved harmful message detection through text classification and preprocessing.',
      tags: ['Python', 'Machine Learning', 'NLP', 'Text Classification', 'Preprocessing'],
      codeLink: 'https://github.com/Gnanadhivya/cyberbullying-Application',
      demoLink: 'https://cyberbullying-app-model.vercel.app/', // Replace with production URL when ready
      icon: <ShieldAlert className="h-5 w-5 text-white" />,
      image: '/certs/cyberbullying logo.png',
    },
    {
      id: 'portfolio',
      title: 'Gnanadhivya Portfolio Website',
      year: '2026',
      gradient: 'from-violet-500/80 to-indigo-500/80',
      description:
        'A highly polished, interactive React application styled with Tailwind CSS, utilizing custom particle backgrounds, light/dark responsive toggles, dynamic timelines, and EmailJS integrations.',
      tags: ['React.js', 'Tailwind CSS', 'Vite', 'EmailJS', 'Lucide Icons'],
      codeLink: 'https://github.com/Gnanadhivya/portfolio',
      demoLink: 'https://portfolio-gnanadhivya.vercel.app/', // Points to production link address
      icon: <FolderGit2 className="h-5 w-5 text-white" />,
      image: '/certs/portfolio logo.jpg',
    },
  ];

  const certifications = [
    {
      id: 'oracle',
      title: 'OCI 2025 Certified Generative AI Professional, Developer Professional & Analytics Cloud 2025 Professional',
      issuer: 'Oracle',
      date: 'Sept 2025',
      image: '/certs/oracle.png',
      iconColor: 'text-orange-500 dark:text-orange-400',
    },
    {
      id: 'nptel',
      title: 'Elite Certification in Cloud Computing',
      issuer: 'NPTEL',
      date: 'June - Oct 2025',
      image: '/certs/nptel.png',
      iconColor: 'text-blue-500 dark:text-blue-400',
    },
    {
      id: 'microsoft',
      title: 'Career Essentials in Generative AI, Learning Data Analytics, SQL & Groovy',
      issuer: 'Microsoft & LinkedIn Learning',
      date: '2026',
      image: '/certs/microsoft.png',
      iconColor: 'text-purple-500 dark:text-purple-400',
    },
    {
      id: 'linkedIn learning',
      title: 'Prompting with Agentic Techniques, Learning Data Analytics, SQL & Groovy,Confident Communication,Figma Essential, & 10 more',
      issuer: ' LinkedIn Learning',
      date: '2026',
      image: '/certs/prompting.png',
      iconColor: 'text-purple-500 dark:text-purple-400',
    },
    {
      id: 'novitech',
      title: 'UI/UX Course Certificate',
      issuer: 'NoviTech R&D Private Limited',
      date: 'July - Aug 2025',
      image: '/certs/uiux.png',
      iconColor: 'text-cyan-500 dark:text-cyan-400',
    },
    {
      id: 'infosys',
      title: 'Introduction to Data Science',
      issuer: 'Infosys',
      date: '2025',
      image: '/certs/infosys.png',
      iconColor: 'text-green-500 dark:text-green-400',
    },
    {
      id: 'microsoft1',
      title: 'Perform Analytics in PowerBi ',
      issuer: ' Microsoft',
      date: '2026',
      image: '/certs/microsoft2.png',
      iconColor: 'text-purple-500 dark:text-purple-400',
    },
    {
      id: 'IBM',
      title: 'Learn Programming with Java',
      issuer: ' IBM Skills Build',
      date: '2025',
      image: '/certs/ibm.png',
      iconColor: 'text-purple-500 dark:text-purple-400',
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Projects Sub-section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 fade-in italic text-[#8B3DFF] dark:text-[#6bfff7]">
              Featured Works
            </h2>
            <p className="text-lg text-gray-700 dark:text-[#fafb63] max-w-2xl mx-auto fade-in leading-relaxed font-semibold">
              A showcase of my recent coding projects, research efforts, and machine learning models.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {projects.map((project) => (
              <div
                key={project.id}
                className="fade-in bg-gray-55 dark:bg-gray-950 border border-gray-150 dark:border-gray-800/80 rounded-2xl shadow-lg overflow-hidden flex flex-col transition-all duration-350 hover:-translate-y-2 hover:shadow-xl group"
              >
                {/* Visual Header Image Banner */}
                <div className="w-full aspect-video relative overflow-hidden bg-zinc-900">
                  {project.image && !projectImageErrors[project.id] ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={() => handleProjectImageError(project.id)}
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}>
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:16px_16px] opacity-40" />
                    </div>
                  )}

                  {/* Shading scrim to make white labels text readable over images */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 z-10" />
                  
                  {/* Year Badge */}
                  <span className="absolute left-6 top-6 text-[10px] font-black text-black/75 bg-white/90 px-2 py-0.5 rounded-md self-start relative z-20 uppercase tracking-wide">
                    {project.year}
                  </span>
                  
                  {/* Corner Floating Icon */}
                  <div className="absolute right-6 top-6 bg-black/40 backdrop-blur-md p-2.5 rounded-xl border border-white/10 shadow-inner group-hover:scale-110 transition-transform relative z-20">
                    {project.icon}
                  </div>

                  {/* Title text layout */}
                  <div className="mt-auto p-6 absolute bottom-0 left-0 right-0 z-20">
                    {project.note && (
                      <span className="inline-block text-[9px] font-black text-white bg-black/60 px-2 py-0.5 rounded mb-2 uppercase tracking-widest border border-white/10">
                        {project.note}
                      </span>
                    )}
                    <h3 className="text-xl font-black text-white tracking-wide leading-tight group-hover:translate-x-1 transition-transform">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <p className="text-gray-655 dark:text-gray-400 text-sm mb-6 flex-1 leading-relaxed font-medium">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 text-xs font-bold rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-900 flex items-center justify-between">
                    <button
                      onClick={() => handleLiveDemoRedirect(project.demoLink)}
                      disabled={!project.demoLink}
                      className={`flex items-center gap-1.5 text-sm font-extrabold transition-all duration-200 ${
                        project.demoLink 
                          ? 'text-[#8B3DFF] dark:text-[#6bfff7] hover:underline cursor-pointer' 
                          : 'text-gray-400 dark:text-gray-600 cursor-not-allowed'
                      }`}
                    >
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </button>
                    {project.codeLink && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-extrabold text-gray-650 dark:text-gray-400 hover:text-[#8B3DFF] dark:hover:text-[#6bfff7]"
                      >
                        <Github className="h-4 w-4" /> View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-gray-200 dark:border-gray-800 my-16 fade-in" />

        {/* Certifications Sub-section */}
        <div>
          <div className="text-center mb-16 fade-in">
            <h3 className="text-3xl font-extrabold mb-4 italic text-[#8B3DFF] dark:text-[#6bfff7] flex items-center justify-center gap-2">
              <Award className="h-8 w-8" /> Certifications
            </h3>
            <p className="text-lg text-gray-700 dark:text-[#fafb63] max-w-2xl mx-auto leading-relaxed font-semibold">
              Validating expertise in Generative AI, Cloud Computing, Data Science, and UI/UX design. (Click to view certificate)
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setLightboxCert(cert)}
                className="fade-in bg-gray-55 dark:bg-gray-950/60 border border-gray-200 dark:border-gray-850 p-6 rounded-2xl shadow-md transition-all duration-300 hover:scale-[1.02] flex items-start gap-4 cursor-pointer hover:border-purple-300 dark:hover:border-purple-800/80"
              >
                <div className={`p-3 rounded-xl bg-purple-50 dark:bg-purple-950/20 ${cert.iconColor} flex-shrink-0 mt-0.5`}>
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-gray-955 dark:text-white leading-snug mb-1 group-hover:underline">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-bold text-gray-500 dark:text-gray-400">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 2. Certificate Full-screen Lightbox Modal */}
      {lightboxCert && (
        <div 
          onClick={() => setLightboxCert(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl max-h-[85vh] bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-850 rounded-2xl overflow-hidden shadow-2xl relative p-8 flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setLightboxCert(null)}
              className="absolute right-4 top-4 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white cursor-pointer"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="w-full aspect-[4/3] flex items-center justify-center relative bg-[#faf8f5] dark:bg-gray-900 rounded-xl p-4 border-2 border-amber-800/20 shadow-inner">
              <img
                src={lightboxCert.image}
                alt={lightboxCert.title}
                className="max-w-full max-h-full object-contain rounded"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.classList.remove('hidden');
                }}
              />
              
              <div className="hidden absolute inset-4 border-8 border-double border-amber-800/30 rounded-lg flex flex-col items-center justify-center p-6 text-center text-amber-950 dark:text-amber-100 bg-[#fefdfa] dark:bg-gray-900 border-2 border-amber-800/10">
                <div className="flex items-center gap-2 text-amber-800 dark:text-amber-500 mb-6">
                  <Award className="h-12 w-12" />
                </div>
                
                <h3 className="font-serif text-2xl uppercase tracking-widest text-amber-900 dark:text-amber-400 font-bold mb-2">
                  Certificate of Achievement
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-amber-700/60 dark:text-amber-500/60 font-bold mb-6">
                  This credential is officially issued to
                </p>
                
                <h4 className="font-serif text-3xl font-extrabold italic text-[#8B3DFF] dark:text-[#6bfff7] mb-4">
                  Gnanadhivya G
                </h4>
                
                <p className="text-xs text-gray-650 dark:text-gray-300 max-w-md mx-auto leading-relaxed mb-6 font-semibold">
                  For completing the professional course in **{lightboxCert.title}** as verified by the certifying authority **{lightboxCert.issuer}**.
                </p>
                
                <div className="w-full max-w-sm flex justify-between items-end border-t border-amber-800/10 pt-4 mt-4 text-[10px] font-bold text-gray-400 dark:text-gray-500">
                  <div>
                    <span className="block border-b border-gray-300 dark:border-gray-800 pb-1 px-4">{lightboxCert.issuer}</span>
                    <span className="block mt-1">ISSUING AUTHORITY</span>
                  </div>
                  <div>
                    <span className="block border-b border-gray-300 dark:border-gray-800 pb-1 px-4">{lightboxCert.date}</span>
                    <span className="block mt-1">DATE OF ISSUANCE</span>
                  </div>
                </div>
              </div>

            </div>

            <p className="text-xs font-bold text-gray-400 dark:text-gray-500 mt-4 text-center">
              Lightbox Preview. Click outside to dismiss.
            </p>
          </div>
        </div>
      )}

    </section>
  );
}
