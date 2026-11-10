import React, { useState } from 'react';
import { Calendar, MapPin, Building2, Edit3, Plus, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { ExperienceItem } from '../types/portfolio';

export const Experience: React.FC = () => {
  const { experience, updateExperienceItem, addExperienceItem, deleteExperienceItem } = usePortfolio();
  const [editingItem, setEditingItem] = useState<ExperienceItem | null>(null);
  const [isAddMode, setIsAddMode] = useState(false);

  // Form state for editing or adding
  const [formData, setFormData] = useState<Partial<ExperienceItem>>({});

  const handleStartEdit = (item: ExperienceItem) => {
    setEditingItem(item);
    setIsAddMode(false);
    setFormData({
      title: item.title,
      organization: item.organization,
      period: item.period,
      location: item.location,
      description: item.description,
      responsibilities: [...item.responsibilities],
      skillsApplied: [...item.skillsApplied]
    });
  };

  const handleStartAdd = () => {
    setIsAddMode(true);
    setEditingItem(null);
    setFormData({
      category: 'accounting',
      title: 'New Professional Role',
      organization: 'Organization Name',
      period: 'Timeframe / Year',
      location: 'Location / Remote',
      description: 'Role overview and impact summary.',
      responsibilities: ['Key responsibility or achievement item.'],
      skillsApplied: ['Core Skill 1', 'Core Skill 2']
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAddMode) {
      addExperienceItem({
        category: (formData.category as any) || 'accounting',
        title: formData.title || 'Untitled Role',
        organization: formData.organization || 'Organization Name',
        period: formData.period || 'Dates',
        location: formData.location || 'Location',
        description: formData.description || '',
        responsibilities: formData.responsibilities || [],
        skillsApplied: formData.skillsApplied || []
      });
      setIsAddMode(false);
    } else if (editingItem) {
      updateExperienceItem(editingItem.id, formData);
      setEditingItem(null);
    }
  };

  return (
    <section id="experience" className="py-24 bg-[#0a122a] border-t border-[#18264e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-wider text-[#c5a059] uppercase mb-2">
              03. Career Track Record
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 text-balance">
              Professional Experience
            </h2>
            <p className="text-base text-slate-300 font-light leading-relaxed">
              Demonstrated versatility across finance, education, marketing, talent connections, and real estate. Every entry is organized and ready for you to input specific institutions, dates, and achievements.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleStartAdd}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-[#c5a059] hover:bg-[#dfbe76] rounded-xl transition-all cursor-pointer shadow-md"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Entry</span>
            </button>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Timeline Rule (desktop) */}
          <div className="hidden lg:block absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#c5a059] via-[#1e2c56] to-[#0a122a]" />

          <div className="space-y-8">
            {experience.map((item, index) => {
              const isPlaceholderOrg = item.organization.includes('Click to Edit');
              const isPlaceholderPeriod = item.period.includes('Click to Edit');

              return (
                <div
                  key={item.id}
                  className="relative lg:pl-20 group"
                >
                  {/* Timeline Node Indicator */}
                  <div className="hidden lg:flex absolute left-6 top-8 -translate-x-1/2 w-5 h-5 rounded-full bg-[#080f24] border-2 border-[#c5a059] items-center justify-center group-hover:scale-125 transition-transform">
                    <div className="w-2 h-2 rounded-full bg-[#c5a059]" />
                  </div>

                  {/* Experience Card */}
                  <div className="rounded-2xl bg-[#0e1938] border border-[#1e2c56] hover:border-[#c5a059]/40 p-6 sm:p-8 transition-all shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                      <div>
                        {/* Clean unboxed index and title */}
                        <div className="text-xs font-mono text-[#c5a059] mb-1">
                          Role 0{index + 1}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#dfbe76] transition-colors">
                          {item.title}
                        </h3>

                        {/* Organization & Location & Period unboxed line */}
                        <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs sm:text-sm mt-2 text-slate-300">
                          <span
                            className={`inline-flex items-center gap-1.5 font-medium ${
                              isPlaceholderOrg ? 'text-[#dfbe76] italic' : 'text-slate-100'
                            }`}
                          >
                            <Building2 className="w-3.5 h-3.5 text-[#c5a059]" />
                            {item.organization}
                          </span>

                          <span className="text-slate-600 hidden sm:inline">·</span>

                          <span
                            className={`inline-flex items-center gap-1.5 ${
                              isPlaceholderPeriod ? 'text-slate-400 italic' : 'text-slate-300'
                            }`}
                          >
                            <Calendar className="w-3.5 h-3.5 text-slate-400" />
                            {item.period}
                          </span>

                          {item.location && (
                            <>
                              <span className="text-slate-600 hidden sm:inline">·</span>
                              <span className="inline-flex items-center gap-1.5 text-slate-400">
                                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                                {item.location}
                              </span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Edit Button */}
                      <button
                        onClick={() => handleStartEdit(item)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#dfbe76] hover:text-white bg-[#142044] hover:bg-[#1a2b5c] border border-[#263768] hover:border-[#c5a059] rounded-lg transition-all self-start shrink-0 cursor-pointer"
                        title="Click to customize this role, add organization or specific dates"
                      >
                        <Edit3 className="w-3.5 h-3.5 text-[#c5a059]" />
                        <span>Edit Entry</span>
                      </button>
                    </div>

                    {/* Role Description */}
                    <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Responsibilities & Achievements */}
                    <div className="space-y-2 mb-6">
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Key Responsibilities & Scope:
                      </div>
                      {item.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skills Applied Tags (unboxed or subtle inline labels) */}
                    <div className="pt-4 border-t border-[#18264e] flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold text-slate-400 mr-2">Competencies Applied:</span>
                      {item.skillsApplied.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-xs font-medium text-slate-300 bg-[#142044] px-2.5 py-1 rounded-md border border-[#233566]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal for Editing / Adding Experience Entry */}
        {(editingItem || isAddMode) && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <div className="w-full max-w-2xl bg-[#0e1938] border border-[#1e2c56] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
              {/* Modal Header */}
              <div className="p-6 border-b border-[#1e2c56] flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {isAddMode ? 'Add Experience Entry' : 'Edit Professional Experience'}
                  </h3>
                  <p className="text-xs text-[#dfbe76] mt-0.5">
                    Customize organization names, dates, qualifications, and achievements.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setEditingItem(null);
                    setIsAddMode(false);
                  }}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-[#162347]"
                >
                  ✕
                </button>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSave} className="p-6 space-y-4 overflow-y-auto">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                    Role / Position Title
                  </label>
                  <input
                    type="text"
                    value={formData.title || ''}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#142044] border border-[#243566] rounded-xl text-white text-sm focus:outline-none focus:border-[#c5a059]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                      Organization / Company / School Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Zenith Academy, Starlight Realty..."
                      value={formData.organization || ''}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#142044] border border-[#243566] rounded-xl text-white text-sm focus:outline-none focus:border-[#c5a059]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                      Time Period / Dates
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 2023 - Present, Jan 2022 - Dec 2023..."
                      value={formData.period || ''}
                      onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#142044] border border-[#243566] rounded-xl text-white text-sm focus:outline-none focus:border-[#c5a059]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                    Location (City / Country / Remote)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Addis Ababa / On-site / Remote"
                    value={formData.location || ''}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#142044] border border-[#243566] rounded-xl text-white text-sm focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                    Role Summary / Overview
                  </label>
                  <textarea
                    rows={3}
                    value={formData.description || ''}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#142044] border border-[#243566] rounded-xl text-white text-sm focus:outline-none focus:border-[#c5a059]"
                    placeholder="Summary of responsibilities and scope..."
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                    Responsibilities & Achievements (One per line)
                  </label>
                  <textarea
                    rows={4}
                    value={formData.responsibilities ? formData.responsibilities.join('\n') : ''}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        responsibilities: e.target.value.split('\n').filter((l) => l.trim() !== '')
                      })
                    }
                    className="w-full px-3.5 py-2.5 bg-[#142044] border border-[#243566] rounded-xl text-white text-sm focus:outline-none focus:border-[#c5a059]"
                    placeholder="Enter each responsibility or achievement on a new line..."
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                    Competencies Applied (Comma separated)
                  </label>
                  <input
                    type="text"
                    value={formData.skillsApplied ? formData.skillsApplied.join(', ') : ''}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        skillsApplied: e.target.value.split(',').map((s) => s.trim()).filter(Boolean)
                      })
                    }
                    className="w-full px-3.5 py-2.5 bg-[#142044] border border-[#243566] rounded-xl text-white text-sm focus:outline-none focus:border-[#c5a059]"
                    placeholder="e.g. Accounting, Bookkeeping, Financial Reporting"
                  />
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-[#1e2c56] flex items-center justify-between">
                  {!isAddMode && editingItem && (
                    <button
                      type="button"
                      onClick={() => {
                        if (confirm('Are you sure you want to delete this experience entry?')) {
                          deleteExperienceItem(editingItem.id);
                          setEditingItem(null);
                        }
                      }}
                      className="text-xs text-rose-400 hover:text-rose-300 cursor-pointer"
                    >
                      Delete Entry
                    </button>
                  )}
                  <div className="flex items-center gap-3 ml-auto">
                    <button
                      type="button"
                      onClick={() => {
                        setEditingItem(null);
                        setIsAddMode(false);
                      }}
                      className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-[#142044] rounded-lg"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 text-xs font-semibold text-slate-950 bg-[#c5a059] hover:bg-[#dfbe76] rounded-lg cursor-pointer shadow-md"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
