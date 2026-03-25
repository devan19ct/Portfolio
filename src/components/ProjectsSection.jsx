import React from 'react';
import { ArrowUpRight, Globe, ExternalLink } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Torment Maze',
      area: 'Game Prototype',
      description: 'A horror game prototype built in Unreal Engine.',
      tech: ['Unreal Engine', 'Blueprint'],
      link: 'https://secret-element-studio.itch.io/tormentmaze'
    },
    {
      title: 'Thrigon Interactives',
      area: 'Studio Websit',
      description: 'A website for my game development studio. You can check our other games there.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      link: 'https://thrigon.studio/'
    },
    {
      title: 'Movie Explorer',
      area: 'Fun Website Project',
      description: 'A website that lets you explore movies and tv shows. You can search for movies and tv shows and get information about them.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      link: 'https://devan19ct.github.io/movie-explorer/'
    }
  ];

  return (
    <section id="work" className="p-6 md:p-12 min-h-screen bg-surface">
      <div className="mb-16">
        <h2 className="text-6xl md:text-8xl font-display font-bold text-on-surface mb-4">PROJECT_FILES</h2>
        <div className="font-mono text-xs text-on-surface-variant tracking-widest uppercase">QUERYING LOCAL DRIVE... [{projects.length}] ENTRIES FOUND</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-outline border border-outline">
        {projects.map((project, i) => (
          <div key={i} className="bg-surface p-8 group relative overflow-hidden flex flex-col min-h-[400px]">
            <div className="flex justify-between items-start mb-8">
               <div className="font-mono text-[10px] text-primary">{project.area}</div>
               <div className="font-mono text-[10px] text-on-surface-variant">REL_0{i+1}</div>
            </div>

            <h3 className="text-3xl font-display font-bold mb-6 group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-sm text-on-surface-variant mb-8 flex-grow leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-12">
              {project.tech.map(t => (
                <span key={t} className="badge-tech border-outline-variant text-on-surface-variant">{t}</span>
              ))}
            </div>

            <div className="flex justify-between items-center mt-auto">
               <a 
                 href={project.link} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="p-2 border border-outline hover:border-primary text-on-surface-variant hover:text-primary transition-all"
               >
                  <ExternalLink size={16} />
               </a>
               <a 
                 href={project.link} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 group/btn"
               >
                  <span className="font-mono text-[10px] font-bold tracking-widest uppercase">Open_File</span>
                  <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
               </a>
            </div>

            {/* Corner Accent */}
            <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none overflow-hidden">
               <div className="absolute bottom-0 right-0 border-r-2 border-b-2 border-primary/20 w-4 h-4"></div>
            </div>
          </div>
        ))}
      </div>

      {/* NDA Security Notice */}
      <div className="mt-16 p-8 border border-outline bg-surface-container-lowest relative overflow-hidden group">
         <div className="absolute top-0 left-0 w-1 h-full bg-error/50 group-hover:bg-error transition-colors"></div>
         <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0 w-16 h-16 border border-error/20 flex items-center justify-center bg-error/5 text-error">
               <div className="text-2xl font-display font-black">!</div>
            </div>
            <div className="space-y-2">
               <h4 className="text-sm font-mono font-bold text-error tracking-[0.2em] uppercase">Security_Protocol: Restricted_Access</h4>
               <p className="text-xs text-on-surface-variant font-mono leading-relaxed uppercase tracking-tighter max-w-2xl">
                 &gt; NOTICE: Most of my professional engineering assets and enterprise-level architectures are restricted under [CLIENT_NDA] and [COMPANY_ENCRYPTION_PROTOCOLS]. 
                 Authorized for public display: fun projects and open-source contributions only.
               </p>
            </div>
         </div>
      </div>
    </section>
  );
}
