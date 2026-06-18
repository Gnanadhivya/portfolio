import React, { useEffect, useRef } from 'react';
import { BookOpen, Award, GraduationCap } from 'lucide-react';

export default function About() {
  const sectionRef = useRef(null);

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

  const education = [
    {
      institution: 'P.S.R. Engineering College, Sivakasi',
      degree: 'Bachelor of Engineering – Computer Science and Engineering',
      duration: '2023 - 2027',
      score: 'Percentage: 80%',
    },
    {
      institution: "P.A.C.R. Ammani Ammal's Girls' Higher Secondary School, Rajapalayam",
      degree: 'Higher Secondary Education',
      duration: '2016 - 2023',
      score: 'Percentage: 85%',
    },
  ];

  const skills = [
    {
      category: 'Technical Skills',
      items: 'Java, SQL, UI/UX, Web Development, Groovy, JavaScript, Data Analytics',
      color: 'text-blue-500 dark:text-[#6bfff7]',
    },
    {
      category: 'Soft Skills',
      items: 'Problem solving, Communication, Time management',
      color: 'text-green-500 dark:text-[#fafb63]',
    },
    {
      category: 'Languages Known',
      items: 'English, Tamil',
      color: 'text-purple-500 dark:text-[#6bfff7]',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-gray-55 dark:bg-black/90 text-gray-900 dark:text-white transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl italic font-extrabold mb-4 fade-in text-[#8B3DFF] dark:text-[#6bfff7]">
            About Me
          </h2>
          <p className="text-lg text-gray-700 dark:text-[#fafb63] max-w-3xl mx-auto fade-in leading-relaxed font-semibold">
            Software Developer with a passion for logic, data structures, and crafting robust user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-10 slide-in-left">
            <div className="rounded-2xl p-8 text-black dark:text-black bg-gradient-to-br from-[#00C4CC] to-[#8B3DFF] dark:from-[#FAFB63] dark:to-[#6BFFF7] shadow-xl">
              <h3 className="text-2xl font-black italic mb-4 tracking-wide flex items-center gap-2">
                <GraduationCap className="h-6 w-6" /> CAREER OBJECTIVE
              </h3>
              <p className="text-base sm:text-lg leading-relaxed font-medium">
                Aspiring Software Developer with strong knowledge in Java, OOP concepts, and Data Structures & Algorithms. Experienced in developing full-stack applications using Spring Boot, React, and MySQL. Demonstrates strong problem-solving ability through consistent DSA practice and real-world project development. Eager to contribute to scalable and efficient software solutions.
              </p>
            </div>

            <div id="education" className="space-y-6">
              <h3 className="text-2xl font-extrabold italic text-[#8B3DFF] dark:text-[#6bfff7] flex items-center gap-2">
                <BookOpen className="h-6 w-6" /> Education
              </h3>

              <div className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-4 pl-6 space-y-8">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative group">
                    <span className="absolute -left-[31px] top-1.5 bg-[#8B3DFF] dark:bg-[#6bfff7] h-4 w-4 rounded-full border-4 border-gray-50 dark:border-black/90 transition-transform duration-300 group-hover:scale-125 shadow" />
                    
                    <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800/80 shadow-md">
                      <span className="text-xs font-bold text-gray-400 dark:text-gray-400 block mb-1">
                        {edu.duration}
                      </span>
                      <h4 className="font-extrabold text-lg text-gray-955 dark:text-white mb-2 leading-tight">
                        {edu.institution}
                      </h4>
                      <p className="text-gray-650 dark:text-gray-455 text-sm font-semibold mb-2">
                        {edu.degree}
                      </p>
                      <span className="inline-block px-3 py-1 bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-400 text-xs font-bold rounded-full">
                        {edu.score}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="skills" className="lg:col-span-5 slide-in-right space-y-6">
            <h3 className="text-2xl font-extrabold italic text-[#8B3DFF] dark:text-[#6bfff7] flex items-center gap-2">
              <Award className="h-6 w-6" /> Skills Profile
            </h3>

            <div className="space-y-4">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800/80 p-6 rounded-xl shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                >
                  <h4 className={`font-bold text-lg mb-2 ${skill.color}`}>
                    {skill.category}
                  </h4>
                  <p className="text-gray-655 dark:text-gray-450 text-sm leading-relaxed font-semibold">
                    {skill.items}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
