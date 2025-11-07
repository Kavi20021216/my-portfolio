// import React, { useEffect, useRef, useState } from 'react';
// import uocLogo from '../assets/uoc.png';
// import idmLogo from '../assets/idm.png';
// import vccLogo from '../assets/vcc.png';
// import wmvLogo from '../assets/wmv.png';

// function Education() {
//   const sectionRef = useRef(null);
//   const [isTitleVisible, setIsTitleVisible] = useState(false);
//   const [visibleIndexes, setVisibleIndexes] = useState([]);

//   const educationData = [
//     {
//       institution: 'University of Colombo',
//       degree: 'Bachelor of Information and Communication Technology (BICT Honours)',
//       period: '2023 - Present',
//       logo: uocLogo,
//     },
//     {
//       institution: 'IDM Achievers International Campus',
//       degree: 'Diploma in English',
//       period: '2023',
//       logo: idmLogo,
//     },
//     {
//       institution: 'Veyangoda Bandaranayake Central College',
//       degree: 'A/L Technology Stream',
//       period: '2019-2021',
//       logo: vccLogo,
//     },
//     {
//       institution: 'Waharaka Maha Vidyalaya',
//       // degree intentionally omitted based on your details
//       period: '2018',
//       logo: wmvLogo,
//     },
//   ];

//   useEffect(() => {
//     const titleObserver = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) setIsTitleVisible(true);
//         else setIsTitleVisible(false);
//       },
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
//     const cards = document.querySelectorAll('.edu-card');

//     if (section) {
//       const titleEl = section.querySelector('#edu-title');
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
//       id="education"
//       ref={sectionRef}
//       className="relative py-20 md:py-24 min-h-screen bg-black text-white overflow-hidden"
//     >
//       {/* Background gradient lights */}
//       <div
//         className="pointer-events-none absolute inset-0 z-[1] opacity-90"
//         style={{
//           background:
//             'radial-gradient(1200px 600px at 15% 20%, rgba(99, 179, 237, 0.14), transparent 60%), radial-gradient(900px 500px at 85% 80%, rgba(45, 212, 191, 0.12), transparent 60%)',
//         }}
//       />

//       {/* Content wrapper above background */}
//       <div className="relative z-10 container mx-auto px-6 max-w-6xl">
//         <div
//           className={`text-center mb-16 transition-all duration-600 ease-out ${
//             isTitleVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-90'
//           }`}
//         >
//           <h2
//             id="edu-title"
//             className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent pb-3"
//           >
//             Academic Journey
//           </h2>
//           <div className="h-1 w-24 bg-gradient-to-r from-sky-400 to-emerald-400 mx-auto mt-3" />
//           <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
//             A timeline of my educational milestones
//           </p>
//         </div>

//         <div className="relative max-w-4xl mx-auto">
//           <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-700 h-full rounded-full hidden md:block" />

//           {educationData.map((edu, index) => {
//             const isVisible = visibleIndexes.includes(index);
//             const direction = index % 2 === 0 ? 'left' : 'right';

//             return (
//               <div
//                 key={index}
//                 data-index={index}
//                 className={`edu-card relative mb-12 flex flex-col md:flex-row items-center transition-all duration-1000 ease-out ${
//                   direction === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
//                 } ${
//                   isVisible
//                     ? 'opacity-100 translate-x-0'
//                     : direction === 'left'
//                     ? 'opacity-0 -translate-x-32'
//                     : 'opacity-0 translate-x-32'
//                 }`}
//               >
//                 <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white rounded-full border-4 border-black shadow-lg hidden md:block" />

//                 {/* Card */}
//                 <div
//                   className={`edu-card-glow w-full md:w-5/12 p-8 rounded-2xl bg-black border border-transparent shadow-xl ${
//                     direction === 'left' ? 'md:mr-12' : 'md:ml-12'
//                   }`}
//                   style={{ perspective: '1000px' }}
//                 >
//                   <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
//                     <div className="flex items-center space-x-4">
//                       <div
//                         className={`img-wrap ${
//                           index === 0 ? 'w-20 h-20' : 'w-16 h-16'
//                         } shrink-0`}
//                         title={`${edu.institution} logo`}
//                       >
//                         <img
//                           src={edu.logo}
//                           alt={`${edu.institution} logo`}
//                           className="img-zoom w-full h-full object-contain"
//                           loading="lazy"
//                         />
//                         <span className="shine-img" />
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-semibold text-white">{edu.institution}</h3>
//                         <p className="text-gray-400 text-sm">{edu.period}</p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Degree is optional */}
//                   {edu.degree && (
//                     <p className="text-gray-400 text-base leading-relaxed">{edu.degree}</p>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Styles for gradient border/aura with smooth transitions */}
//       <style>{`
//         .edu-card-glow {
//           background:
//             linear-gradient(#0b0b0b, #0b0b0b) padding-box,
//             linear-gradient(90deg, rgba(56,189,248,0.75), rgba(16,185,129,0.75)) border-box;
//           border: 1.5px solid transparent;
//           border-radius: 16px;
//           position: relative;
//           isolation: isolate;
//           overflow: hidden;
//           transition:
//             transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
//             box-shadow 0.5s ease,
//             border-color 0.45s ease,
//             filter 0.5s ease;
//         }
//         .edu-card-glow:before {
//           content: "";
//           position: absolute;
//           inset: -1px;
//           background:
//             radial-gradient(800px 180px at var(--sx, 10%) -20%, rgba(56,189,248,.28), transparent 35%),
//             radial-gradient(520px 140px at var(--sx, 90%) 120%, rgba(16,185,129,.24), transparent 35%);
//           opacity: var(--so, 0);
//           transition: opacity .35s ease;
//           pointer-events: none;
//         }
//         .edu-card-glow:after {
//           content: "";
//           position: absolute;
//           inset: -8px;
//           border-radius: 20px;
//           background:
//             radial-gradient(60% 60% at 50% 0%, rgba(56,189,248,.35), transparent 70%),
//             radial-gradient(55% 55% at 80% 100%, rgba(16,185,129,.30), transparent 70%);
//           filter: blur(28px);
//           opacity: 0;
//           transition: opacity .45s ease;
//           pointer-events: none;
//         }
//         .edu-card-glow:hover {
//           transform: scale(1.05) translateY(-8px);
//           box-shadow:
//             0 20px 65px rgba(56,189,248,0.28),
//             0 12px 38px rgba(16,185,129,0.22),
//             0 5px 10px rgba(0,0,0,0.4);
//           filter: brightness(1.08);
//         }
//         .edu-card-glow:hover:before,
//         .edu-card-glow:hover:after {
//           opacity: 1;
//         }

//         /* Logo zoom effect */
//         .img-wrap {
//           position: relative;
//           overflow: hidden;
//           border-radius: 0.5rem;
//           background: rgba(255,255,255,0.03);
//           transform: translateZ(0);
//         }
//         .shine-img {
//           position: absolute;
//           inset: 0;
//           pointer-events: none;
//           opacity: 0;
//           background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,.28) 45%, transparent 60%);
//           transform: translateX(-120%);
//         }
//         .img-wrap:hover .shine-img {
//           animation: shine 1.05s ease forwards;
//           opacity: 1;
//         }
//         @keyframes shine {
//           to { transform: translateX(120%); }
//         }

//         .img-zoom {
//           transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
//           will-change: transform;
//           transform-origin: center;
//         }
//         .edu-card-glow:hover .img-zoom {
//           transform: scale(1.1);
//         }
//       `}</style>
//     </section>
//   );
// }

// export default Education;


import React, { useEffect, useRef, useState } from 'react';
import uocLogo from '../assets/uoc.png';
import idmLogo from '../assets/idm.png';
import vccLogo from '../assets/vcc.png';
import wmvLogo from '../assets/wmv.png';

function Education() {
  const sectionRef = useRef(null);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  const educationData = [
    {
      institution: 'University of Colombo',
      degree: 'Bachelor of Information and Communication Technology (BICT Honours)',
      period: '2023 - Present',
      logo: uocLogo,
    },
    {
      institution: 'IDM Achievers International Campus',
      degree: 'Diploma in English',
      period: '2023',
      logo: idmLogo,
    },
    {
      institution: 'Veyangoda Bandaranayake Central College',
      degree: 'A/L Technology Stream',
      period: '2019 - 2021',
      logo: vccLogo,
    },
    {
      institution: 'Waharaka Maha Vidyalaya',
      degree: 'O/L Examination',
      period: '2018',
      logo: wmvLogo,
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
            setVisibleIndexes((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          } else {
            setVisibleIndexes((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = sectionRef.current;
    const cards = document.querySelectorAll('.edu-card');

    if (section) {
      const titleEl = section.querySelector('#edu-title');
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
      id="education"
      ref={sectionRef}
      className="relative py-20 md:py-24 min-h-screen bg-black text-white overflow-hidden"
    >
      {/* Purple gradient background */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-90"
        style={{
          background:
            'radial-gradient(1200px 600px at 15% 20%, rgba(168, 85, 247, 0.15), transparent 60%), radial-gradient(900px 500px at 85% 80%, rgba(217, 70, 239, 0.12), transparent 60%)',
        }}
      />

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        {/* Section title */}
        <div
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            isTitleVisible
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-6 scale-90'
          }`}
        >
          <h2
            id="edu-title"
            className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-fuchsia-400 via-violet-400 to-purple-500 bg-clip-text text-transparent pb-3"
          >
            Academic Journey
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-fuchsia-400 to-purple-500 mx-auto mt-3" />
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A timeline of my educational milestones
          </p>
        </div>

        {/* Timeline cards */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-purple-700 h-full rounded-full hidden md:block" />

          {educationData.map((edu, index) => {
            const isVisible = visibleIndexes.includes(index);
            const direction = index % 2 === 0 ? 'left' : 'right';

            return (
              <div
                key={index}
                data-index={index}
                className={`edu-card relative mb-12 flex flex-col md:flex-row items-center transition-all duration-1000 ease-out ${
                  direction === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
                } ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : direction === 'left'
                    ? 'opacity-0 -translate-x-32'
                    : 'opacity-0 translate-x-32'
                }`}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white rounded-full border-4 border-black shadow-lg hidden md:block"></div>

                <div
                  className={`edu-card-glow w-full md:w-5/12 p-8 rounded-2xl bg-black border border-transparent shadow-xl ${
                    direction === 'left' ? 'md:mr-12' : 'md:ml-12'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`img-wrap ${
                          index === 0 ? 'w-20 h-20' : 'w-16 h-16'
                        } shrink-0`}
                      >
                        <img
                          src={edu.logo}
                          alt={`${edu.institution} logo`}
                          className="img-zoom w-full h-full object-contain"
                          loading="lazy"
                        />
                        <span className="shine-img" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{edu.institution}</h3>
                        <p className="text-gray-400 text-sm">{edu.period}</p>
                      </div>
                    </div>
                  </div>
                  {edu.degree && (
                    <p className="text-gray-400 text-base leading-relaxed">
                      {edu.degree}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Purple glow + motion effects */}
      <style>{`
        .edu-card-glow {
          background:
            linear-gradient(#0b0b0b, #0b0b0b) padding-box,
            linear-gradient(90deg, rgba(168,85,247,0.75), rgba(217,70,239,0.75)) border-box;
          border: 1.5px solid transparent;
          border-radius: 16px;
          position: relative;
          isolation: isolate;
          overflow: hidden;
          transition:
            transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.5s ease,
            border-color 0.45s ease,
            filter 0.5s ease;
        }
        .edu-card-glow:before {
          content: "";
          position: absolute;
          inset: -1px;
          background:
            radial-gradient(800px 180px at var(--sx, 10%) -20%, rgba(168,85,247,.3), transparent 35%),
            radial-gradient(520px 140px at var(--sx, 90%) 120%, rgba(217,70,239,.25), transparent 35%);
          opacity: var(--so, 0);
          transition: opacity .35s ease;
          pointer-events: none;
        }
        .edu-card-glow:after {
          content: "";
          position: absolute;
          inset: -8px;
          border-radius: 20px;
          background:
            radial-gradient(60% 60% at 50% 0%, rgba(168,85,247,.35), transparent 70%),
            radial-gradient(55% 55% at 80% 100%, rgba(217,70,239,.3), transparent 70%);
          filter: blur(28px);
          opacity: 0;
          transition: opacity .45s ease;
          pointer-events: none;
        }
        .edu-card-glow:hover {
          transform: scale(1.05) translateY(-8px);
          box-shadow:
            0 20px 65px rgba(168,85,247,0.25),
            0 12px 38px rgba(217,70,239,0.22),
            0 5px 10px rgba(0,0,0,0.4);
          filter: brightness(1.08);
        }
        .edu-card-glow:hover:before,
        .edu-card-glow:hover:after {
          opacity: 1;
        }

        /* Logo shine & zoom */
        .img-wrap {
          position: relative;
          overflow: hidden;
          border-radius: 0.5rem;
          background: rgba(255,255,255,0.03);
          transform: translateZ(0);
        }
        .shine-img {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0;
          background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,.28) 45%, transparent 60%);
          transform: translateX(-120%);
        }
        .img-wrap:hover .shine-img { 
          animation: shine 1.05s ease forwards; 
          opacity: 1; 
        }
        @keyframes shine { 
          to { transform: translateX(120%); } 
        }

        .img-zoom { 
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1); 
          will-change: transform; 
          transform-origin: center;
        }
        .edu-card-glow:hover .img-zoom { 
          transform: scale(1.1); 
        }
      `}</style>
    </section>
  );
}

export default Education;
