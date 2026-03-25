import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TechStackSection from './components/TechStackSection';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import { Layout, Globe, ChevronRight, Monitor, Play, Menu, X } from 'lucide-react';

function App() {
  const [activeView, setActiveView] = useState('hero'); // 'hero', 'stack', 'work', 'about'
  const [activeMode, setActiveMode] = useState('architect'); // 'architect', 'creator'
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const colors = {
    architect: {
      primary: '#00e5ff',
      primaryContainer: 'rgba(0, 229, 255, 0.2)'
    },
    creator: {
      primary: '#ff00ff',
      primaryContainer: 'rgba(255, 0, 255, 0.2)'
    }
  };

  const currentColors = colors[activeMode];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'stack', label: 'Skills' },
    { id: 'work', label: 'Portfolio' },
    { id: 'about', label: 'Connect' }
  ];

  const renderContent = () => {
    switch (activeView) {
      case 'stack': return <TechStackSection />;
      case 'work': return <ProjectsSection />;
      case 'about': return <AboutSection />;
      default: return (
        <section className="min-h-[calc(100vh-64px)] p-4 md:p-12 flex flex-col pt-24 lg:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-outline h-full flex-grow border border-outline relative">

            {/* THE ARCHITECT CARD */}
            <div
              onClick={() => setActiveMode('architect')}
              className={`bg-surface p-6 md:p-16 flex flex-col relative group overflow-hidden cursor-pointer transition-all duration-700 ${activeMode === 'architect' ? 'ring-1 ring-primary/50 z-10' : 'opacity-30 hover:opacity-60'}`}
            >
              <div className="font-mono text-[10px] text-primary tracking-[0.3em] uppercase mb-4">—— SOFTWARE ENGINEER ——</div>
              <h1 className="text-4xl md:text-8xl font-display font-bold text-on-surface leading-none mb-6">
                The <br /> <span className={`text-primary ${activeMode === 'architect' ? 'glow-cyan' : ''}`}>Architect</span>
              </h1>

              <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed max-w-sm mb-8">
                Engineering robust digital infrastructures with surgical precision.
                Specializing in scalable backend architectures and maintainable systems.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Node.js', 'React', '.NET', 'SQL'].map(t => (
                  <span key={t} className="badge-tech border-primary/30 text-primary">{t}</span>
                ))}
              </div>

              <div className="mt-auto hidden sm:block w-full aspect-video bg-surface-container-lowest border border-outline-variant p-4 font-mono text-[10px] md:text-xs text-primary/40 leading-tight">
                <div className="flex gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
                  <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
                </div>
                <p>// Booting architectural_module_v2.0.8...</p>
                <p className="text-primary/60">class SystemEngine {'{'}</p>
                <p className="pl-4">async initialize(): Promise&lt;void&gt; {'{'}</p>
                <p className="pl-8 text-secondary/40">await this.cluster.sync();</p>
              </div>
            </div>

            {/* THE CREATOR CARD */}
            <div
              onClick={() => setActiveMode('creator')}
              className={`bg-surface p-6 md:p-16 flex flex-col relative group overflow-hidden cursor-pointer transition-all duration-700 ${activeMode === 'creator' ? 'ring-1 ring-secondary/50 z-10' : 'opacity-30 hover:opacity-60'}`}
            >
              <div className="font-mono text-[10px] text-secondary tracking-[0.3em] uppercase mb-4 text-right">—— INDIE GAME DEV ——</div>
              <h1 className="text-4xl md:text-8xl font-display font-bold text-on-surface leading-none mb-6 text-right">
                The <br /> <span className={`text-secondary ${activeMode === 'creator' ? 'glow-magenta' : ''}`}>Creator</span>
              </h1>

              <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed max-w-sm mb-8 ml-auto text-right">
                Crafting immersive worlds and interactive narratives. Fusing technical logic with artistic flair to build games.
              </p>

              <div className="flex flex-wrap gap-2 mb-8 justify-end">
                {['Unity', 'C#', 'Unreal Engine', 'Blueprint'].map(t => (
                  <span key={t} className="badge-tech border-secondary/30 text-secondary">{t}</span>
                ))}
              </div>

              <div className="mt-auto hidden sm:block w-full aspect-video bg-surface-container-lowest border border-outline-variant relative overflow-hidden flex items-center justify-center">
                <div className={`absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent transition-opacity duration-500 ${activeMode === 'creator' ? 'opacity-100' : 'opacity-0'}`}></div>
                <Globe className={`w-16 md:w-24 h-16 md:h-24 text-secondary/20 transition-transform duration-700 ${activeMode === 'creator' ? 'scale-110' : ''}`} />
                <div className="absolute bottom-4 right-4 font-mono text-[10px] text-secondary text-right">SCENE_RENDER_01</div>
              </div>
            </div>

            {/* CENTER "ENTER SYSTEM" BUTTON - Responsive Adjustment */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none w-full flex justify-center px-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveView('stack');
                }}
                className="bg-surface border border-outline px-6 md:px-8 py-3 md:py-4 text-[10px] md:text-xs font-mono font-bold tracking-[0.3em] uppercase hover:border-primary hover:text-primary transition-all duration-300 pointer-events-auto shadow-2xl flex items-center gap-3 backdrop-blur-xl group"
              >
                <Play size={14} fill="currentColor" className="opacity-50" />
                ENTER SYSTEM
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* System Diagnostics at Bottom */}
          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-end pb-12">
            <div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-on-surface mb-1 tracking-tight">System_Diagnostics</h3>
              <p className="text-[10px] text-on-surface-variant font-mono tracking-tighter uppercase">Real-time performance monitoring.</p>
            </div>
            <div className="terminal-window h-24 md:h-32 flex flex-col gap-1 text-[10px] overflow-hidden shadow-inner opacity-60">
              <div className="flex justify-between border-b border-outline-variant pb-1 mb-1 opacity-50">
                <span>MAIN -- SYSLOG</span>
                <span className="animate-pulse">ONLINE</span>
              </div>
              <p className="text-primary">&gt; loading {activeMode.toUpperCase()} module...</p>
              <p className="text-on-surface-variant">&gt; systems sync complete.</p>
            </div>
          </div>
        </section>
      );
    }
  };

  return (
    <div
      className="min-h-screen bg-surface text-on-surface font-body overflow-x-hidden bg-grid selection:bg-primary/30 transition-colors duration-500"
      style={{
        '--color-primary': currentColors.primary,
        '--color-primary-container': currentColors.primaryContainer
      }}
    >
      <Sidebar activeView={activeView} setView={setActiveView} />

      {/* Navbar with Mobile Toggle */}
      <header className="fixed top-0 left-0 right-0 h-16 border-b border-outline bg-surface/80 backdrop-blur-md z-[60] flex items-center justify-between px-6 xl:pl-56">
        <div
          className="font-display font-bold text-lg tracking-[0.2em] text-on-surface cursor-pointer"
          onClick={() => { setActiveView('hero'); setIsMobileMenuOpen(false); }}
        >
          DEV-ARCADE
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`text-[11px] font-mono font-bold tracking-[0.2em] uppercase transition-colors ${activeView === item.id ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="xl:hidden p-2 text-on-surface-variant hover:text-primary transition-colors z-[70]"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden sm:flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full border ${activeMode === 'architect' ? 'border-primary bg-primary/20' : 'border-outline'}`}></div>
          <div className={`w-3 h-3 rounded-full border ${activeMode === 'creator' ? 'border-secondary bg-secondary/20' : 'border-outline'}`}></div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-surface z-[55] flex flex-col items-center justify-center p-6 xl:hidden animate-in fade-in slide-in-from-top duration-300">
          <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-20 pointer-events-none"></div>
          <nav className="flex flex-col gap-8 text-center relative z-10 w-full">
            <div className="text-[10px] font-mono text-primary uppercase tracking-[0.5em] mb-4 opacity-50">Select_Node</div>
            {navItems.map((item, i) => (
              <button
                key={item.id}
                onClick={() => { setActiveView(item.id); setIsMobileMenuOpen(false); }}
                className="group flex flex-col items-center gap-2"
              >
                <span className="text-[10px] font-mono text-on-surface-variant">0x0{i + 1}</span>
                <span className={`text-4xl font-display font-bold tracking-widest uppercase transition-all ${activeView === item.id ? 'text-primary scale-110' : 'text-on-surface hover:text-primary'}`}>
                  {item.label}
                </span>
              </button>
            ))}

            <div className="mt-12 p-8 border border-outline bg-surface-container-low max-w-xs mx-auto w-full">
              <div className="text-[10px] font-mono text-on-surface-variant uppercase mb-4 tracking-tighter">System_Status</div>
              <div className="flex justify-between items-center text-[10px] font-mono mb-4">
                <span className="text-primary">CORE_SYNC</span>
                <span className="text-secondary tracking-widest">ACTIVE</span>
              </div>
              <a
                href="/resume.pdf"
                download="Devan_Resume.pdf"
                className="block w-full border border-primary/30 py-2 text-[10px] font-mono text-primary text-center hover:bg-primary/10 transition-colors uppercase tracking-widest"
              >
                EXPORT_RESUME.pdf
              </a>
            </div>
          </nav>
        </div>
      )}

      <main className="xl:pl-48 h-screen pt-16 transition-all duration-500 overflow-y-auto custom-scrollbar relative">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
