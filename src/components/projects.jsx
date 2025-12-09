// import React, { useEffect, useRef, useState } from 'react';
// import { motion } from 'framer-motion';

// // your screenshots
// import project1 from '../assets/project1.png';
// import project2 from '../assets/project2.png';
// import project3 from '../assets/project3.png';

// function Projects() {
//   const sectionRef = useRef(null);
//   const [isTitleVisible, setIsTitleVisible] = useState(false);
//   const [visibleIndexes, setVisibleIndexes] = useState([]);

//   const projects = [
//     {
//       title: 'CBD Cosmetics – E-commerce (MERN)',
//       image: project1,
//       description:
//         'A production-ready MERN storefront for a CBD cosmetics brand. Features include product catalog & filters, cart/checkout, JWT auth, role-based admin, order tracking, and responsive UI. Built with React + Vite, Node/Express REST APIs, and MongoDB.',
//       links: [
//         { label: 'Live Demo', href: 'https://cbc-frontend-topaz.vercel.app', kind: 'primary' },
//         { label: 'Frontend Code', href: 'https://github.com/Kavi20021216/cbc-frontend.git', kind: 'ghost' },
//         { label: 'Backend Code', href: 'https://github.com/Kavi20021216/cbc-backend.git', kind: 'ghost' },
//       ],
//     },
//     {
//       title: 'UpdateXpress – News App (Java)',
//       image: project2,
//       description:
//         'A Java-based news reader that aggregates headlines and stories with category filtering, search, and clean caching. Focused on fast loads, readable typography, and simple navigation.',
//       links: [
//         { label: 'Source Code', href: 'https://github.com/Kavi20021216/News_App.git', kind: 'ghost' },
//       ],
//     },
//     {
//       title: 'Coffee Shop – Website (HTML/CSS/JS)',
//       image: project3,
//       description:
//         'A handcrafted, mobile-responsive coffee shop site using semantic HTML, modern CSS (flex/grid), and vanilla JS. Includes menu sections, hero banners, and simple interactions.',
//       links: [
//         { label: 'Source Code', href: 'https://github.com/Kavi20021216/coffee-shop.git', kind: 'ghost' },
//       ],
//     },
//   ];

//   useEffect(() => {
//     const titleObserver = new IntersectionObserver(
//       (entries) => setIsTitleVisible(entries[0].isIntersecting),
//       { threshold: 0.2 }
//     );

//     const cardObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const index = parseInt(entry.target.dataset.index);
//           if (entry.isIntersecting) {
//             setVisibleIndexes((prev) => (prev.includes(index) ? prev : [...prev, index]));
//           } else {
//             setVisibleIndexes((prev) => prev.filter((i) => i !== index));
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     const section = sectionRef.current;
//     const cards = document.querySelectorAll('.project-card');

//     if (section) {
//       const titleEl = section.querySelector('#projects-title');
//       if (titleEl) titleObserver.observe(titleEl);
//     }
//     cards.forEach((card) => cardObserver.observe(card));

//     return () => {
//       titleObserver.disconnect();
//       cardObserver.disconnect();
//     };
//   }, []);

//   return (
//     <section
//       id="projects"
//       ref={sectionRef}
//       className="relative py-20 md:py-24 min-h-screen bg-black text-white overflow-hidden"
//     >
//       {/* 🟣 Reuse Certifications purple background */}
//       <div
//         className="pointer-events-none absolute inset-0 z-[1] mix-blend-screen"
//         style={{
//           opacity: 0.45,
//           background:
//             'radial-gradient(800px 400px at 15% 20%, rgba(168,85,247,0.18), transparent 60%), radial-gradient(900px 500px at 85% 80%, rgba(217,70,239,0.14), transparent 60%)',
//           animation: 'pulseGlow 8s ease-in-out infinite alternate',
//         }}
//       />
//       <div
//         className="pointer-events-none absolute inset-0 z-[1] opacity-90"
//         style={{
//           background:
//             'radial-gradient(1200px 600px at 10% 10%, rgba(192,132,252,0.15), transparent 60%), radial-gradient(1000px 500px at 90% 90%, rgba(168,85,247,0.12), transparent 60%)',
//         }}
//       />
//       <div
//         className="pointer-events-none absolute inset-0 z-[1] opacity-[0.06]"
//         style={{
//           backgroundImage:
//             'linear-gradient(transparent 0 24px, rgba(255,255,255,.25) 25px 25px), linear-gradient(90deg, transparent 0 24px, rgba(255,255,255,.25) 25px 25px)',
//           backgroundSize: '25px 25px, 25px 25px',
//           backgroundPosition: '0 0, 0 0',
//           animation: 'gridDrift 20s linear infinite',
//         }}
//       />
//       <div
//         className="pointer-events-none absolute inset-0 z-[1]"
//         style={{
//           opacity: 0.35,
//           filter: 'blur(20px) saturate(120%)',
//           mixBlendMode: 'screen',
//           background:
//             'radial-gradient(240px 240px at 22% 28%, rgba(192,132,252,0.22), transparent 60%), radial-gradient(320px 320px at 78% 65%, rgba(217,70,239,0.20), transparent 60%), radial-gradient(260px 260px at 45% 82%, rgba(147,51,234,0.18), transparent 60%)',
//           animation: 'blobDrift 24s ease-in-out infinite',
//         }}
//       />
//       <div
//         className="pointer-events-none absolute inset-0 z-[1]"
//         style={{
//           opacity: 0.1,
//           mixBlendMode: 'screen',
//           background:
//             'conic-gradient(from 0deg at 50% 50%, rgba(168,85,247,0.0), rgba(168,85,247,0.25), rgba(217,70,239,0.0) 60%)',
//           transformOrigin: '50% 50%',
//           animation: 'spinSlow 60s linear infinite',
//         }}
//       />

//       {/* Content wrapper */}
//       <div className="relative z-10 container mx-auto px-6 max-w-6xl">
//         <div
//           className={`text-center mb-16 transition-all duration-700 ease-out ${
//             isTitleVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-90'
//           }`}
//         >
//           <h2
//             id="projects-title"
//             className="text-5xl sm:text-6xl font-extrabold pb-3 tracking-tight bg-gradient-to-r from-fuchsia-400 via-violet-400 to-purple-500 bg-clip-text text-transparent"
//           >
//             Projects
//           </h2>
//           <div className="h-1 w-24 bg-gradient-to-r from-fuchsia-400 to-violet-500 mx-auto mt-3" />
//           <p className="mt-4 text-gray-300/90 text-lg max-w-2xl mx-auto leading-relaxed">
//             A collection of work demonstrating product thinking, code quality, and UI craft.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => {
//             const isVisible = visibleIndexes.includes(index);
//             return (
//               <motion.div
//                 key={index}
//                 data-index={index}
//                 initial={{ opacity: 0, y: 24, scale: 0.98 }}
//                 animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.98 }}
//                 whileHover={{ scale: 1.03 }}
//                 transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
//                 className="project-card flex flex-col p-6 rounded-2xl"
//                 style={{ transformOrigin: 'center', willChange: 'transform' }}
//               >
//                 <div className="rounded-lg overflow-hidden border border-white/10 bg-white/5">
//                   <img src={project.image} alt={project.title} className="w-full h-48 object-cover" loading="lazy" />
//                 </div>

//                 <h3 className="text-xl font-semibold text-white mt-6">{project.title}</h3>
//                 <p className="text-gray-300 text-sm mt-2 flex-grow">{project.description}</p>

//                 {/* Buttons */}
//                 <div className="mt-5 flex flex-wrap gap-2">
//                   {project.links.map((btn) => (
//                     <a
//                       key={btn.label}
//                       href={btn.href.startsWith('http') ? btn.href : `https://${btn.href}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={
//                         btn.kind === 'primary'
//                           ? 'inline-flex items-center gap-2 rounded-lg px-4 py-2 font-semibold text-white bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-400 hover:to-purple-500 transition-all duration-300 shadow-sm hover:shadow-lg'
//                           : 'inline-flex items-center gap-2 rounded-lg px-4 py-2 font-semibold text-white/90 bg-white/10 hover:bg-white/15 border border-white/10 transition-all duration-300'
//                       }
//                       title={btn.label}
//                     >
//                       {/* GitHub icon only on "Code" buttons */}
//                       {btn.label.toLowerCase().includes('code') && (
//                         <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
//                           <path
//                             fill="currentColor"
//                             d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.76.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.62-2.67-.3-5.48-1.33-5.48-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.58A12 12 0 0 0 12 .5Z"
//                           />
//                         </svg>
//                       )}
//                       <span>{btn.label}</span>
//                     </a>
//                   ))}
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Styles (purple glow + background animations) */}
//       <style>{`
//         @keyframes pulseGlow {
//           0% { filter: drop-shadow(0 0 0 rgba(168,85,247,0.25)); transform: scale(1); }
//           100% { filter: drop-shadow(0 0 24px rgba(217,70,239,0.25)); transform: scale(1.02); }
//         }
//         @keyframes gridDrift {
//           0% { background-position: 0 0, 0 0; }
//           100% { background-position: 50px 50px, 50px 50px; }
//         }
//         @keyframes blobDrift {
//           0% { background-position: 22% 28%, 78% 65%, 45% 82%; background-size: 240px 240px, 320px 320px, 260px 260px; }
//           50% { background-position: 26% 35%, 74% 64%, 48% 76%; background-size: 270px 270px, 340px 340px, 290px 290px; }
//           100% { background-position: 22% 28%, 78% 65%, 45% 82%; background-size: 240px 240px, 320px 320px, 260px 260px; }
//         }
//         @keyframes spinSlow { to { transform: rotate(360deg); } }

//         .project-card {
//           background:
//             linear-gradient(#0b0b0b, #0b0b0b) padding-box,
//             linear-gradient(90deg, rgba(168,85,247,0.75), rgba(217,70,239,0.75)) border-box;
//           border: 1.5px solid transparent;
//           border-radius: 16px;
//           position: relative;
//           isolation: isolate;
//           overflow: hidden;
//           transition: box-shadow .45s ease, filter .45s ease;
//         }
//         .project-card:hover {
//           box-shadow:
//             0 20px 65px rgba(168,85,247,0.28),
//             0 12px 38px rgba(217,70,239,0.22),
//             0 5px 10px rgba(0,0,0,0.4);
//           filter: brightness(1.06);
//         }
//       `}</style>
//     </section>
//   );
// }

// export default Projects;


import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

function Projects() {
  const sectionRef = useRef(null);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  const projects = [
    {
      title: 'CBD Cosmetics – E-commerce (MERN)',
      image: project1,
      description:
        'A production-ready MERN storefront for a CBD cosmetics brand. Features include product catalog & filters, cart/checkout, JWT auth, role-based admin, order tracking, and responsive UI. Built with React + Vite, Node/Express REST APIs, and MongoDB.',
      liveDemo: 'https://cbc-frontend-topaz.vercel.app',
      links: [
        { label: 'Frontend Source Code', href: 'https://github.com/Kavi20021216/cbc-frontend.git' },
        { label: 'Backend Source Code', href: 'https://github.com/Kavi20021216/cbc-backend.git' },
      ],
    },
    {
      title: 'UpdateXpress – News App (Java)',
      image: project2,
      description:
        'A Java-based news reader that aggregates headlines and stories with category filtering, search, and clean caching. Focused on fast loads, readable typography, and simple navigation.',
      links: [
        { label: 'Source Code', href: 'https://github.com/Kavi20021216/News_App.git' },
      ],
    },
    {
      title: 'Coffee Shop – Website (HTML/CSS/JS)',
      image: project3,
      description:
        'A handcrafted, mobile-responsive coffee shop site using semantic HTML, modern CSS (flex/grid), and vanilla JS. Includes menu sections, hero banners, and simple interactions.',
      links: [
        { label: 'Source Code', href: 'https://github.com/Kavi20021216/coffee-shop.git' },
      ],
    },
  ];

  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      (entries) => setIsTitleVisible(entries[0].isIntersecting),
      { threshold: 0.2 }
    );
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleIndexes((prev) => (prev.includes(index) ? prev : [...prev, index]));
          } else {
            setVisibleIndexes((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 0.2 }
    );
    const section = sectionRef.current;
    const cards = document.querySelectorAll('.project-card');
    if (section) {
      const titleEl = section.querySelector('#projects-title');
      if (titleEl) titleObserver.observe(titleEl);
    }
    cards.forEach((card) => cardObserver.observe(card));
    return () => {
      titleObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-20 md:py-24 min-h-screen bg-black text-white overflow-hidden"
    >
      {/* Purple background (same as Certifications) */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(1200px 600px at 15% 20%, rgba(168,85,247,0.15), transparent 60%), radial-gradient(900px 500px at 85% 80%, rgba(217,70,239,0.12), transparent 60%)',
        }}
      />

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        <div
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            isTitleVisible
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-6 scale-90'
          }`}
        >
          <h2
            id="projects-title"
            className="text-5xl sm:text-6xl font-extrabold pb-3 tracking-tight bg-gradient-to-r from-fuchsia-400 via-violet-400 to-purple-500 bg-clip-text text-transparent"
          >
            Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-fuchsia-400 to-purple-500 mx-auto mt-3" />
          <p className="mt-4 text-gray-300/90 text-lg max-w-2xl mx-auto leading-relaxed">
            A collection of work demonstrating product thinking, code quality, and UI craft.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isVisible = visibleIndexes.includes(index);
            return (
              <motion.div
                key={index}
                data-index={index}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.98 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="project-card flex flex-col p-6 rounded-2xl"
              >
                <div className="rounded-lg overflow-hidden border border-white/10 bg-white/5">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                </div>

                <h3 className="text-xl font-semibold text-white mt-6">{project.title}</h3>
                <p className="text-gray-300 text-sm mt-2 flex-grow">{project.description}</p>

                {/* Live Demo button for Project 1 */}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center rounded-lg px-4 py-2 font-semibold text-white bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-400 hover:to-purple-500 transition-all duration-300 shadow-sm hover:shadow-lg w-full"
                  >
                    Live Demo
                  </a>
                )}

                {/* Source buttons */}
                {project.links.length > 0 && (
                  <div
                    className={`${
                      project.title.includes('CBD') ? 'mt-4 flex justify-between gap-2' : 'mt-5 flex flex-wrap gap-2'
                    }`}
                  >
                    {project.links.map((btn) => (
                      <a
                        key={btn.label}
                        href={btn.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg px-4 py-2 font-semibold text-white/90 bg-white/10 hover:bg-white/15 border border-white/10 transition-all duration-300 w-full md:w-auto text-center justify-center"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fill="currentColor"
                            d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.76.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.62-2.67-.3-5.48-1.33-5.48-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.58A12 12 0 0 0 12 .5Z"
                          />
                        </svg>
                        {btn.label}
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .project-card {
          background:
            linear-gradient(#0b0b0b, #0b0b0b) padding-box,
            linear-gradient(90deg, rgba(168,85,247,0.75), rgba(217,70,239,0.75)) border-box;
          border: 1.5px solid transparent;
          transition: box-shadow .45s ease, filter .45s ease;
        }
        .project-card:hover {
          box-shadow:
            0 20px 65px rgba(168,85,247,0.28),
            0 12px 38px rgba(217,70,239,0.22),
            0 5px 10px rgba(0,0,0,0.4);
          filter: brightness(1.06);
        }
      `}</style>
    </section>
  );
}

export default Projects;
