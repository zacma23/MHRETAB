import React from 'react';
import { Award, Compass, HeartHandshake, Layers, ShieldCheck, UserCheck, FileDown, ArrowUpRight } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const About: React.FC = () => {
  const { profile, setIsCvModalOpen, setIsHireModalOpen } = usePortfolio();

  const coreStrengths = [
    {
      icon: Layers,
      title: 'Multi-Disciplinary Versatility',
      text: 'Seamlessly operating across numeric accounting systems, pedagogical education, brand marketing, and commercial real estate transactions.'
    },
    {
      icon: UserCheck,
      title: 'Articulate Communication',
      text: 'Deep interpersonal empathy and clear communication, enabling effortless connection with young pupils, parents, executives, and clients.'
    },
    {
      icon: Compass,
      title: 'Agile Adaptability',
      text: 'Rapidly absorbing organizational standards, community dynamics, and sector regulations to deliver immediate, practical solutions.'
    },
    {
      icon: HeartHandshake,
      title: 'Strategic Bridge Building',
      text: 'A natural networker dedicated to matching job seekers with employers, buyers with sellers, and businesses with mutually beneficial growth.'
    },
    {
      icon: ShieldCheck,
      title: 'Uncompromising Work Ethic',
      text: 'Committed to accuracy in bookkeeping, thoroughness in teaching preparations, and integrity in commission-based commercial deals.'
    },
    {
      icon: Award,
      title: 'Commitment to People',
      text: 'A profound personal mission to empower students academically and support business founders with reliable day-to-day excellence.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0a122a] border-t border-[#18264e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider text-[#c5a059] uppercase mb-2">
            01. Professional Overview
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance mb-4">
            About Mhretabe Abrhame
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Versatile, hardworking, and driven by a genuine passion for connecting opportunities, educating students, and supporting organizational success.
          </p>
        </div>

        {/* Narrative & Personal Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base leading-relaxed">
            <p className="text-lg text-white font-normal leading-relaxed border-b border-[#1e2c56] pb-6">
              "I have a passion for helping people, connecting opportunities, supporting businesses, educating students, and delivering practical solutions. My diverse professional background enables me to work with individuals, organizations, educational institutions, and businesses in different sectors."
            </p>

            <p>
              Throughout my professional journey, I have cultivated a cross-functional skillset that unites the analytical rigor of accounting with the human warmth of education and the strategic instinct of business development. In accounting and bookkeeping, I bring meticulous precision to financial records, transaction documentation, and administrative reporting.
            </p>

            <p>
              In education, I have mentored elementary students and tutored learners up to high school level, specializing in English grammar, vocabulary, reading comprehension, and structured academic guidance. I take pride in turning difficult academic hurdles into stepping stones for student confidence.
            </p>

            <p>
              Simultaneously, my work in advertising, real estate sales, and job connections reflects my passion for commercial collaboration. By understanding the mutual needs of buyers, sellers, job seekers, and hiring managers, I deliver trustworthy results in commission-based and relationship-driven environments.
            </p>

            {/* Quick Action row */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsCvModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-950 bg-[#c5a059] hover:bg-[#dfbe76] rounded-xl transition-colors cursor-pointer shadow-sm"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Professional Profile (CV)</span>
              </button>

              <button
                onClick={() => setIsHireModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-5 py-3 text-sm font-medium text-slate-200 hover:text-white bg-[#142044] hover:bg-[#1a2b5c] border border-[#233566] rounded-xl transition-colors cursor-pointer"
              >
                <span>Initiate Collaboration</span>
                <ArrowUpRight className="w-4 h-4 text-[#c5a059]" />
              </button>
            </div>
          </div>

          {/* Right Column: Key Professional Profile Attributes */}
          <div className="lg:col-span-5 bg-[#0e1938] border border-[#1e2c56] rounded-2xl p-6 sm:p-8 relative">
            <div className="text-xs font-semibold text-[#c5a059] uppercase tracking-wider mb-4">
              Core Credentials & Value Pillars
            </div>
            
            <div className="space-y-4 text-sm">
              <div className="flex flex-col py-2 border-b border-[#18264e]">
                <span className="text-xs text-slate-400">Full Name</span>
                <span className="text-base font-semibold text-white">{profile.fullName}</span>
              </div>

              <div className="flex flex-col py-2 border-b border-[#18264e]">
                <span className="text-xs text-slate-400">Primary Disciplines</span>
                <span className="text-sm font-medium text-slate-200">
                  Accounting · Elementary Education · English Tutoring · Advertising · Real Estate Sales
                </span>
              </div>

              <div className="flex flex-col py-2 border-b border-[#18264e]">
                <span className="text-xs text-slate-400">Operational Philosophy</span>
                <span className="text-sm font-medium text-slate-200">
                  Integrity, Practical Solutions, Direct Relationship Building
                </span>
              </div>

              <div className="flex flex-col py-2 border-b border-[#18264e]">
                <span className="text-xs text-slate-400">Collaboration Scope</span>
                <span className="text-sm font-medium text-slate-200">
                  Schools, Small Businesses, Real Estate Agencies, Families & Enterprises
                </span>
              </div>

              <div className="flex flex-col py-2">
                <span className="text-xs text-slate-400">Engagement Availability</span>
                <span className="text-sm font-medium text-emerald-400">
                  {profile.availability}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Core Competency Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreStrengths.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0e1938]/70 border border-[#1e2c56] hover:border-[#c5a059]/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#162347] border border-[#263768] flex items-center justify-center text-[#c5a059] group-hover:scale-105 group-hover:border-[#c5a059]/60 transition-transform mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-[#dfbe76] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
