import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Settings2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Header: React.FC = () => {
  const { setIsCvModalOpen, setIsEditorOpen, setIsHireModalOpen } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Services', href: '#services' },
    { label: 'Why Me', href: '#why-me' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 no-print ${
          isScrolled
            ? 'bg-[#080f24]/95 backdrop-blur-md border-b border-[#1e2c56] shadow-xl py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#"
              className="group flex items-center gap-2.5 text-lg sm:text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c5a059] to-[#8c6f32] flex items-center justify-center text-slate-950 font-extrabold text-sm shadow-md">
                MA
              </span>
              <span className="font-heading font-semibold text-white tracking-normal group-hover:text-[#c5a059] transition-colors">
                Mhretabe Abrhame
              </span>
            </a>

            {/* Zone 2: Concise single-line text navigation links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#c5a059] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#c5a059] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action & Quick Tools */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              <button
                onClick={() => setIsCvModalOpen(true)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-200 bg-[#162347] border border-[#2b3c6e] hover:border-[#c5a059]/60 hover:text-white rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                title="View and download printable CV"
              >
                <FileText className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Download CV</span>
              </button>

              <button
                onClick={() => setIsEditorOpen(true)}
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 bg-transparent hover:bg-[#162347] border border-transparent hover:border-[#2b3c6e] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                title="Customize experience, dates, and contact info"
              >
                <Settings2 className="w-3.5 h-3.5 text-slate-400" />
                <span>Edit Info</span>
              </button>

              <button
                onClick={() => setIsHireModalOpen(true)}
                className="px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-[#dfbe76] via-[#c5a059] to-[#b38e42] hover:brightness-110 active:scale-[0.98] rounded-lg transition-all shadow-md shadow-[#c5a059]/20 whitespace-nowrap shrink-0 cursor-pointer"
              >
                Hire Me
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-[#162347] rounded-lg transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden no-print">
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-[#080f24] border-l border-[#1e2c56] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#1e2c56]">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c5a059] to-[#8c6f32] flex items-center justify-center text-slate-950 font-extrabold text-sm">
                    MA
                  </span>
                  <span className="font-semibold text-white">Mhretabe Abrhame</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-white hover:bg-[#162347] rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-slate-200 hover:text-[#c5a059] py-2 border-b border-slate-800/60"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#1e2c56] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCvModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-200 bg-[#162347] border border-[#2b3c6e] rounded-lg hover:border-[#c5a059]"
              >
                <FileText className="w-4 h-4 text-[#c5a059]" />
                <span>View & Download CV</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsEditorOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-300 bg-slate-900/60 border border-slate-800 rounded-lg hover:bg-slate-800"
              >
                <Settings2 className="w-4 h-4 text-slate-400" />
                <span>Customize Profile Details</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsHireModalOpen(true);
                }}
                className="w-full py-3 text-sm font-semibold text-slate-950 bg-gradient-to-r from-[#dfbe76] to-[#c5a059] rounded-lg shadow-md"
              >
                Hire Mhretabe
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
