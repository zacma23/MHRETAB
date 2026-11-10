import React, { useState } from 'react';
import { Star, Quote, Plus, Edit2, Trash2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { TestimonialItem } from '../types/portfolio';

export const Testimonials: React.FC = () => {
  const { testimonials, updateTestimonial, addTestimonial, deleteTestimonial } = usePortfolio();
  const [editingItem, setEditingItem] = useState<TestimonialItem | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState<Partial<TestimonialItem>>({});

  const handleStartEdit = (item: TestimonialItem) => {
    setEditingItem(item);
    setIsAdding(false);
    setFormData(item);
  };

  const handleStartAdd = () => {
    setIsAdding(true);
    setEditingItem(null);
    setFormData({
      name: 'Client / Colleague Name',
      role: 'Professional Role',
      organization: 'Company or Institution',
      content: 'Feedback regarding collaboration, work ethic, and results achieved.',
      relationship: 'Professional Collaboration',
      rating: 5
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAdding) {
      addTestimonial({
        name: formData.name || 'Anonymous Client',
        role: formData.role || 'Partner',
        organization: formData.organization || '',
        content: formData.content || '',
        relationship: formData.relationship || 'Collaboration',
        rating: formData.rating || 5
      });
      setIsAdding(false);
    } else if (editingItem) {
      updateTestimonial(editingItem.id, formData);
      setEditingItem(null);
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-[#0a122a] border-t border-[#18264e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-wider text-[#c5a059] uppercase mb-2">
              07. Endorsements & Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 text-balance">
              Testimonials & Recommendations
            </h2>
            <p className="text-base text-slate-300 font-light leading-relaxed">
              Reflections on reliability, pedagogical impact, financial diligence, and commercial negotiation from academic peers, property clients, and business partners.
            </p>
          </div>

          <button
            onClick={handleStartAdd}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 bg-[#c5a059] hover:bg-[#dfbe76] rounded-xl transition-all cursor-pointer shadow-md shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Add Testimonial</span>
          </button>
        </div>

        {/* Testimonials 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => {
            const isPlaceholderName = t.name.includes('Name');

            return (
              <div
                key={t.id}
                className="rounded-2xl bg-[#0e1938] border border-[#1e2c56] hover:border-[#c5a059]/40 p-6 sm:p-8 flex flex-col justify-between transition-all shadow-xl group relative"
              >
                <div>
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(t.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#c5a059] text-[#c5a059]" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-[#1e2c56] group-hover:text-[#c5a059]/30 transition-colors" />
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-6 italic">
                    "{t.content}"
                  </p>
                </div>

                {/* Author Info & Edit Button */}
                <div className="pt-4 border-t border-[#18264e] flex items-center justify-between">
                  <div>
                    <h4
                      className={`text-sm font-bold ${
                        isPlaceholderName ? 'text-[#dfbe76] italic' : 'text-white'
                      }`}
                    >
                      {t.name}
                    </h4>
                    <div className="text-xs text-slate-400">
                      {t.role} {t.organization && `· ${t.organization}`}
                    </div>
                    <div className="text-[11px] text-[#c5a059]/80 font-mono mt-0.5">
                      {t.relationship}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleStartEdit(t)}
                      className="p-2 text-slate-400 hover:text-[#c5a059] hover:bg-[#142044] rounded-lg transition-colors cursor-pointer"
                      title="Edit this testimonial"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm('Delete this testimonial?')) {
                          deleteTestimonial(t.id);
                        }
                      }}
                      className="p-2 text-slate-500 hover:text-rose-400 hover:bg-[#142044] rounded-lg transition-colors cursor-pointer"
                      title="Delete"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for editing/adding testimonial */}
        {(editingItem || isAdding) && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <div className="w-full max-w-lg bg-[#0e1938] border border-[#1e2c56] rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-6 border-b border-[#1e2c56] flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">
                  {isAdding ? 'Add Testimonial Entry' : 'Edit Testimonial'}
                </h3>
                <button
                  onClick={() => {
                    setEditingItem(null);
                    setIsAdding(false);
                  }}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-[#162347]"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSave} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                    Client / Recommender Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name || ''}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#142044] border border-[#243566] rounded-xl text-white text-sm focus:outline-none focus:border-[#c5a059]"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                      Professional Role / Title
                    </label>
                    <input
                      type="text"
                      value={formData.role || ''}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#142044] border border-[#243566] rounded-xl text-white text-sm focus:outline-none focus:border-[#c5a059]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                      Organization
                    </label>
                    <input
                      type="text"
                      value={formData.organization || ''}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#142044] border border-[#243566] rounded-xl text-white text-sm focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                    Nature of Relationship / Project
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Real Estate Client, Tutoring Parent, Accounting Audit"
                    value={formData.relationship || ''}
                    onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#142044] border border-[#243566] rounded-xl text-white text-sm focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                    Testimonial / Endorsement Text
                  </label>
                  <textarea
                    rows={4}
                    value={formData.content || ''}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#142044] border border-[#243566] rounded-xl text-white text-sm focus:outline-none focus:border-[#c5a059]"
                    required
                  />
                </div>

                <div className="pt-4 border-t border-[#1e2c56] flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setEditingItem(null);
                      setIsAdding(false);
                    }}
                    className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-[#142044] rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold text-slate-950 bg-[#c5a059] hover:bg-[#dfbe76] rounded-lg cursor-pointer shadow-md"
                  >
                    Save Testimonial
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
