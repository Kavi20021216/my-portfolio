// // src/components/Skills.jsx
// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import {
//   SiHtml5,
//   SiCss3,
//   SiJavascript,
//   SiReact,
//   SiNodedotjs,
//   SiExpress,
//   SiMongodb,
//   SiGithub,
//   SiPython,
//   SiC,
//   SiAndroidstudio,
//   SiAdobeillustrator,
//   SiTailwindcss,
//   SiFigma,
// } from "react-icons/si";

// export default function Skills() {
//   const containerRef = useRef(null);
//   const titleRef = useRef(null);
//   const isInView = useInView(containerRef, {
//     once: false,
//     amount: 0.2,
//     margin: "-10% 0px -10% 0px",
//   });
//   const isTitleInView = useInView(titleRef, { once: false, amount: 0.2 });

//   const skills = [
//     { Icon: SiHtml5, name: "HTML5", color: "#E34F26" },
//     { Icon: SiCss3, name: "CSS3", color: "#1572B6" },
//     { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
//     { Icon: SiReact, name: "React", color: "#61DAFB" },
//     { Icon: SiNodedotjs, name: "Node.js", color: "#339933" },
//     { Icon: SiExpress, name: "Express.js", color: "#888888" },
//     { Icon: SiMongodb, name: "MongoDB", color: "#4DB33D" },
//     { Icon: SiGithub, name: "GitHub", color: "#ffffff" },
//     { Icon: SiPython, name: "Python", color: "#3776AB" },
//     { Icon: SiC, name: "C", color: "#A8B9CC" },
//     { Icon: SiAndroidstudio, name: "Android Studio", color: "#3DDC84" },
//     { Icon: SiAdobeillustrator, name: "Adobe Illustrator", color: "#FF9A00" },
//     { Icon: SiTailwindcss, name: "TailwindCSS", color: "#38BDF8" },
//     { Icon: SiFigma, name: "Figma", color: "#A259FF" },
//   ];

//   const itemVariants = {
//     hidden: { opacity: 0, y: 26, rotateX: -10, scale: 0.96 },
//     show: (i) => ({
//       opacity: 1,
//       y: 0,
//       rotateX: 0,
//       scale: 1,
//       transition: {
//         delay: 0.05 * i,
//         duration: 0.7,
//         ease: [0.22, 1, 0.36, 1],
//       },
//     }),
//   };

//   return (
//     <section
//       id="skills"
//       className="relative py-24 bg-black text-white overflow-hidden flex flex-col items-center justify-center"
//     >
//       {/* Purple ambient background */}
//       <div
//         className="absolute inset-0 -z-10 opacity-80 animate-bgShift"
//         style={{
//           background:
//             "radial-gradient(1000px 600px at 10% 15%, rgba(192,132,252,0.09), transparent 60%), radial-gradient(900px 500px at 90% 85%, rgba(168,85,247,0.08), transparent 60%)",
//         }}
//       />

//       {/* Soft bubbles (very subtle) */}
//       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//         {Array.from({ length: 12 }).map((_, i) => {
//           const size = 12 + ((i * 7) % 18); // 12–30px
//           const left = (i * 8) % 100;
//           const delay = (i * 0.7) % 6;
//           const dur = 14 + (i % 6) * 2;
//           return (
//             <span
//               key={i}
//               className="absolute rounded-full"
//               style={{
//                 left: `${left}%`,
//                 bottom: "-8%",
//                 width: size,
//                 height: size,
//                 background:
//                   "radial-gradient(circle at 30% 30%, rgba(255,255,255,.6), rgba(216,180,254,.2) 40%, rgba(0,0,0,0) 70%)",
//                 border: "1px solid rgba(196,181,253,.25)",
//                 filter: "blur(.4px)",
//                 animation: `floatUp ${dur}s linear ${delay}s infinite`,
//                 opacity: 0.22,
//               }}
//             />
//           );
//         })}
//       </div>

//       {/* Title */}
//       <div
//         ref={titleRef}
//         className={`relative z-10 text-center mb-14 transition-all duration-700 ease-out ${
//           isTitleInView
//             ? "opacity-100 translate-y-0 scale-100"
//             : "opacity-0 translate-y-6 scale-95"
//         }`}
//       >
//         <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-fuchsia-400 via-violet-400 to-purple-500 bg-clip-text text-transparent pb-3">
//           Skills & Technologies
//         </h2>
//         <div className="h-1 w-28 bg-gradient-to-r from-fuchsia-400 to-violet-500 mx-auto mt-4 rounded-full" />
//         <p className="text-gray-400 mt-5 text-lg max-w-2xl mx-auto">
//           Focused, production-ready stack with a clean, modern feel.
//         </p>
//       </div>

//       {/* Skill Grid */}
//       <div
//         ref={containerRef}
//         className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto px-6"
//       >
//         {skills.map(({ Icon, name, color }, idx) => (
//           <motion.div
//             key={name}
//             custom={idx}
//             variants={itemVariants}
//             initial="hidden"
//             animate={isInView ? "show" : "hidden"}
//             whileHover={{ rotateX: 6, rotateY: -6, scale: 1.04 }}
//             className="group relative rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] backdrop-blur-sm"
//             style={{
//               transformStyle: "preserve-3d",
//               willChange: "transform",
//             }}
//           >
//             {/* Neon frame on hover */}
//             <span className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-fuchsia-400/30 via-violet-400/30 to-purple-500/30 blur-xl" />
//             {/* Shimmer line */}
//             <span className="pointer-events-none absolute -inset-px rounded-2xl overflow-hidden">
//               <span className="absolute -left-1/3 top-0 h-[2px] w-2/3 bg-gradient-to-r from-transparent via-white/60 to-transparent rotate-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-[180%] transition-all duration-[1200ms] ease-out" />
//             </span>

//             {/* Icon */}
//             <div
//               className="text-5xl mb-4 z-10 transition-transform duration-700 group-hover:scale-125 group-hover:rotate-3 drop-shadow-[0_0_12px_rgba(167,139,250,0.35)]"
//               style={{ color }}
//             >
//               <Icon />
//             </div>

//             {/* Label */}
//             <p className="font-semibold text-gray-300 group-hover:text-white transition-colors duration-400 z-10">
//               {name}
//             </p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Local styles */}
//       <style>{`
//         @keyframes bgShift {
//           0% { background-position: 0% 0%; }
//           50% { background-position: 100% 100%; }
//           100% { background-position: 0% 0%; }
//         }
//         .animate-bgShift {
//           background-size: 200% 200%;
//           animation: bgShift 18s ease-in-out infinite;
//         }

//         @keyframes floatUp {
//           0%   { transform: translateY(110%) scale(1);   opacity: 0; }
//           10%  { opacity: .25; }
//           90%  { opacity: .25; }
//           100% { transform: translateY(-10%) scale(1.06); opacity: 0; }
//         }
//       `}</style>
//     </section>
//   );
// }

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGithub,
  SiPython,
  SiC,
  SiAndroidstudio,
  SiAdobeillustrator,
  SiTailwindcss,
  SiFigma,
} from "react-icons/si";

export default function Skills() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: false,
    amount: 0.2,
    margin: "-10% 0px -10% 0px",
  });
  const isTitleInView = useInView(titleRef, { once: false, amount: 0.2 });

  const skills = [
    { Icon: SiHtml5, name: "HTML5", color: "#E34F26" },
    { Icon: SiCss3, name: "CSS3", color: "#1572B6" },
    { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { Icon: SiReact, name: "React", color: "#61DAFB" },
    { Icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { Icon: SiExpress, name: "Express.js", color: "#888888" },
    { Icon: SiMongodb, name: "MongoDB", color: "#4DB33D" },
    { Icon: SiGithub, name: "GitHub", color: "#ffffff" },
    { Icon: SiPython, name: "Python", color: "#3776AB" },
    { Icon: SiC, name: "C", color: "#A8B9CC" },
    { Icon: SiAndroidstudio, name: "Android Studio", color: "#3DDC84" },
    { Icon: SiAdobeillustrator, name: "Adobe Illustrator", color: "#FF9A00" },
    { Icon: SiTailwindcss, name: "TailwindCSS", color: "#38BDF8" },
    { Icon: SiFigma, name: "Figma", color: "#A259FF" },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 26, rotateX: -10, scale: 0.96 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        delay: 0.05 * i,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section
      id="skills"
      className="relative py-24 bg-black text-white overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Purple ambient background */}
      <div
        className="absolute inset-0 -z-10 opacity-80 animate-bgShift"
        style={{
          background:
            "radial-gradient(1000px 600px at 10% 15%, rgba(192,132,252,0.09), transparent 60%), radial-gradient(900px 500px at 90% 85%, rgba(168,85,247,0.08), transparent 60%)",
        }}
      />

      {/* Soft bubbles (very subtle) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => {
          const size = 12 + ((i * 7) % 18); // 12–30px
          const left = (i * 8) % 100;
          const delay = (i * 0.7) % 6;
          const dur = 14 + (i % 6) * 2;
          return (
            <span
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${left}%`,
                bottom: "-8%",
                width: size,
                height: size,
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,255,255,.6), rgba(216,180,254,.2) 40%, rgba(0,0,0,0) 70%)",
                border: "1px solid rgba(196,181,253,.25)",
                filter: "blur(.4px)",
                animation: `floatUp ${dur}s linear ${delay}s infinite`,
                opacity: 0.22,
              }}
            />
          );
        })}
      </div>

      {/* Title */}
      <div
        ref={titleRef}
        className={`relative z-10 text-center mb-14 transition-all duration-700 ease-out ${
          isTitleInView
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-6 scale-95"
        }`}
      >
        <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-fuchsia-400 via-violet-400 to-purple-500 bg-clip-text text-transparent pb-3">
          Skills & Technologies
        </h2>
        <div className="h-1 w-28 bg-gradient-to-r from-fuchsia-400 to-violet-500 mx-auto mt-4 rounded-full" />
        <p className="text-gray-400 mt-5 text-lg max-w-2xl mx-auto">
          Focused, production-ready stack with a clean, modern feel.
        </p>
      </div>

      {/* Skill Grid */}
      <div
        ref={containerRef}
        className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto px-6"
      >
        {skills.map(({ Icon, name, color }, idx) => (
          <motion.div
            key={name}
            custom={idx}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            whileHover={{ rotateX: 6, rotateY: -6, scale: 1.04 }}
            className="group relative overflow-hidden rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] backdrop-blur-sm"
            style={{
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          >
            {/* NEW: Purple fill from bottom on hover */}
            <span
              className="card-fill"
              aria-hidden="true"
            />

            {/* Neon frame on hover (kept) */}
            <span className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-fuchsia-400/20 via-violet-400/20 to-purple-500/20 blur-xl" />

            {/* Shimmer line (kept) */}
            <span className="pointer-events-none absolute -inset-px rounded-2xl overflow-hidden">
              <span className="absolute -left-1/3 top-0 h-[2px] w-2/3 bg-gradient-to-r from-transparent via-white/60 to-transparent rotate-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-[180%] transition-all duration-[1200ms] ease-out" />
            </span>

            {/* Icon */}
            <div
              className="relative z-10 text-5xl mb-4 transition-transform duration-700 group-hover:scale-125 group-hover:rotate-3 drop-shadow-[0_0_12px_rgba(167,139,250,0.35)]"
              style={{ color }}
            >
              <Icon />
            </div>

            {/* Label */}
            <p className="relative z-10 font-semibold text-gray-300 group-hover:text-white transition-colors duration-400">
              {name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Local styles */}
      <style>{`
        @keyframes bgShift {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
        .animate-bgShift {
          background-size: 200% 200%;
          animation: bgShift 18s ease-in-out infinite;
        }

        @keyframes floatUp {
          0%   { transform: translateY(110%) scale(1);   opacity: 0; }
          10%  { opacity: .25; }
          90%  { opacity: .25; }
          100% { transform: translateY(-10%) scale(1.06); opacity: 0; }
        }

        /* Bottom-to-top purple fill layer */
        .card-fill {
          position: absolute;
          inset: 0;
          transform-origin: bottom;
          transform: scaleY(0);
          transition: transform 600ms cubic-bezier(0.22, 1, 0.36, 1), opacity 300ms ease;
          background: linear-gradient(
            to top,
            rgba(109, 40, 217, 0.65) 0%,
            rgba(147, 51, 234, 0.55) 40%,
            rgba(232, 121, 249, 0.45) 100%
          );
          opacity: 0.95;
          pointer-events: none;
          z-index: 0;
        }
        .group:hover .card-fill {
          transform: scaleY(1);
        }
      `}</style>
    </section>
  );
}
