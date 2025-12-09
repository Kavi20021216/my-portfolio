import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMysql,
} from "react-icons/si";
import * as THREE from "three";

// ====== YOUR ASSETS ======
import Me from "../assets/kaveetha.jpeg";
import ResumePDF from "../assets/Kaveetha_UOC_CV.pdf";

// ────────────────────────────────────────────────────────────────────────────────
// Kaveetha's profile – dark/purple neon theme + extra background effects
// ────────────────────────────────────────────────────────────────────────────────
function Profile() {
  const threeRef = useRef(null);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isInView, setIsInView] = useState(false);

  // ↳ rotating titles
  const wordsToAnimate = ["Full-Stack Developer", "Programmer", "Problem Solver"];

  // Track visibility (for motion)
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => setIsInView(e.isIntersecting)),
      { threshold: 0.2 }
    );
    if (contentRef.current) obs.observe(contentRef.current);
    return () => contentRef.current && obs.unobserve(contentRef.current);
  }, []);

  // Typing effect
  useEffect(() => {
    const tick = () => {
      const i = loopNum % wordsToAnimate.length;
      const full = wordsToAnimate[i];
      const speed = isDeleting ? 80 : Math.random() * 100 + 100;

      setTypingSpeed(speed);
      setText(
        isDeleting ? full.substring(0, text.length - 1) : full.substring(0, text.length + 1)
      );

      if (!isDeleting && text === full) {
        setTimeout(() => setIsDeleting(true), 900);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((n) => n + 1);
      }
    };

    const t = setTimeout(tick, typingSpeed);
    return () => clearTimeout(t);
  }, [text, isDeleting, loopNum, typingSpeed]);

  // Background Three.js (purple tones)
  useEffect(() => {
    const mount = threeRef.current;
    const host = containerRef.current;
    if (!mount || !host) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(host.clientWidth, host.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    // deeper purple fog
    scene.fog = new THREE.FogExp2(0x0b0613, 0.022);

    const camera = new THREE.PerspectiveCamera(
      60,
      host.clientWidth / host.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 80);

    // violet lighting
    const light = new THREE.DirectionalLight(0xc084fc, 0.85);
    light.position.set(5, 10, 7);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x6d28d9, 0.6));

    const particleCount = 2000;
    const radius = 110;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // gradients: fuchsia → violet
    const colorA = new THREE.Color("#e879f9");
    const colorB = new THREE.Color("#a78bfa");

    for (let i = 0; i < particleCount; i++) {
      const r = radius * Math.cbrt(Math.random());
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const t = Math.random();
      const c = colorA.clone().lerp(colorB, t);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const pGeom = new THREE.BufferGeometry();
    pGeom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    pGeom.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const pMat = new THREE.PointsMaterial({
      size: 1.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.22,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(pGeom, pMat);
    scene.add(particles);

    const wire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(18, 1),
      new THREE.MeshPhysicalMaterial({
        color: 0xc4b5fd, // violet-300
        wireframe: true,
        transparent: true,
        opacity: 0.27,
      })
    );
    scene.add(wire);

    let mouseX = 0,
      mouseY = 0;

    const onMouseMove = (e) => {
      const rect = host.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x;
      mouseY = y;
    };

    host.addEventListener("mousemove", onMouseMove);

    const onResize = () => {
      renderer.setSize(host.clientWidth, host.clientHeight);
      camera.aspect = host.clientWidth / host.clientHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", onResize);

    let start = performance.now();
    let raf;

    const animate = (t) => {
      const elapsed = (t - start) * 0.001;

      camera.position.x += (mouseX * 30 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 20 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      const pos = pGeom.attributes.position;
      for (let i = 0; i < particleCount; i++) {
        const ix = i * 3;
        const iy = ix + 1;
        const iz = ix + 2;

        const dx = Math.sin(elapsed * 0.2 + ix) * 0.02;
        const dy = Math.cos(elapsed * 0.25 + iy) * 0.02;
        const dz = Math.sin(elapsed * 0.22 + iz) * 0.02;

        pos.array[ix] += dx;
        pos.array[iy] += dy;
        pos.array[iz] += dz;
      }
      pos.needsUpdate = true;

      particles.rotation.y += 0.0008;
      particles.rotation.x += 0.0003;

      wire.rotation.x += 0.0007;
      wire.rotation.y -= 0.001;

      wire.material.opacity = 0.27 + Math.sin(elapsed * 0.8) * 0.08;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      host.removeEventListener("mousemove", onMouseMove);
      mount.removeChild(renderer.domElement);
      pGeom.dispose();
      pMat.dispose();
      wire.geometry.dispose();
      wire.material.dispose();
      renderer.dispose();
    };
  }, []);

  // Tilt on avatar
  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;

    let currentX = 0,
      currentY = 0,
      targetX = 0,
      targetY = 0,
      raf;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      targetX = x * 20;
      targetY = -y * 20;
    };
    const onLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      const scale = targetX !== 0 || targetY !== 0 ? 1.05 : 1;
      el.style.transform = `perspective(1000px) rotateX(${currentY}deg) rotateY(${currentX}deg) scale3d(${scale},${scale},${scale})`;
      raf = requestAnimationFrame(animate);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(animate);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="profile"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-black text-slate-200 overflow-hidden py-20 px-4 sm:px-6"
    >
      {/* Three.js mount */}
      <div ref={threeRef} className="absolute inset-0 z-0" />

      {/* EXTRA BACKGROUND EFFECT (animated purple mesh) */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] mix-blend-screen"
        style={{
          opacity: 0.45,
          background:
            "radial-gradient(800px 400px at 15% 20%, rgba(168,85,247,0.18), transparent 60%), radial-gradient(900px 500px at 85% 80%, rgba(217,70,239,0.14), transparent 60%)",
          animation: "pulseGlow 8s ease-in-out infinite alternate",
        }}
      />

      {/* neon soft glows (purple theme) */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-90"
        style={{
          background:
            "radial-gradient(1200px 600px at 10% 10%, rgba(192,132,252,0.15), transparent 60%), radial-gradient(1000px 500px at 90% 90%, rgba(168,85,247,0.12), transparent 60%)",
        }}
      />

      {/* subtle moving grid lines */}
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

      {/* NEW: floating purple blob layer (extra animation) */}
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

      {/* NEW: rotating conic glow (very subtle) */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          opacity: 0.10,
          mixBlendMode: "screen",
          background:
            "conic-gradient(from 0deg at 50% 50%, rgba(168,85,247,0.0), rgba(168,85,247,0.25), rgba(217,70,239,0.0) 60%)",
          transformOrigin: "50% 50%",
          animation: "spinSlow 60s linear infinite",
        }}
      />

      {/* NEW — Framer Motion floating orbs (extra motion style) */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-[2]"
        aria-hidden="true"
      >
        {/* orb 1 */}
        <motion.span
          className="absolute rounded-full"
          style={{
            width: 180, height: 180, top: "12%", left: "8%",
            background: "radial-gradient(circle at 30% 30%, rgba(236,72,153,0.35), rgba(168,85,247,0.18), transparent 70%)",
            filter: "blur(8px)",
            mixBlendMode: "screen",
          }}
          initial={{ x: -20, y: -10, opacity: 0.7, rotate: 0 }}
          animate={{ x: 20, y: 10, opacity: 0.9, rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        {/* orb 2 */}
        <motion.span
          className="absolute rounded-full"
          style={{
            width: 220, height: 220, bottom: "14%", right: "12%",
            background: "radial-gradient(circle at 70% 60%, rgba(139,92,246,0.35), rgba(217,70,239,0.2), transparent 70%)",
            filter: "blur(10px)",
            mixBlendMode: "screen",
          }}
          initial={{ x: 15, y: 0, opacity: 0.6, rotate: 0 }}
          animate={{ x: -15, y: -15, opacity: 0.85, rotate: -360 }}
          transition={{ duration: 26, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        {/* orb 3 */}
        <motion.span
          className="absolute rounded-full"
          style={{
            width: 160, height: 160, top: "55%", left: "38%",
            background: "radial-gradient(circle at 40% 40%, rgba(168,85,247,0.35), rgba(236,72,153,0.18), transparent 70%)",
            filter: "blur(8px)",
            mixBlendMode: "screen",
          }}
          initial={{ y: 0, opacity: 0.55 }}
          animate={{ y: -25, opacity: 0.8 }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      </motion.div>

      {/* NEW — Bubble background animation (subtle, purple) */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
        aria-hidden="true"
      >
        {Array.from({ length: 16 }).map((_, i) => {
          const size = 8 + (i % 5) * 6; // 8–32px
          const left = (i * 6 + (i % 3) * 4) % 100; // spread across width
          const delay = (i * 0.9) % 7; // stagger
          const duration = 14 + (i % 7) * 2; // 14–26s
          return (
            <span
              key={i}
              className="bubble"
              style={{
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          );
        })}
      </div>

      <div
        ref={contentRef}
        className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 max-w-7xl mx-auto"
      >
        {/* Avatar */}
        <div
          ref={imageRef}
          className="relative group transition-transform duration-300 ease-out"
          style={{ animation: "fadeInSmooth 1.2s ease-out", transformStyle: "preserve-3d" }}
        >
          <img
            src={Me}
            alt="Kaveetha Randili"
            className="w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full border-8 border-white/10 object-cover shadow-2xl transition-all duration-700"
          />
        </div>

        {/* Content */}
        <div className="text-center lg:text-left space-y-6 max-w-2xl">
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent pb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Kaveetha Randili
          </motion.h1>

          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-fuchsia-400 to-violet-500 mx-auto lg:mx-0"
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: 96, opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold"
            style={{ minHeight: "90px" }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
              {text}
            </span>
            <span className="blinking-cursor" />
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-slate-300"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Full-stack engineer passionate about building fast, reliable, and user-friendly web apps.
          </motion.p>

          <motion.p
            className="text-base sm:text-lg text-slate-400 italic"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Currently studying Information and Communication Technology(Honours) at the University of Colombo.
          </motion.p>

          {/* Skills */}
          <motion.div
            className="flex justify-center lg:justify-start items-center gap-6 pt-4 flex-wrap"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-md font-semibold tracking-wider w-full lg:w-auto mb-2 lg:mb-0 text-slate-400">
              Skills:
            </span>
            {[
              { Icon: SiHtml5, label: "HTML" },
              { Icon: SiCss3, label: "CSS" },
              { Icon: SiJavascript, label: "JavaScript" },
              { Icon: SiReact, label: "React" },
              { Icon: SiNodedotjs, label: "Node.js" },
              { Icon: SiExpress, label: "Express" },
            ].map(({ Icon, label }, idx) => (
              <motion.span
                key={label}
                className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/5 border border-white/10 shadow-sm transition hover:scale-110 hover:bg-white/10"
                title={label}
                aria-label={label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.5,
                  delay: isInView ? 1.1 + idx * 0.05 : 0,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ scale: 1.15, rotate: 5 }}
              >
                <Icon className="h-6 w-6 opacity-80 filter grayscale transition hover:opacity-100 hover:grayscale-0" />
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex justify-center lg:justify-start items-center gap-4 pt-8 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {[
              { label: "GitHub", href: "https://github.com/Kavi20021216", external: true },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/kaveetha-randili-824715378/", external: true },
              { label: "Download CV", href: ResumePDF, download: "Kaveetha_UOC_CV.pdf" },
              { label: "Email", href: "mailto:kaveetharandili2002@example.com" },
            ].map(({ label, href, external, download }, idx) => (
              <motion.a
                key={label}
                href={href}
                className="btn-outline-gradient relative overflow-hidden rounded-full px-8 py-3 font-semibold text-white text-base shadow-md border-2 border-transparent bg-clip-padding transition-all duration-500"
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                {...(download ? { download } : {})}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={
                  isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.95 }
                }
                transition={{
                  duration: 0.5,
                  delay: isInView ? 1.4 + idx * 0.1 : 0,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ transformOrigin: "center" }}
              >
                <span className="relative z-10">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInSmooth {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: none; }
        }
        .blinking-cursor {
          display: inline-block; width: 1ch; margin-left: 2px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
          animation: blink 1s step-start infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }

        /* Extra effect animations */
        @keyframes pulseGlow {
          0% { filter: drop-shadow(0 0 0 rgba(168,85,247,0.25)); transform: scale(1); }
          100% { filter: drop-shadow(0 0 24px rgba(217,70,239,0.25)); transform: scale(1.02); }
        }
        @keyframes gridDrift {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 50px 50px, 50px 50px; }
        }

        /* NEW: soft blob drift (three layered radial gradients shifting size/position) */
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

        /* NEW: slow rotation for conic glow */
        @keyframes spinSlow {
          to { transform: rotate(360deg); }
        }

        /* NEW: bubbles */
        @keyframes floatUp {
          0%   { transform: translateY(110%) scale(1);   opacity: 0; }
          10%  { opacity: .25; }
          90%  { opacity: .25; }
          100% { transform: translateY(-10%) scale(1.05); opacity: 0; }
        }
        @keyframes bubbleWobble {
          0% { transform: translateX(0); }
          50% { transform: translateX(10px); }
          100% { transform: translateX(0); }
        }
        .bubble {
          position: absolute;
          bottom: -10%;
          left: 50%;
          border-radius: 9999px;
          background:
            radial-gradient(circle at 30% 30%, rgba(250,245,255,.9), rgba(250,245,255,.3) 35%, rgba(167,139,250,.18) 55%, rgba(147,51,234,.12) 70%, rgba(0,0,0,0) 72%),
            radial-gradient(circle at 70% 70%, rgba(244,114,182,.25), rgba(139,92,246,.2) 40%, rgba(0,0,0,0) 65%);
          border: 1px solid rgba(196,181,253,.25);
          filter: blur(.3px);
          box-shadow: inset 0 0 10px rgba(216,180,254,.25), 0 0 8px rgba(139,92,246,.08);
          animation:
            floatUp var(--dur,18s) linear infinite,
            bubbleWobble 6s ease-in-out infinite;
          opacity: .22;
        }
        .bubble::after {
          content: "";
          position: absolute;
          top: 8%;
          left: 18%;
          width: 35%;
          height: 35%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,.8), rgba(255,255,255,0));
          filter: blur(2px);
          opacity: .8;
        }

        /* Gradient button → purple by default, scale on hover */
        .btn-outline-gradient {
          background: linear-gradient(90deg,#e879f9,#a78bfa,#8b5cf6); /* purple on load */
          color: #fff;                 /* white text on load */
          border-radius: 9999px;
          border: 2px solid transparent;
          position: relative;
          isolation: isolate;

          transform: translateZ(0);
          transition: transform .25s ease, box-shadow .25s ease, filter .25s ease;
          box-shadow: 0 0 0 rgba(167,139,250,0); /* subtle glow off */
        }
        .btn-outline-gradient:hover {
          transform: scale(1.07);      /* scale on hover */
          box-shadow: 0 6px 28px rgba(167,139,250,.35);
          filter: saturate(110%);
        }
      `}</style>
    </section>
  );
}

export default Profile;
