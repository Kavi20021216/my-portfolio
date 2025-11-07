// import React, { useRef, useState } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';

// export default function Contact() {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const contentRef = useRef(null);

//   const isTitleInView = useInView(titleRef, { once: false, amount: 0.2 });
//   const isContentInView = useInView(contentRef, { once: false, amount: 0.2 });

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const [formStatus, setFormStatus] = useState({ submitted: false, error: false, sending: false });

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFormStatus({ submitted: false, error: false, sending: true });

//     try {
//       // FormSubmit.co endpoint (replace token when you want)
//       const response = await fetch('https://formsubmit.co/4a9f6dd4a7106dd024edfc0255526990', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           subject: formData.subject,
//           message: formData.message,
//           _captcha: 'false',
//         }),
//       });

//       if (!response.ok) throw new Error('Failed to send message');
//       setFormStatus({ submitted: true, error: false, sending: false });
//       setTimeout(() => {
//         setFormData({ name: '', email: '', subject: '', message: '' });
//         setFormStatus({ submitted: false, error: false, sending: false });
//       }, 3000);
//     } catch (err) {
//       setFormStatus({ submitted: false, error: true, sending: false });
//       setTimeout(() => setFormStatus({ submitted: false, error: false, sending: false }), 1000);
//     }
//   };

//   // ==== YOUR DETAILS ====
//   const contactInfo = [
//     {
//       icon: Mail,
//       label: 'Email',
//       value: 'kaveetharandili2002@gmail.com',
//       href: 'mailto:kaveetharandili2002@gmail.com',
//       color: 'from-fuchsia-400 to-purple-400',
//     },
//     {
//       icon: Phone,
//       label: 'Phone',
//       value: '+94 77 576 7101',
//       href: 'tel:+94775767101',
//       color: 'from-violet-400 to-pink-400',
//     },
//     {
//       icon: MapPin,
//       label: 'Location',
//       value: 'Colombo, Sri Lanka',
//       href: null,
//       color: 'from-purple-400 to-indigo-400',
//     },
//   ];

//   const socialLinks = [
//     { icon: Github, label: 'GitHub', href: 'https://github.com/Kavi20021216' },
//     {
//       icon: Linkedin,
//       label: 'LinkedIn',
//       href: 'https://www.linkedin.com/in/kaveetha-randili-824715378',
//     },
//   ];

//   return (
//     <section
//       id="contact"
//       ref={sectionRef}
//       className="relative min-h-screen bg-black text-white overflow-hidden py-24 px-4 sm:px-6"
//     >
//       {/* Purple background lights (matches other sections) */}
//       <div
//         className="pointer-events-none absolute inset-0 z-[1] opacity-90"
//         style={{
//           background:
//             'radial-gradient(1200px 600px at 15% 20%, rgba(168,85,247,0.15), transparent 60%), radial-gradient(900px 500px at 85% 80%, rgba(217,70,239,0.12), transparent 60%)',
//         }}
//       />

//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Title */}
//         <div
//           ref={titleRef}
//           className={`text-center mb-16 transition-all duration-600 ease-out ${
//             isTitleInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-90'
//           }`}
//         >
//           <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-fuchsia-400 via-violet-400 to-purple-500 bg-clip-text text-transparent pb-3">
//             Get In Touch
//           </h2>
//           <div className="h-1 w-24 bg-gradient-to-r from-fuchsia-400 to-purple-500 mx-auto mt-4" />
//           <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
//             Have a question or want to work together? I'd love to hear from you!
//           </p>
//         </div>

//         {/* Content */}
//         <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Left: info */}
//           <div className="space-y-8">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={isContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
//               transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <MessageCircle className="w-8 h-8 text-fuchsia-400" />
//                 <h3 className="text-3xl font-bold bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
//                   Let&apos;s talk
//                 </h3>
//               </div>

//               <p className="text-gray-400 mb-8 text-lg leading-relaxed">
//                 I’m currently available to take on new projects. Feel free to send a message about anything
//                 you’d like me to work on. You can contact me anytime.
//               </p>

//               <div className="space-y-4">
//                 {contactInfo.map((item, idx) => (
//                   <motion.div
//                     key={item.label}
//                     initial={{ opacity: 0, x: -20, scale: 0.95 }}
//                     animate={isContentInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -20, scale: 0.95 }}
//                     whileHover={{ scale: 1.03, x: 5 }}
//                     transition={{ duration: 0.6, delay: 0.2 + idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
//                     className="contact-info-card group relative flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden"
//                     style={{ transformOrigin: 'left center' }}
//                   >
//                     <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
//                     <div
//                       className={`relative flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
//                     >
//                       <item.icon className="w-6 h-6 text-white" />
//                     </div>
//                     <div className="relative flex-1">
//                       <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{item.label}</p>
//                       {item.href ? (
//                         <a href={item.href} className="text-white font-medium hover:text-fuchsia-400 transition-colors duration-300 text-base">
//                           {item.value}
//                         </a>
//                       ) : (
//                         <p className="text-white font-medium text-base">{item.value}</p>
//                       )}
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                 transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
//                 className="mt-10 pt-8 border-t border-white/10"
//               >
//                 <h4 className="text-lg font-semibold mb-4 text-gray-300">Connect on Social Media</h4>
//                 <div className="flex gap-4">
//                   {socialLinks.map((social, idx) => (
//                     <motion.a
//                       key={social.label}
//                       href={social.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="social-link w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300"
//                       whileHover={{ scale: 1.15, rotate: 360 }}
//                       transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//                       aria-label={social.label}
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       animate={isContentInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
//                       style={{ transitionDelay: `${0.7 + idx * 0.1}s` }}
//                     >
//                       <social.icon className="w-6 h-6 text-gray-400" />
//                     </motion.a>
//                   ))}
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>

//           {/* Right: form */}
//           <motion.div
//             initial={{ opacity: 0, x: 30, scale: 0.95 }}
//             animate={isContentInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 30, scale: 0.95 }}
//             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//             className="contact-form-card p-8 rounded-2xl backdrop-blur-sm"
//           >
//             <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:border-transparent transition-all duration-300"
//                   placeholder="Your name"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
//                   Your Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:border-transparent transition-all duration-300"
//                   placeholder="you@example.com"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:border-transparent transition-all duration-300"
//                   placeholder="Project inquiry"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
//                   Your Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows="6"
//                   className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:border-transparent transition-all duration-300 resize-none"
//                   placeholder="Tell me about your project..."
//                 />
//               </div>

//               <motion.button
//                 type="submit"
//                 className="btn-submit w-full relative overflow-hidden rounded-full px-8 py-4 font-semibold text-white text-base shadow-md border-2 border-transparent bg-clip-padding transition-all duration-500 flex items-center justify-center gap-2"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.98 }}
//                 transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
//                 style={{ transformOrigin: 'center' }}
//                 disabled={formStatus.submitted || formStatus.sending}
//               >
//                 <span className="relative z-10 flex items-center gap-2">
//                   {formStatus.sending ? 'Sending...' : formStatus.submitted ? 'Message Sent!' : 'Submit now'}
//                   <Send className={`w-5 h-5 ${formStatus.submitted ? 'animate-bounce' : formStatus.sending ? 'animate-pulse' : ''}`} />
//                 </span>
//               </motion.button>

//               {formStatus.submitted && (
//                 <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
//                   <p className="text-emerald-400 text-sm font-medium">✓ Thanks! I’ll get back to you soon.</p>
//                 </motion.div>
//               )}

//               {formStatus.error && (
//                 <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center p-4 rounded-lg bg-red-500/10 border border-red-500/30">
//                   <p className="text-red-400 text-sm font-medium">✗ Failed to send message. Please try again or email me directly.</p>
//                 </motion.div>
//               )}
//             </form>
//           </motion.div>
//         </div>
//       </div>

//       {/* Styles */}
//       <style>{`
//         .contact-info-card { transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1); will-change: transform; }
//         .contact-info-card:hover {
//           border-color: rgba(217,70,239,0.3);
//           box-shadow: 0 10px 40px rgba(168,85,247,0.12);
//         }

//         .contact-form-card {
//           background:
//             linear-gradient(#0b0b0b, #0b0b0b) padding-box,
//             linear-gradient(90deg, rgba(168,85,247,0.45), rgba(217,70,239,0.45)) border-box;
//           border: 1.5px solid transparent;
//           transition: box-shadow 0.5s ease, filter 0.5s ease;
//         }
//         .contact-form-card:hover {
//           box-shadow: 0 20px 65px rgba(168,85,247,0.18), 0 12px 38px rgba(217,70,239,0.15);
//           filter: brightness(1.05);
//         }

//         /* Submit button gradient outline → filled hover (purple) */
//         .btn-submit {
//           background: linear-gradient(#000, #000) padding-box,
//                       linear-gradient(90deg, #e879f9, #8b5cf6) border-box;
//           border-radius: 9999px;
//           border: 2px solid transparent;
//           position: relative;
//           isolation: isolate;
//           transition: all 0.4s ease;
//         }
//         .btn-submit:hover:not(:disabled) {
//           background: linear-gradient(90deg, #e879f9, #8b5cf6);
//           color: #000;
//           box-shadow: 0 0 30px rgba(168,85,247,0.45);
//         }
//         .btn-submit:disabled { opacity: 0.6; cursor: not-allowed; }

//         .social-link:hover {
//           background: linear-gradient(135deg, rgba(232,121,249,0.18), rgba(139,92,246,0.18));
//           border-color: rgba(232,121,249,0.35);
//         }

//         input:focus, textarea:focus { box-shadow: 0 0 0 3px rgba(232,121,249,0.15); }
//       `}</style>
//     </section>
//   );
// }

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from "lucide-react";

export default function Contact() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const isTitleInView = useInView(titleRef, { once: false, amount: 0.2 });
  const isContentInView = useInView(contentRef, { once: false, amount: 0.2 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({ submitted: false, error: false, sending: false });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, error: false, sending: true });

    try {
      const response = await fetch("https://formsubmit.co/4a9f6dd4a7106dd024edfc0255526990", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _captcha: "false",
        }),
      });

      if (!response.ok) throw new Error("Failed to send message");
      setFormStatus({ submitted: true, error: false, sending: false });
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setFormStatus({ submitted: false, error: false, sending: false });
      }, 3000);
    } catch (err) {
      setFormStatus({ submitted: false, error: true, sending: false });
      setTimeout(() => setFormStatus({ submitted: false, error: false, sending: false }), 1000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kaveetharandili2002@gmail.com",
      href: "mailto:kaveetharandili2002@gmail.com",
      color: "from-fuchsia-400 to-purple-400",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+94 77 576 7101",
      href: "tel:+94775767101",
      color: "from-violet-400 to-pink-400",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Colombo, Sri Lanka",
      href: null,
      color: "from-purple-400 to-indigo-400",
    },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/Kavi20021216" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kaveetha-randili-824715378",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen bg-black text-white overflow-hidden py-24 px-4 sm:px-6"
    >
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-90"
        style={{
          background:
            "radial-gradient(1200px 600px at 15% 20%, rgba(168,85,247,0.15), transparent 60%), radial-gradient(900px 500px at 85% 80%, rgba(217,70,239,0.12), transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-600 ease-out ${
            isTitleInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-90"
          }`}
        >
          <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-fuchsia-400 via-violet-400 to-purple-500 bg-clip-text text-transparent pb-3">
            Get In Touch
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-fuchsia-400 to-purple-500 mx-auto mt-4" />
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
            Feel free to reach out if you have a project idea, need collaboration, or just want to connect!
          </p>
        </div>

        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-8 h-8 text-fuchsia-400" />
                <h3 className="text-3xl font-bold bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                  Let&apos;s talk
                </h3>
              </div>

              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                I’m passionate about connecting with new people, exploring innovative ideas, and collaborating on exciting projects. Don’t hesitate to drop a message — I’ll be glad to connect with you!
              </p>

              <div className="space-y-4">
                {contactInfo.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20, scale: 0.95 }}
                    animate={isContentInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -20, scale: 0.95 }}
                    whileHover={{ scale: 1.03, x: 5 }}
                    transition={{ duration: 0.6, delay: 0.2 + idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="contact-info-card group relative flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden"
                    style={{ transformOrigin: "left center" }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className={`relative flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="relative flex-1">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-white font-medium hover:text-fuchsia-400 transition-colors duration-300 text-base">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium text-base">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 pt-8 border-t border-white/10"
              >
                <h4 className="text-lg font-semibold mb-4 text-gray-300">Connect on Social Media</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, idx) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300"
                      whileHover={{ scale: 1.15, rotate: 360 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      aria-label={social.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isContentInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      style={{ transitionDelay: `${0.7 + idx * 0.1}s` }}
                    >
                      <social.icon className="w-6 h-6 text-gray-400" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={isContentInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 30, scale: 0.95 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="contact-form-card p-8 rounded-2xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:border-transparent transition-all duration-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:border-transparent transition-all duration-300"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:border-transparent transition-all duration-300"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:border-transparent transition-all duration-300 resize-none"
              />

              {/* Updated Button */}
              <motion.button
                type="submit"
                className="relative overflow-hidden rounded-full px-8 py-4 w-full font-semibold text-white text-base shadow-lg transition-all duration-500 bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-purple-500 hover:to-fuchsia-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                {formStatus.sending
                  ? "Sending..."
                  : formStatus.submitted
                  ? "Message Sent!"
                  : "Send Message"}
                <Send className="inline-block ml-2 w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
