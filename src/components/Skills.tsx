import React, { useState } from 'react';
import { Calculator, GraduationCap, BookOpen, Megaphone, Users, Building, Check, Sparkles } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Skills: React.FC = () => {
  const { skills } = usePortfolio();
  const [activeFilter, setActiveFilter] = useState<'all' | string>('all');

  const filterTabs = [
    { id: 'all', label: 'All 6 Domains' },
    { id: 'accounting-finance', label: 'Accounting & Finance' },
    { id: 'education-teaching', label: 'Education & Teaching' },
    { id: 'tutoring-english', label: 'Private Tutoring & English' },
    { id: 'marketing-advertising', label: 'Advertising & Marketing' },
    { id: 'networking-jobs', label: 'Networking & Job Connections' },
    { id: 'real-estate-sales', label: 'Real Estate & Commission Sales' },
  ];

  const filteredSkills = activeFilter === 'all' 
    ? skills 
    : skills.filter((cat) => cat.id === activeFilter);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'accounting-finance':
        return <Calculator className="w-6 h-6 text-[#c5a059]" />;
      case 'education-teaching':
        return <GraduationCap className="w-6 h-6 text-[#c5a059]" />;
      case 'tutoring-english':
        return <BookOpen className="w-6 h-6 text-[#c5a059]" />;
      case 'marketing-advertising':
        return <Megaphone className="w-6 h-6 text-[#c5a059]" />;
      case 'networking-jobs':
        return <Users className="w-6 h-6 text-[#c5a059]" />;
      case 'real-estate-sales':
        return <Building className="w-6 h-6 text-[#c5a059]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#c5a059]" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#080f24] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-wider text-[#c5a059] uppercase mb-2">
              02. Professional Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 text-balance">
              My Professional Skills
            </h2>
            <p className="text-base text-slate-300 font-light leading-relaxed">
              Systematically organized across six distinct practical areas—enabling adaptive contributions to commercial firms, educational institutions, property owners, and community organizations.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-2 text-xs text-slate-400 shrink-0 bg-[#0e1938] border border-[#1e2c56] px-4 py-2.5 rounded-xl">
            <span className="font-semibold text-[#c5a059]">6 Distinct Disciplines</span>
            <span aria-hidden="true">·</span>
            <span>30+ Core Competencies</span>
          </div>
        </div>

        {/* Interactive Segmented Filter Control */}
        <div className="flex items-center gap-1.5 p-1.5 bg-[#0e1938] border border-[#1e2c56] rounded-xl overflow-x-auto scrollbar-none mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-gradient-to-r from-[#dfbe76] to-[#c5a059] text-slate-950 font-semibold shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-[#162347]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl bg-[#0e1938]/80 border border-[#1e2c56] hover:border-[#c5a059]/50 transition-all flex flex-col justify-between p-6 sm:p-7 group shadow-lg"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#142044] border border-[#243566] flex items-center justify-center group-hover:scale-105 group-hover:border-[#c5a059]/60 transition-transform">
                    {getCategoryIcon(category.id)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-[#162347] px-2.5 py-1 rounded-md">
                    {category.skills.length} Capabilities
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#dfbe76] transition-colors">
                  {category.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Explicit skills bullet points */}
                <div className="space-y-2.5 mb-8">
                  <div className="text-[11px] font-semibold text-[#c5a059] uppercase tracking-wider mb-2">
                    Key Areas of Practice:
                  </div>
                  {category.skills.map((skillItem, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <div className="w-4 h-4 rounded-full bg-[#1b2b54] flex items-center justify-center text-[#c5a059] shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="font-normal">{skillItem}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Competency metrics */}
              <div className="pt-5 border-t border-[#18264e] space-y-3">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Proficiency Highlights:
                </div>
                {category.competencies.map((comp, cIdx) => (
                  <div key={cIdx} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300 font-medium truncate max-w-[80%]">{comp.name}</span>
                      <span className="text-slate-400 font-mono text-[11px] tabular-nums">{comp.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#142044] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#8c6f32] to-[#c5a059] rounded-full transition-all duration-700"
                        style={{ width: `${comp.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
