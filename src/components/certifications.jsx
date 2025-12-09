// import React, { useEffect, useMemo, useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { ExternalLink } from "lucide-react";


// import skyrekLogo from "../assets/skyrek-logo.png";
// import skyrekCert from "../assets/skyrek-cert.png";

// export default function Certifications({ items }) {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);

//   // Title entrance animation
//   const isTitleInView = useInView(titleRef, { once: true, amount: 0.25 });

//   // Single certification (from your screenshot). Add more later by pushing to this array.
//   const certifications = useMemo(
//     () =>
//       items ?? [
//         {
//           title: "Full-Stack Web Development (MERN)",
//           holder: "kaveetha randili",
//           org: "SKYREK (PVT) LTD",
//           orgShort: "Skyrek",
//           issued: "Issued Nov 5, 2025",
//           // If you later get a credential ID, just add: credentialId: "ABC-123",
//           verifyUrl: "https://certificate.skyrek.com/",
//           orgLogo: skyrekLogo,
//           preview: skyrekCert,
//         },
//       ],
//     [items]
//   );

//   return (
//     <section
//       id="certifications"
//       ref={sectionRef}
//       className="relative min-h-screen bg-black text-white overflow-hidden py-24 px-4 sm:px-6"
//     >
//       {/* ✨ Reusing the Profile background (purple neon layers, lightweight) */}
//       <div
//         className="pointer-events-none absolute inset-0 z-[1] mix-blend-screen"
//         style={{
//           opacity: 0.45,
//           background:
//             "radial-gradient(800px 400px at 15% 20%, rgba(168,85,247,0.18), transparent 60%), radial-gradient(900px 500px at 85% 80%, rgba(217,70,239,0.14), transparent 60%)",
//           animation: "pulseGlow 8s ease-in-out infinite alternate",
//         }}
//       />
//       <div
//         className="pointer-events-none absolute inset-0 z-[1] opacity-90"
//         style={{
//           background:
//             "radial-gradient(1200px 600px at 10% 10%, rgba(192,132,252,0.15), transparent 60%), radial-gradient(1000px 500px at 90% 90%, rgba(168,85,247,0.12), transparent 60%)",
//         }}
//       />
//       <div
//         className="pointer-events-none absolute inset-0 z-[1] opacity-[0.06]"
//         style={{
//           backgroundImage:
//             "linear-gradient(transparent 0 24px, rgba(255,255,255,.25) 25px 25px), linear-gradient(90deg, transparent 0 24px, rgba(255,255,255,.25) 25px 25px)",
//           backgroundSize: "25px 25px, 25px 25px",
//           backgroundPosition: "0 0, 0 0",
//           animation: "gridDrift 20s linear infinite",
//         }}
//       />
//       <div
//         className="pointer-events-none absolute inset-0 z-[1]"
//         style={{
//           opacity: 0.35,
//           filter: "blur(20px) saturate(120%)",
//           mixBlendMode: "screen",
//           background:
//             "radial-gradient(240px 240px at 22% 28%, rgba(192,132,252,0.22), transparent 60%), radial-gradient(320px 320px at 78% 65%, rgba(217,70,239,0.20), transparent 60%), radial-gradient(260px 260px at 45% 82%, rgba(147,51,234,0.18), transparent 60%)",
//           animation: "blobDrift 24s ease-in-out infinite",
//         }}
//       />
//       <div
//         className="pointer-events-none absolute inset-0 z-[1]"
//         style={{
//           opacity: 0.1,
//           mixBlendMode: "screen",
//           background:
//             "conic-gradient(from 0deg at 50% 50%, rgba(168,85,247,0.0), rgba(168,85,247,0.25), rgba(217,70,239,0.0) 60%)",
//           transformOrigin: "50% 50%",
//           animation: "spinSlow 60s linear infinite",
//         }}
//       />

//       {/* Content */}
//       <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-10">
//         {/* Title */}
//         <div
//           ref={titleRef}
//           className={`text-center transition-all duration-700 ease-out ${
//             isTitleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//           }`}
//         >
//           <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-fuchsia-400 via-violet-400 to-purple-500 bg-clip-text text-transparent pb-3">
//             Certifications
//           </h2>
//           <div className="h-1 w-24 bg-gradient-to-r from-fuchsia-400 to-violet-500 mx-auto" />
//           <p className="mt-4 text-gray-300/90">
//             Verified credentials that showcase my skills and dedication.
//           </p>
//         </div>

//         {/* Cards – single (for now), grid-ready for future */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
//           {certifications.map((cert, idx) => (
//             <CertCard cert={cert} idx={idx} key={cert.title} />
//           ))}
//         </div>
//       </div>

//       {/* Local styles reused from Profile */}
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
//           0% {
//             background-position: 22% 28%, 78% 65%, 45% 82%;
//             background-size: 240px 240px, 320px 320px, 260px 260px;
//           }
//           50% {
//             background-position: 26% 35%, 74% 64%, 48% 76%;
//             background-size: 270px 270px, 340px 340px, 290px 290px;
//           }
//           100% {
//             background-position: 22% 28%, 78% 65%, 45% 82%;
//             background-size: 240px 240px, 320px 320px, 260px 260px;
//           }
//         }
//         @keyframes spinSlow { to { transform: rotate(360deg); } }

//         /* card visuals */
//         .card-glow {
//           background: linear-gradient(#0b0b0b,#0b0b0b) padding-box,
//                       linear-gradient(90deg, rgba(232,121,249,.6), rgba(167,139,250,.6)) border-box;
//           border: 1.5px solid transparent;
//           border-radius: 22px;
//           box-shadow: 0 10px 40px rgba(0,0,0,.35);
//           overflow: hidden;
//           position: relative;
//           isolation: isolate;
//           transition: box-shadow .4s ease, filter .4s ease;
//         }
//         .card-glow:hover {
//           box-shadow: 0 22px 60px rgba(168,85,247,.28), 0 12px 34px rgba(236,72,153,.18), 0 6px 12px rgba(0,0,0,.45);
//           filter: brightness(1.05);
//         }
//       `}</style>
//     </section>
//   );
// }

// function CertCard({ cert, idx }) {
//   const cardRef = useRef(null);
//   useInView(cardRef, { once: true, margin: "-10% 0px -10% 0px" });

//   // soft mouse glow (x only)
//   useEffect(() => {
//     const el = cardRef.current;
//     if (!el) return;
//     const onMove = (e) => {
//       const r = el.getBoundingClientRect();
//       const x = ((e.clientX - r.left) / r.width) * 100;
//       el.style.setProperty("--sx", `${x}%`);
//     };
//     el.addEventListener("mousemove", onMove);
//     return () => el.removeEventListener("mousemove", onMove);
//   }, []);

//   return (
//     <motion.article
//       ref={cardRef}
//       initial={{ opacity: 0, y: 24, scale: 0.98 }}
//       whileInView={{ opacity: 1, y: 0, scale: 1 }}
//       whileHover={{ scale: 1.02 }}
//       viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
//       transition={{ duration: 0.7, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
//       className="card-glow flex flex-col"
//     >
//       {/* TOP: institute logo */}
//       <div className="p-6 border-b border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent">
//         <div className="w-full flex items-center justify-center">
//           {cert.orgLogo ? (
//             <img
//               src={cert.orgLogo}
//               alt={`${cert.orgShort || cert.org} logo`}
//               className="h-16 object-contain"
//               loading="lazy"
//             />
//           ) : (
//             <span className="text-2xl font-bold tracking-widest">{cert.orgShort || cert.org}</span>
//           )}
//         </div>
//       </div>

//       {/* OPTIONAL preview image (thumbnail of the certificate) */}
//       {cert.preview && (
//         <div className="px-6 pt-4">
//           <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
//             <img src={cert.preview} alt={`${cert.title} certificate`} className="w-full object-cover" loading="lazy" />
//           </div>
//         </div>
//       )}

//       {/* BOTTOM: certificate details */}
//       <div className="p-6 flex flex-col gap-2">
//         <h3 className="text-lg sm:text-xl font-semibold leading-tight text-white/95">{cert.title}</h3>
//         <p className="text-sm text-gray-400">{cert.org}</p>
//         <p className="text-sm text-gray-400">Recipient: <span className="text-gray-200">{cert.holder}</span></p>
//         <p className="text-sm text-gray-500">{cert.issued}</p>
//         {cert.credentialId && (
//           <p className="text-xs text-gray-500">Credential ID: <span className="text-gray-300">{cert.credentialId}</span></p>
//         )}

//         <div className="mt-4">
//           <a
//             href={cert.verifyUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="btn-outline-gradient inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white transition-all duration-300"
//             title="Open certificate.skyrek.com to verify"
//           >
//             <span>Verify on Skyrek</span>
//             <ExternalLink size={16} className="opacity-80" />
//           </a>
//         </div>
//       </div>
//     </motion.article>
//   );
// }

import React, { useEffect, useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import skyrekLogo from "../assets/skyrek-logo.png"; // make sure this one exists
import awsLogo from "../assets/Aws-logo.png";



export default function Certifications({ items }) {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.25 });

  // Single Skyrek cert now; add more later by pushing to the array
  const certifications = useMemo(
    () =>
      items ?? [
        {
          title: "Full-Stack Web Development (MERN)",
          holder: "kaveetha randili",
          org: "SKYREK (PVT) LTD",
          orgShort: "Skyrek",
          issued: "Issued Nov 05, 2025",
          verifyUrl: "https://certificate.skyrek.com/student/certificates/completion",
          orgLogo: skyrekLogo,
          // If you later put a screenshot under /public/certificates/skyrek-cert.png,
          // uncomment the next line:
          // preview: "/certificates/skyrek-cert.png",
        },
        {
          title: "AWS Cloud Practitioner Essentials",
          holder: "kaveetha randili",
          org: "AWS Training & Certification",
          orgShort: "AWS",
          issued: "Issued Dec 06, 2025",
          verifyUrl:"https://drive.google.com/file/d/1Uf3c85DolmdE4DYZXcowtwdNgOZxewdz/view?usp=drive_link",
          orgLogo: awsLogo,
          // If you later put a screenshot under /public/certificates/skyrek-cert.png,
          // uncomment the next line:
          // preview: "/certificates/skyrek-cert.png",
        }
      ],
    [items]
  );

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative min-h-screen bg-black text-white overflow-hidden py-24 px-4 sm:px-6"
    >
      {/* background (matches your Profile page style) */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] mix-blend-screen"
        style={{
          opacity: 0.45,
          background:
            "radial-gradient(800px 400px at 15% 20%, rgba(168,85,247,0.18), transparent 60%), radial-gradient(900px 500px at 85% 80%, rgba(217,70,239,0.14), transparent 60%)",
          animation: "pulseGlow 8s ease-in-out infinite alternate",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-90"
        style={{
          background:
            "radial-gradient(1200px 600px at 10% 10%, rgba(192,132,252,0.15), transparent 60%), radial-gradient(1000px 500px at 90% 90%, rgba(168,85,247,0.12), transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(transparent 0 24px, rgba(255,255,255,.25) 25px 25px), linear-gradient(90deg, transparent 0 24px, rgba(255,255,255,.25) 25px 25px)",
          backgroundSize: "25px 25px, 25px 25px",
          backgroundPosition: "0 0, 0 0",
          animation: "gridDrift 20s linear infinite",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          opacity: 0.35,
          filter: "blur(20px) saturate(120%)",
          mixBlendMode: "screen",
          background:
            "radial-gradient(240px 240px at 22% 28%, rgba(192,132,252,0.22), transparent 60%), radial-gradient(320px 320px at 78% 65%, rgba(217,70,239,0.20), transparent 60%), radial-gradient(260px 260px at 45% 82%, rgba(147,51,234,0.18), transparent 60%)",
          animation: "blobDrift 24s ease-in-out infinite",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          opacity: 0.1,
          mixBlendMode: "screen",
          background:
            "conic-gradient(from 0deg at 50% 50%, rgba(168,85,247,0.0), rgba(168,85,247,0.25), rgba(217,70,239,0.0) 60%)",
          transformOrigin: "50% 50%",
          animation: "spinSlow 60s linear infinite",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-10">
        <div
          ref={titleRef}
          className={`text-center transition-all duration-700 ease-out ${
            isTitleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-fuchsia-400 via-violet-400 to-purple-500 bg-clip-text text-transparent pb-3">
            Certifications
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-fuchsia-400 to-violet-500 mx-auto" />
          <p className="mt-4 text-gray-300/90">
            Verified credentials that showcase my skills and dedication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <CertCard cert={cert} idx={idx} key={cert.title} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulseGlow {
          0% { filter: drop-shadow(0 0 0 rgba(168,85,247,0.25)); transform: scale(1); }
          100% { filter: drop-shadow(0 0 24px rgba(217,70,239,0.25)); transform: scale(1.02); }
        }
        @keyframes gridDrift {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 50px 50px, 50px 50px; }
        }
        @keyframes blobDrift {
          0% {
            background-position: 22% 28%, 78% 65%, 45% 82%;
            background-size: 240px 240px, 320px 320px, 260px 260px;
          }
          50% {
            background-position: 26% 35%, 74% 64%, 48% 76%;
            background-size: 270px 270px, 340px 340px, 290px 290px;
          }
          100% {
            background-position: 22% 28%, 78% 65%, 45% 82%;
            background-size: 240px 240px, 320px 320px, 260px 260px;
          }
        }
        @keyframes spinSlow { to { transform: rotate(360deg); } }

        .card-glow {
          background: linear-gradient(#0b0b0b,#0b0b0b) padding-box,
                      linear-gradient(90deg, rgba(232,121,249,.6), rgba(167,139,250,.6)) border-box;
          border: 1.5px solid transparent;
          border-radius: 22px;
          box-shadow: 0 10px 40px rgba(0,0,0,.35);
          overflow: hidden;
          position: relative;
          isolation: isolate;
          transition: box-shadow .4s ease, filter .4s ease;
        }
        .card-glow:hover {
          box-shadow: 0 22px 60px rgba(168,85,247,.28), 0 12px 34px rgba(236,72,153,.18), 0 6px 12px rgba(0,0,0,.45);
          filter: brightness(1.05);
        }
      `}</style>
    </section>
  );
}

function CertCard({ cert, idx }) {
  const cardRef = useRef(null);
  useInView(cardRef, { once: true, margin: "-10% 0px -10% 0px" });

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      el.style.setProperty("--sx", `${x}%`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.7, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="card-glow flex flex-col"
    >
      {/* TOP: institute logo */}
      <div className="p-6 border-b border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent">
        <div className="w-full flex items-center justify-center">
          {cert.orgLogo ? (
            <img
              src={cert.orgLogo}
              alt={`${cert.orgShort || cert.org} logo`}
              className="h-16 object-contain"
              loading="lazy"
            />
          ) : (
            <span className="text-2xl font-bold tracking-widest">
              {cert.orgShort || cert.org}
            </span>
          )}
        </div>
      </div>

      {/* OPTIONAL preview image */}
      {cert.preview && (
        <div className="px-6 pt-4">
          <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <img
              src={cert.preview}
              alt={`${cert.title} certificate`}
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      )}

      {/* BOTTOM: details */}
      <div className="p-6 flex flex-col gap-2">
        <h3 className="text-lg sm:text-xl font-semibold leading-tight text-white/95">
          {cert.title}
        </h3>
        <p className="text-sm text-gray-400">{cert.org}</p>
        
        <p className="text-sm text-gray-500">{cert.issued}</p>

        <div className="mt-4">
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gradient inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white transition-all duration-300"
            title="Open certificate.skyrek.com to verify"
          >
            <span>Verify on Skyrek</span>
            {/* inline external-link icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" className="opacity-80">
              <path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
              <path fill="currentColor" d="M5 5h6v2H7v10h10v-4h2v6H5V5z" />
            </svg>
          </a>
        </div>
      </div>
    </motion.article>
  );
}
