import React, { useState } from 'react';
import { Eye, X, ArrowUpRight, Check, Tag } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { PortfolioItem } from '../types/portfolio';

export const PortfolioGallery: React.FC = () => {
  const { portfolio, setSelectedServiceForInquiry } = usePortfolio();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories = ['All', 'Accounting', 'Education', 'Business & Real Estate'];

  const filteredItems = activeCategory === 'All'
    ? portfolio
    : portfolio.filter((item) => item.category === activeCategory);

  const handleInquireFromGallery = (item: PortfolioItem) => {
    setSelectedServiceForInquiry(item.title);
    setSelectedItem(null);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-[#080f24] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-wider text-[#c5a059] uppercase mb-2">
              06. Selected Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 text-balance">
              Portfolio Gallery
            </h2>
            <p className="text-base text-slate-300 font-light leading-relaxed">
              Visual documentation and case representations of core work across financial record keeping, academic tutoring, promotional campaigns, and real estate transactions.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#0e1938] border border-[#1e2c56] rounded-xl overflow-x-auto scrollbar-none shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#c5a059] text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-[#162347]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer rounded-2xl bg-[#0e1938] border border-[#1e2c56] hover:border-[#c5a059]/60 overflow-hidden transition-all duration-300 shadow-xl flex flex-col"
            >
              {/* Image Frame with Fallback */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#142044]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1938] via-transparent to-transparent opacity-80" />

                {/* Hover Quick Action Indicator */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#080f24]/80 backdrop-blur-md border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Category label */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-semibold text-[#dfbe76] bg-[#080f24]/90 backdrop-blur-sm px-3 py-1 rounded-md border border-[#c5a059]/30">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Text Description */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#dfbe76] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#18264e] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.slice(0, 3).map((tag, tIdx) => (
                      <span key={tIdx} className="text-[11px] text-slate-400">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#c5a059] group-hover:translate-x-0.5 transition-transform">
                    <span>View Case</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Modal for Item Details */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm">
            <div className="w-full max-w-3xl bg-[#0e1938] border border-[#1e2c56] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
              {/* Modal Image Header */}
              <div className="relative aspect-[16/9] w-full bg-[#142044] overflow-hidden">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#080f24]/85 text-slate-200 hover:text-white border border-[#2b3c6e] hover:border-[#c5a059] flex items-center justify-center cursor-pointer transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 left-4 text-xs font-medium text-[#c5a059] bg-[#080f24]/90 px-3 py-1 rounded-md border border-[#c5a059]/30">
                  {selectedItem.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {selectedItem.title}
                  </h3>
                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Key Highlights & Scope of Work:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedItem.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-200 bg-[#142044] px-3 py-2 rounded-lg border border-[#243566]">
                        <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#18264e] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <Tag className="w-3.5 h-3.5 text-slate-500" />
                    {selectedItem.tags.map((t, idx) => (
                      <span key={idx} className="text-xs text-slate-400 font-mono">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleInquireFromGallery(selectedItem)}
                    className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-[#c5a059] hover:bg-[#dfbe76] rounded-xl transition-all cursor-pointer shadow-md inline-flex items-center gap-1.5"
                  >
                    <span>Inquire About Similar Work</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
