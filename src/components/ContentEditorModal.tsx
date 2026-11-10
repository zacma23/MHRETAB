import React, { useState } from 'react';
import { X, RotateCcw, Save, CheckCircle } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const ContentEditorModal: React.FC = () => {
  const { profile, updateProfile, resetToDefaults, isEditorOpen, setIsEditorOpen } = usePortfolio();

  const [form, setForm] = useState({
    fullName: profile.fullName,
    title: profile.title,
    email: profile.email,
    phone: profile.phone,
    whatsapp: profile.whatsapp,
    location: profile.location,
    linkedin: profile.linkedin,
    telegram: profile.telegram,
    summary: profile.summary,
    availability: profile.availability
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isEditorOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(form);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setIsEditorOpen(false);
    }, 1200);
  };

  const handleReset = () => {
    if (confirm('Reset all customized details (profile, experience, testimonials) to initial defaults?')) {
      resetToDefaults();
      setIsEditorOpen(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-[#0e1938] border border-[#1e2c56] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 border-b border-[#1e2c56] flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span>Profile Content Manager</span>
              {savedSuccess && (
                <span className="text-xs font-normal text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> Saved!
                </span>
              )}
            </h3>
            <p className="text-xs text-[#dfbe76] mt-0.5">
              Update your contact info, headline, and channels in real-time.
            </p>
          </div>
          <button
            onClick={() => setIsEditorOpen(false)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-[#162347]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#142044] border border-[#243566] rounded-xl text-white text-sm focus:outline-none focus:border-[#c5a059]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                Location
              </label>
              <input
                type="text"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#142044] border border-[#243566] rounded-xl text-white text-sm focus:outline-none focus:border-[#c5a059]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
              Professional Title / Headline
            </label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-[#142044] border border-[#243566] rounded-xl text-white text-sm focus:outline-none focus:border-[#c5a059]"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-3 py-2 bg-[#142044] border border-[#243566] rounded-xl text-white text-xs focus:outline-none focus:border-[#c5a059]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                Phone Number
              </label>
              <input
                type="text"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-3 py-2 bg-[#142044] border border-[#243566] rounded-xl text-white text-xs focus:outline-none focus:border-[#c5a059]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                WhatsApp Number
              </label>
              <input
                type="text"
                value={form.whatsapp}
                onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                className="w-full px-3 py-2 bg-[#142044] border border-[#243566] rounded-xl text-white text-xs focus:outline-none focus:border-[#c5a059]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                LinkedIn URL
              </label>
              <input
                type="text"
                value={form.linkedin}
                onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
                className="w-full px-3 py-2 bg-[#142044] border border-[#243566] rounded-xl text-white text-xs focus:outline-none focus:border-[#c5a059]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                Telegram Channel / Username
              </label>
              <input
                type="text"
                value={form.telegram}
                onChange={(e) => setForm({ ...form, telegram: e.target.value })}
                className="w-full px-3 py-2 bg-[#142044] border border-[#243566] rounded-xl text-white text-xs focus:outline-none focus:border-[#c5a059]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
              Professional Summary
            </label>
            <textarea
              rows={4}
              value={form.summary}
              onChange={(e) => setForm({ ...form, summary: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-[#142044] border border-[#243566] rounded-xl text-white text-sm focus:outline-none focus:border-[#c5a059] leading-relaxed"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
              Availability Status
            </label>
            <input
              type="text"
              value={form.availability}
              onChange={(e) => setForm({ ...form, availability: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-[#142044] border border-[#243566] rounded-xl text-white text-sm focus:outline-none focus:border-[#c5a059]"
            />
          </div>

          {/* Footer Controls */}
          <div className="pt-4 border-t border-[#1e2c56] flex items-center justify-between">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs text-rose-400 hover:text-rose-300 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All to Defaults</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsEditorOpen(false)}
                className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-[#142044] rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-semibold text-slate-950 bg-[#c5a059] hover:bg-[#dfbe76] rounded-lg inline-flex items-center gap-1.5 cursor-pointer shadow-md"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
