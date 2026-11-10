import React from 'react';
import { ArrowDown, Mail, Download, Briefcase, Sparkles, PhoneCall } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Hero: React.FC = () => {
  const { profile, setIsCvModalOpen, setIsHireModalOpen } = usePortfolio();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#080f24] via-[#0b142d] to-[#080f24]">
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#162347]/40 via-[#c5a059]/10 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#1e2c56]/20 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean unboxed kicker */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-wide text-[#c5a059] uppercase mb-4">
              <span>Executive Portfolio</span>
              <span aria-hidden="true">·</span>
              <span>Multi-Disciplinary Professional</span>
            </div>

            {/* Primary Name Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 text-balance">
              Mhretabe Abrhame
            </h1>

            {/* Professional Title Headline */}
            <p className="text-lg sm:text-xl font-medium text-[#dfbe76] mb-6 leading-snug">
              Multi-Skilled Professional <span className="text-slate-500 font-light">|</span> Accounting <span className="text-slate-500 font-light">|</span> Education <span className="text-slate-500 font-light">|</span> Marketing <span className="text-slate-500 font-light">|</span> Business Development
            </p>

            {/* Professional Introduction */}
            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl font-light">
              I am Mhretabe Abrhame, a versatile and hardworking professional with experience across accounting, elementary education, private tutoring, English language instruction, advertising, job connections, real estate sales, and commission-based business activities.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <button
                onClick={() => setIsHireModalOpen(true)}
                className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-[#dfbe76] via-[#c5a059] to-[#b38e42] hover:brightness-110 active:scale-[0.98] rounded-xl shadow-lg shadow-[#c5a059]/25 transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Hire Me</span>
              </button>

              <a
                href="#contact"
                className="px-6 py-3.5 text-sm font-semibold text-white bg-[#142042] hover:bg-[#1a2b59] border border-[#263768] hover:border-[#c5a059]/60 rounded-xl transition-all inline-flex items-center gap-2 shadow-sm"
              >
                <Mail className="w-4 h-4 text-[#c5a059]" />
                <span>Contact Me</span>
              </a>

              <a
                href="#experience"
                className="px-5 py-3.5 text-sm font-medium text-slate-200 hover:text-white hover:bg-[#111c3a] border border-transparent hover:border-[#1e2c56] rounded-xl transition-all inline-flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4 text-slate-400" />
                <span>View My Experience</span>
              </a>

              <button
                onClick={() => setIsCvModalOpen(true)}
                className="px-5 py-3.5 text-sm font-medium text-[#dfbe76] hover:text-white bg-transparent hover:bg-[#142042] border border-[#c5a059]/30 hover:border-[#c5a059] rounded-xl transition-all inline-flex items-center gap-2 cursor-pointer"
                title="Download formatted executive resume"
              >
                <Download className="w-4 h-4 text-[#c5a059]" />
                <span>Download My CV</span>
              </button>
            </div>

            {/* Quick Unboxed Contact Signals */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 pt-6 border-t border-[#1a2850]">
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-[#c5a059] transition-colors inline-flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>{profile.email}</span>
              </a>
              <span className="text-slate-700 hidden sm:inline">·</span>
              <a
                href={`https://wa.me/${profile.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#c5a059] transition-colors inline-flex items-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Available</span>
              </a>
              <span className="text-slate-700 hidden sm:inline">·</span>
              <span className="text-slate-400">{profile.location}</span>
            </div>
          </div>

          {/* Right Column: Profile Photograph Section */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer Decorative Gold Frame Offset */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#c5a059]/30 via-[#c5a059]/10 to-transparent blur-sm" />
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-[#c5a059]/30 -z-10" />

              {/* Main Photo Container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#0e1938] border-2 border-[#c5a059]/40 shadow-2xl">
                <img
                  src="/src/assets/images/mhretabe_portrait_1794293043008.jpg"
                  alt="Mhretabe Abrhame - Multi-Skilled Professional"
                  className="w-full h-auto object-cover aspect-[3/4] hover:scale-[1.02] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#080f24] via-[#080f24]/90 to-transparent">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-base font-bold text-white">Mhretabe Abrhame</div>
                      <div className="text-xs text-[#dfbe76] font-medium">Accounting · Education · Business</div>
                    </div>
                    <span className="text-[11px] font-mono tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-md">
                      ACTIVE & OPEN
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width strip below hero split: 4 Core Pillars of Engagement */}
        <div className="mt-20 pt-10 border-t border-[#18264e] grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
          <div className="p-4 rounded-xl bg-[#0e1938]/60 border border-[#1e2c56]">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums mb-1">
              7+
            </div>
            <div className="text-xs font-semibold text-[#dfbe76] uppercase tracking-wider mb-0.5">
              Disciplines
            </div>
            <div className="text-xs text-slate-400">
              Cross-functional adaptability
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0e1938]/60 border border-[#1e2c56]">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums mb-1">
              100%
            </div>
            <div className="text-xs font-semibold text-[#dfbe76] uppercase tracking-wider mb-0.5">
              Commitment
            </div>
            <div className="text-xs text-slate-400">
              Integrity & work ethic
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0e1938]/60 border border-[#1e2c56]">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums mb-1">
              9+
            </div>
            <div className="text-xs font-semibold text-[#dfbe76] uppercase tracking-wider mb-0.5">
              Core Services
            </div>
            <div className="text-xs text-slate-400">
              Education, finance & sales
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0e1938]/60 border border-[#1e2c56]">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums mb-1">
              Direct
            </div>
            <div className="text-xs font-semibold text-[#dfbe76] uppercase tracking-wider mb-0.5">
              Collaboration
            </div>
            <div className="text-xs text-slate-400">
              Clear client communication
            </div>
          </div>
        </div>

        {/* Quiet scroll indicator */}
        <div className="flex justify-center mt-12">
          <a
            href="#about"
            className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-[#c5a059] transition-colors py-2 px-3"
            aria-label="Scroll to About Me section"
          >
            <span>Explore Professional Profile</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
