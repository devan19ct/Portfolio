import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function AboutSection() {
  const [copied, setCopied] = useState(false);
  const email = "devan19ct@gmail.com";

  const handleContact = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="p-6 md:p-12 min-h-screen bg-surface border-t border-outline relative overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-16">

        <div className="lg:w-1/2 space-y-8 relative z-10">
          <div className="font-mono text-[10px] text-tertiary tracking-[0.3em] uppercase">—— CORE_PROTOCOL ——</div>
          <h2 className="text-6xl font-display font-bold text-on-surface leading-tight">THE <br /> MISSION_LOG</h2>

          <div className="space-y-6 text-on-surface-variant font-mono text-xs leading-relaxed uppercase tracking-tighter">
            <p>
              &gt; STATUS: [OPERATIONAL] <br />
              &gt; OBJECTIVE: [BRIDGING_LOGIC_AND_ART]
            </p>
            <p className="border-l border-outline-variant pl-4 py-2">
              My approach connects the structural authority of heavy-lifting algorithms with the atmospheric polish of premium digital experiences.
              Fusing technical logic with artistic flair to build systems that resonate.
            </p>
            <p>
              Whether it's designing a responsive web architecture or writing a custom rendering pipeline for a game engine, the goal remains the same:
              <span className="text-primary font-bold"> solid, reliable tools infused with creativity.</span>
            </p>
          </div>

          <div className="pt-8 flex flex-wrap gap-4">
            <button
              onClick={handleContact}
              className={`btn-deploy transition-all ${copied ? 'bg-primary text-surface' : ''}`}
            >
              {copied ? 'COPIED_TO_CLIPBOARD' : 'Initialize Contact_Protocol'}
            </button>
            <a 
              href="https://wa.me/917025042862" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 border border-primary text-primary font-display text-xs tracking-widest uppercase hover:bg-primary hover:text-surface transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle size={14} />
              WhatsApp_Direct
            </a>
            <div className="flex gap-4 items-center">
              <a href="https://www.linkedin.com/in/-devan-m/" target="_blank" rel="noopener noreferrer" className="p-3 border border-outline hover:border-primary text-on-surface-variant hover:text-primary transition-all uppercase text-[10px] font-mono tracking-widest">LinkedIn</a>
              <a href="https://github.com/devan19ct" target="_blank" rel="noopener noreferrer" className="p-3 border border-outline hover:border-primary text-on-surface-variant hover:text-primary transition-all uppercase text-[10px] font-mono tracking-widest">GitHub</a>
            </div>
          </div>

          {copied && (
            <div className="text-[10px] font-mono text-primary animate-pulse">
              &gt; EMAIL_EXPORT_SUCCESS: {email}
            </div>
          )}
        </div>

        <div className="lg:w-1/2 relative flex items-center justify-center">
          {/* Decorative Geometric Elements matching the dashboard style */}
          <div className="relative w-full aspect-square max-w-md border border-outline bg-surface-container-low p-4 overflow-hidden group/profile">
            <div className="absolute top-0 right-0 w-16 h-1 w-16 bg-primary/20 z-20"></div>

            <div className="w-full h-full border border-outline-variant relative overflow-hidden grayscale group-hover/profile:grayscale-0 transition-all duration-700">
              <img
                src="/profile_1.jpg"
                alt="Devan Profile Default"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover/profile:opacity-0 z-0"
              />
              <img
                src="/profile_2.jpg"
                alt="Devan Profile Hover"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-0 group-hover/profile:opacity-100 z-[1]"
              />

              {/* Visual Accent Overlay - always on top */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60 z-[2]"></div>
            </div>

            {/* Small status badges */}
            <div className="absolute top-8 left-8 flex flex-col gap-2 z-20">
              <div className="h-1 w-8 bg-primary"></div>
              <div className="h-1 w-12 bg-outline-variant"></div>
              <div className="h-1 w-4 bg-secondary"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
