import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Phone, Send, AlertCircle, CheckCircle2 } from 'lucide-react';
import { TwitterIcon as Twitter, LinkedinIcon as Linkedin, InstagramIcon as Instagram, GithubIcon as Github, LeetcodeIcon as Leetcode } from './BrandIcons';

export default function Contact() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Your name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message content is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setStatus({ type: 'info', message: 'Sending message...' });

    // Actual EmailJS Integration
    emailjs.sendForm(
      'service_9y5fd19',
      'template_yb0cvp5',
      formRef.current,
      'YvjF5rqUyQYxVhUc0'
    )
    .then((result) => {
      setLoading(false);
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully to my inbox.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);
    }, (error) => {
      setLoading(false);
      setStatus({
        type: 'error',
        message: 'An error occurred while sending your message. Please try again later.',
      });
    });
  };

  const socialLinks = [
    {
      icon: <Leetcode className="h-5 w-5" />,
      url: 'https://leetcode.com/u/Gnanadhivya/',
      bgColor: 'bg-yellow-600 hover:bg-yellow-700 text-white',
      title: 'LeetCode',
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      url: 'https://www.linkedin.com/in/gnanadhivya-g',
      bgColor: 'bg-blue-700 hover:bg-blue-800 text-white',
      title: 'LinkedIn',
    },
    {
      icon: <Github className="h-5 w-5" />,
      url: 'https://github.com/Gnanadhivya',
      bgColor: 'bg-gray-900 hover:bg-gray-800 text-white',
      title: 'GitHub',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-gray-50 dark:bg-black/90 text-gray-900 dark:text-white transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl italic font-extrabold mb-4 fade-in text-[#8B3DFF] dark:text-[#6bfff7]">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-700 dark:text-[#fafb63] max-w-2xl mx-auto fade-in leading-relaxed font-semibold">
            Ready to start your next project or have a query? Let's connect and build something awesome together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div className="slide-in-left space-y-8">
            <h3 className="text-2xl font-extrabold italic text-[#8B3DFF] dark:text-[#6bfff7] mb-4">
              Let's Connect
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center">
                <div className="bg-purple-100 dark:bg-purple-950 p-4 rounded-full mr-4 flex-shrink-0 text-purple-600 dark:text-purple-400">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-gray-955 dark:text-white text-base">Email</h4>
                  <a
                    href="mailto:gnanadhivya19@gmail.com"
                    className="text-gray-600 dark:text-gray-400 hover:underline font-semibold"
                  >
                    gnanadhivya19@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center">
                <div className="bg-green-100 dark:bg-green-955 p-4 rounded-full mr-4 flex-shrink-0 text-green-600 dark:text-green-400">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-gray-955 dark:text-white text-base">Phone</h4>
                  <a
                    href="tel:8667538259"
                    className="text-gray-600 dark:text-gray-400 hover:underline font-semibold"
                  >
                    +91 8667538259
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center">
                <div className="bg-cyan-100 dark:bg-cyan-955 p-4 rounded-full mr-4 flex-shrink-0 text-cyan-600 dark:text-cyan-400">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-gray-955 dark:text-white text-base">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400 font-semibold">Rajapalayam, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-lg font-extrabold italic text-[#8B3DFF] dark:text-[#6bfff7] mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-3 flex-wrap gap-y-2">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.title}
                    className={`p-3 rounded-full transition duration-300 transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg ${social.bgColor}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="slide-in-right">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 bg-white dark:bg-gray-950 p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-[#8B3DFF] dark:focus:ring-[#6bfff7] focus:border-transparent transition duration-200 outline-none ${
                    errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300 dark:border-gray-700'
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs font-bold mt-1.5 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" /> {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-[#8B3DFF] dark:focus:ring-[#6bfff7] focus:border-transparent transition duration-200 outline-none ${
                    errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300 dark:border-gray-700'
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs font-bold mt-1.5 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" /> {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-[#8B3DFF] dark:focus:ring-[#6bfff7] focus:border-transparent transition duration-200 outline-none ${
                    errors.subject ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300 dark:border-gray-700'
                  }`}
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs font-bold mt-1.5 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" /> {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-[#8B3DFF] dark:focus:ring-[#6bfff7] focus:border-transparent transition duration-200 resize-none outline-none ${
                    errors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300 dark:border-gray-700'
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs font-bold mt-1.5 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" /> {errors.message}
                  </p>
                )}
              </div>

              {status.message && (
                <div
                  className={`p-3 rounded-lg flex items-center gap-2 text-sm font-bold ${
                    status.type === 'success'
                      ? 'bg-green-100 dark:bg-green-950 text-green-800 dark:text-green-300'
                      : status.type === 'info'
                      ? 'bg-blue-100 dark:bg-blue-955 text-blue-800 dark:text-blue-300'
                      : 'bg-red-100 dark:bg-red-955 text-red-800 dark:text-red-300'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full text-black dark:text-black light:text-white py-3 px-6 rounded-xl font-bold transition duration-300 transform hover:scale-102 bg-gradient-to-r from-[#00C4CC] to-[#8B3DFF] dark:from-[#FAFB63] dark:to-[#6BFFF7] light:from-[#a78bfa] light:to-[#38a9f2] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? 'Sending...' : (
                  <>
                    Send Message <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
