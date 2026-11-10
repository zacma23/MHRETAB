import React from 'react';
import {
  Compass,
  MessageSquare,
  RefreshCw,
  Share2,
  CheckCircle2,
  HeartHandshake,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const WhyWorkWithMe: React.FC = () => {
  const { setIsHireModalOpen } = usePortfolio();

  const reasons = [
    {
      icon: Compass,
      title: 'Versatile Professional Experience',
      desc: 'Seamlessly operating across accounting ledgers, classroom teaching, academic tutoring, marketing campaigns, and real estate sales without friction.'
    },
    {
      icon: MessageSquare,
      title: 'Strong Communication & Interpersonal Skills',
      desc: 'Articulate, respectful, and empathetic communication tailored to students, parents, corporate executives, property buyers, and commercial partners.'
    },
    {
      icon: RefreshCw,
      title: 'Adaptability & Willingness to Learn',
      desc: 'Quickly mastering new operational guidelines, organizational cultures, curriculum standards, and market environments with genuine curiosity.'
    },
    {
      icon: Share2,
      title: 'Business Networking Abilities',
      desc: 'Strategic bridge building that turns connections into tangible opportunities—linking job seekers with employers and property buyers with sellers.'
    },
    {
      icon: CheckCircle2,
      title: 'Commitment to Delivering Results',
      desc: 'A dependable work ethic focused on clean financial books, measurable student grade improvements, and successful commission transactions.'
    },
    {
      icon: HeartHandshake,
      title: 'Customer-Focused Approach',
      desc: 'Deep listening and client-first orientation that builds enduring trust, authentic partnerships, and repeat collaborative opportunities.'
    },
    {
      icon: Sparkles,
      title: 'Passion for Education & Helping People',
      desc: 'An authentic personal commitment to elevating others, fostering academic confidence, and providing practical, real-world solutions.'
    }
  ];

  return (
    <section id="why-me" className="py-24 bg-[#0a122a] border-t border-[#18264e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider text-[#c5a059] uppercase mb-2">
            05. Value Proposition
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 text-balance">
            Why Work With Me?
          </h2>
          <p className="text-base text-slate-300 font-light leading-relaxed">
            Positioned to contribute immediate value to companies, schools, marketing agencies, real estate developers, and ambitious individuals through dependable performance.
          </p>
        </div>

        {/* 7 Core Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            const isFeatured = idx === 0;

            return (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-2xl transition-all border ${
                  isFeatured
                    ? 'bg-gradient-to-br from-[#121f42] to-[#0e1938] border-[#c5a059]/50 shadow-xl'
                    : 'bg-[#0e1938] border-[#1e2c56] hover:border-[#c5a059]/40'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#142044] border border-[#243566] flex items-center justify-center text-[#c5a059] mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call-to-action Banner */}
        <div className="rounded-2xl p-8 sm:p-10 bg-gradient-to-r from-[#111e40] via-[#0e1938] to-[#14234b] border border-[#c5a059]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-2xl text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Ready to Explore a Collaborative Opportunity?
            </h3>
            <p className="text-sm text-slate-300 font-light">
              Whether you need accounting assistance, student tutoring, real estate marketing, or business networking, I am ready to contribute.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsHireModalOpen(true)}
              className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-[#dfbe76] to-[#c5a059] hover:brightness-110 rounded-xl shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
