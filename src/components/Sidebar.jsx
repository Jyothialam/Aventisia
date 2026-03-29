import React from 'react';
import { 
  Users, 
  Cpu, 
  Library, 
  Layers, 
  Monitor, 
  ListOrdered, 
  Zap, 
  Briefcase, 
  Play, 
  ShieldCheck, 
  BookOpen, 
  Key, 
  Database,
  Link2
} from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, active = false }) => {
  return (
    <div className={`flex items-center gap-3 px-4 py-1.5 border-l-2 transition-all cursor-pointer ${
      active 
        ? 'bg-primary/5 border-primary text-primary font-semibold' 
        : 'border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-700'
    }`}>
      <Icon size={16} />
      <span className="text-[13px]">{label}</span>
    </div>
  );
};

const SectionHeader = ({ label }) => (
  <div className="px-4 py-2 mt-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
    {label}
  </div>
);

const Sidebar = () => {
  return (
    <aside className="w-56 h-full bg-white flex flex-col pt-2 overflow-y-auto">
      <SectionHeader label="MY PROJECTS" />
      <SidebarItem icon={Cpu} label="Agents" />
      <SidebarItem icon={Layers} label="AI Models" />
      <SidebarItem icon={Library} label="Library" />

      <SectionHeader label="ORCHESTRATOR" />
      <SidebarItem icon={Play} label="Published" />
      <SidebarItem icon={Monitor} label="Machines" />
      <SidebarItem icon={ListOrdered} label="Queues" />
      <SidebarItem icon={Zap} label="Triggers" />
      <SidebarItem icon={Briefcase} label="Jobs" />
      <SidebarItem icon={Play} label="Executions" />
      <SidebarItem icon={ShieldCheck} label="Vault" />
      <SidebarItem icon={BookOpen} label="Knowledge Base" active={true} />
      <SidebarItem icon={Key} label="Key Store" />

      <SectionHeader label="ADMIN" />
      <SidebarItem icon={Database} label="Tenant" />
      <SidebarItem icon={Link2} label="Integrations" />
    </aside>
  );
};

export default Sidebar;
