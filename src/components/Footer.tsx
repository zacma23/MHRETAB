import React from 'react';
import { ArrowUp, Mail, Phone, Heart } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Footer: React.FC = () => {
  const { profile } = usePortfolio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060a19] border-t border-[#18264e] text-slate-400 text-xs py-12 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#142044]">
          {/* Brand Wordmark */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-gradient-to-br from-[#c5a059] to-[#8c6f32] flex items-center justify-center text-slate-950 font-bold text-xs">
                MA
              </span>
              <span className="text-base font-bold text-white font-heading">
                Mhretabe Abrhame
              </span>
            </div>
            <p className="text-xs text-[#dfbe76]/90 mt-0.5">
              Multi-Skilled Professional · Accounting · Education · Marketing · Business Development
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <a href="#about" className="hover:text-[#c5a059] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#c5a059] transition-colors">Skills</a>
            <a href="#experience" className="hover:text-[#c5a059] transition-colors">Experience</a>
            <a href="#services" className="hover:text-[#c5a059] transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-[#c5a059] transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-[#c5a059] transition-colors">Contact</a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e1938] hover:bg-[#162347] border border-[#1e2c56] hover:border-[#c5a059] text-slate-300 hover:text-white transition-all cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#c5a059]" />
          </button>
        </div>

        {/* Bottom copyright & message */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Mhretabe Abrhame. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#dfbe76]/70">
              "Let's Connect, Collaborate, and Create Opportunities Together."
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
