import React from 'react';
import { Cpu, Database, Layout, Globe, Code, Layers } from 'lucide-react';

export default function TechStackSection() {
  const hardwareModules = [
    { name: 'ME(A)RN', level: 'MAX', icon: <Layout className="text-primary" />, color: 'primary' },
    { name: 'Unity', level: '90%', icon: <Code className="text-primary" />, color: 'primary' },
    { name: 'C# / .NET', level: '90%', icon: <Cpu className="text-primary" />, color: 'primary' },
    { name: 'UNREAL ENGINE', level: '95%', icon: <Code className="text-primary" />, color: 'primary' },
    { name: 'Blueprint', level: 'MAX', icon: <Layout className="text-primary" />, color: 'primary' },
    { name: 'PYTHON', level: 'MIN', icon: <Code className="text-primary" />, color: 'primary' }
  ];

  return (
    <section id="stack" className="p-6 md:p-12 min-h-screen bg-surface relative">
      <div className="flex flex-col xl:flex-row gap-8">
        
        {/* Main Tech Stack Grid */}
        <div className="xl:w-2/3">
          <h2 className="text-6xl md:text-8xl font-display font-bold text-on-surface mb-2">TECH_STACK.sys</h2>
          <p className="font-mono text-xs text-on-surface-variant mb-12 max-w-lg">
            Executing kernel scan... Initializing modular skill interface. ALL systems nominal.
            Visualizing architectural proficiency across distributed development environments.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {hardwareModules.map((module, i) => (
              <div key={i} className="dashboard-card p-6 flex flex-col group hover:border-on-surface transition-all">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-surface-container border border-outline group-hover:bg-on-surface/5 transition-colors">
                    {module.icon}
                  </div>
                  <div className="font-mono text-[10px] text-on-surface-variant">0x0{i+1}</div>
                </div>

                <div className="space-y-4">
                   <h3 className="font-display font-bold text-xl">{module.name}</h3>
                   <div className="h-1 w-full bg-surface-container relative">
                      <div 
                        className={`absolute left-0 top-0 h-full ${module.color === 'primary' ? 'bg-primary' : 'bg-secondary'}`}
                        style={{ width: module.level === 'MAX' ? '100%' : module.level === 'MIN' ? '10%' : module.level }}
                      ></div>
                   </div>
                   <div className="flex justify-between font-mono text-[10px] uppercase tracking-tighter">
                      <span className="text-on-surface-variant">Sync_Proficiency:</span>
                      <span className={module.color === 'primary' ? 'text-primary' : 'text-secondary'}>{module.level}</span>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline Sidebar */}
        <div className="xl:w-1/3 space-y-8">
           <div className="dashboard-card p-8 bg-surface-container-low min-h-64 h-full">
              <div className="flex items-center gap-2 mb-8 border-b border-outline pb-4">
                 <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                 <h3 className="font-mono text-xs font-bold tracking-[0.2em] uppercase">EXP_HISTORY.LOG</h3>
              </div>
              
              <div className="space-y-8">
                 {[
                   { date: 'PRESENT_DAY', title: 'SOFTWARE ENGINEER @ ByteSymphony', desc: 'Developing and maintaining high-performance web applications and software solutions for a diverse range of clients.' },
                   { date: '2025 — Present', title: 'GAME DEVELOPER (Self Employed) @ Thrigon Interactives', desc: 'Crafting immersive worlds and interactive narratives. Fusing technical logic with artistic flair to build games.' },
                   { date: '2025 — Present', title: 'GAME DEVELOPER UNREAL ENGINE (Part Time) @ Secret Element Studio', desc: 'Crafting immersive worlds and interactive narratives. Fusing technical logic with artistic flair to build games.' },
                   { date: '2023 — 2024', title: 'FULL STACK DEVELOPER @ Rawiwil PVT LTD', desc: 'Developed and maintained web applications and Softwares for various clients, focusing on performance and user experience.' },
                   { date: '2023', title: 'JUNIOR WEB DEVELOPER @ Al Katef IT Solutions', desc: 'Developed and maintained web applications and Softwares for various clients, focusing on performance and user experience.' },
                   { date: '2022 — 2023', title: 'WEB DEVELOPER Freelance @ Rawil Technologies', desc: 'Developed and maintained web applications for various clients, focusing on performance and user experience.' }
                 ].map((job, i) => (
                   <div key={i} className="relative pl-6 border-l border-outline-variant">
                      <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-outline-variant"></div>
                      <div className="font-mono text-[10px] text-primary mb-1 tracking-widest">{job.date}</div>
                      <div className="font-display font-bold text-sm mb-2">{job.title}</div>
                      <p className="text-xs text-on-surface-variant leading-relaxed">{job.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>

      </div>

      {/* Numerical Stats footer within module */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-outline">
         {[
           { val: '1000+', label: 'Commits_Logged' },
           { val: '12+', label: 'Systems_Deployed' },
           { val: '99.9%', label: 'Uptime_Metric' },
           { val: 'Unlimited', label: 'Bugs_Eliminated' }
         ].map(stat => (
           <div key={stat.label}>
              <div className="text-3xl font-display font-bold text-on-surface">{stat.val}</div>
              <div className="text-[10px] font-mono text-on-surface-variant uppercase tracking-widest">{stat.label}</div>
           </div>
         ))}
      </div>
    </section>
  );
}
