import React from 'react';
import { Home, Gamepad2, Terminal as TerminalIcon, FileText } from 'lucide-react';

export default function Sidebar({ activeView, setView }) {
  const items = [
    { id: 'hero', icon: <Home size={18} />, label: 'DEV_NODE' },
    { id: 'work', icon: <Gamepad2 size={18} />, label: 'GAME_NODE' },
    { id: 'stack', icon: <TerminalIcon size={18} />, label: 'TERMINAL' },
    { id: 'about', icon: <FileText size={18} />, label: 'LOG' }
  ];

  return (
    <aside className="w-48 border-r border-outline h-screen flex flex-col pt-24 fixed left-0 top-0 bg-surface z-40 hidden xl:flex">
      <div className="px-6 mb-8">
        <div className="text-[10px] font-mono text-on-surface-variant uppercase tracking-tighter opacity-50">System_Admin</div>
        <div className="text-[10px] font-mono text-primary uppercase tracking-tighter animate-pulse-slow">v2.0.8-stable</div>
        <div className="text-[10px] font-mono text-primary uppercase tracking-tighter animate-pulse-slow">vibecode_test</div>
      </div>

      <nav className="flex-grow">
        {items.map((item, i) => (
          <button
            key={item.id}
            onClick={() => setView(item.id)}
            className={`w-full flex items-center gap-3 px-6 py-4 cursor-pointer transition-all border-l-2 ${activeView === item.id ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-on-surface-variant hover:text-on-surface hover:bg-on-surface/5'}`}
          >
            {item.icon}
            <span className="font-mono text-[11px] font-bold tracking-widest uppercase">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-6 mt-auto">
        <a
          href="/resume.pdf"
          download="Devan_Resume.pdf"
          className="block w-full border border-outline p-4 text-[10px] font-mono text-on-surface-variant hover:border-primary hover:text-primary hover:glow-cyan transition-all uppercase tracking-widest bg-surface-container-low text-center"
        >
          DEPLOY.RESUME
        </a>
      </div>
    </aside>
  );
}
