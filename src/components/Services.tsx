import React from 'react';
import {
  Calculator,
  GraduationCap,
  BookOpen,
  Languages,
  Megaphone,
  Users,
  Building,
  TrendingUp,
  Handshake,
  ArrowRight,
  Check
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { ServiceItem } from '../types/portfolio';

export const Services: React.FC = () => {
  const { services, setSelectedServiceForInquiry, setIsHireModalOpen } = usePortfolio();

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Calculator':
        return <Calculator className="w-6 h-6 text-[#c5a059]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#c5a059]" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-[#c5a059]" />;
      case 'Languages':
        return <Languages className="w-6 h-6 text-[#c5a059]" />;
      case 'Megaphone':
        return <Megaphone className="w-6 h-6 text-[#c5a059]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#c5a059]" />;
      case 'Building':
        return <Building className="w-6 h-6 text-[#c5a059]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#c5a059]" />;
      case 'Handshake':
        return <Handshake className="w-6 h-6 text-[#c5a059]" />;
      default:
        return <Check className="w-6 h-6 text-[#c5a059]" />;
    }
  };

  const handleInquire = (service: ServiceItem) => {
    setSelectedServiceForInquiry(service.title);
    // Smooth scroll to contact section or open modal
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsHireModalOpen(true);
    }
  };

  return (
    <section id="services" className="py-24 bg-[#080f24] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider text-[#c5a059] uppercase mb-2">
            04. Collaborative Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 text-balance">
            Services I Offer
          </h2>
          <p className="text-base text-slate-300 font-light leading-relaxed">
            Tailored, high-impact services across financial operations, academic mentorship, promotional campaigns, and commission-based commercial transactions.
          </p>
        </div>

        {/* 9 Services Grid (3x3 on large screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="rounded-2xl bg-[#0e1938] border border-[#1e2c56] hover:border-[#c5a059]/50 transition-all flex flex-col justify-between p-6 sm:p-7 group shadow-xl hover:-translate-y-1 duration-300"
            >
              <div>
                {/* Service Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#142044] border border-[#243566] flex items-center justify-center group-hover:scale-105 group-hover:border-[#c5a059]/60 transition-transform">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono text-[#c5a059]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#dfbe76] transition-colors leading-snug">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-300 font-light mb-6 leading-relaxed">
                  {service.fullDesc}
                </p>

                {/* Deliverables list */}
                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                    Scope of Deliverables:
                  </div>
                  {service.deliverables.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#1b2b54] flex items-center justify-center text-[#c5a059] shrink-0 mt-0.5">
                        <Check className="w-2 h-2" />
                      </div>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Ideal For & Direct Inquire Action */}
              <div className="pt-5 border-t border-[#18264e] flex flex-col gap-4">
                <div className="text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">Target Fit:</span> {service.idealFor}
                </div>

                <button
                  onClick={() => handleInquire(service)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-200 bg-[#142044] hover:bg-[#c5a059] hover:text-slate-950 border border-[#243566] hover:border-[#c5a059] rounded-xl transition-all cursor-pointer group/btn"
                >
                  <span>Request This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
