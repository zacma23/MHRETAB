import React, { useState } from 'react';
import { X, Sparkles, MessageSquare, Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const HireMeModal: React.FC = () => {
  const { profile, isHireModalOpen, setIsHireModalOpen, setSelectedServiceForInquiry } = usePortfolio();

  const [selectedService, setSelectedService] = useState('Accounting and Bookkeeping Support');
  const [clientName, setClientName] = useState('');
  const [clientContact, setClientContact] = useState('');
  const [timeline, setTimeline] = useState('Immediate / As Soon As Possible');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isHireModalOpen) return null;

  const serviceOptions = [
    'Accounting and Bookkeeping Assistance',
    'Elementary Education Support',
    'Private Tutoring (Up to High School)',
    'English Language Tutoring',
    'Advertising & Marketing Campaigns',
    'Job Opportunity Connections & Talent Sourcing',
    'Real Estate Marketing & Sales Assistance',
    'Commission-Based Business Development',
    'Professional Networking & Strategic Introductions'
  ];

  const cleanPhone = profile.whatsapp.replace(/\D/g, '');
  const encodedMsg = encodeURIComponent(
    `Hello Mhretabe,\n\nI am interested in hiring you for: ${selectedService}.\nMy Name: ${clientName || 'Partner'}\nContact: ${clientContact || 'N/A'}\nTimeline: ${timeline}\n\nProject Notes:\n${details || 'Looking forward to discussing details.'}`
  );

  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMsg}`;
  const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Hiring Inquiry: ${selectedService}`
  )}&body=${encodedMsg}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-sm">
      <div className="relative w-full max-w-xl bg-[#0e1938] border border-[#1e2c56] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-6 border-b border-[#1e2c56] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#c5a059] to-[#8c6f32] flex items-center justify-center text-slate-950">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Hire Mhretabe Abrhame</h3>
              <p className="text-xs text-[#dfbe76]">
                Initiate a professional collaboration or service engagement
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsHireModalOpen(false)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-[#162347]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="p-8 text-center space-y-4 my-auto">
            <div className="w-14 h-14 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-2">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-white">
              Inquiry Form Prepared!
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
              Please choose how you would like to transmit your inquiry to Mhretabe directly:
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all inline-flex items-center justify-center gap-2 shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send via WhatsApp</span>
              </a>

              <a
                href={mailtoUrl}
                className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-slate-950 bg-[#c5a059] hover:bg-[#dfbe76] rounded-xl transition-all inline-flex items-center justify-center gap-2 shadow-md"
              >
                <Mail className="w-4 h-4" />
                <span>Send via Email</span>
              </a>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                setIsHireModalOpen(false);
              }}
              className="mt-6 text-xs text-slate-400 hover:text-white cursor-pointer underline"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                Select Service / Domain of Interest
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#142044] border border-[#243566] rounded-xl text-white text-sm focus:outline-none focus:border-[#c5a059]"
              >
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#0e1938] text-white">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                  Your Name / Organization <span className="text-[#c5a059]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. John Doe / Bright Stars School"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#142044] border border-[#243566] rounded-xl text-white text-sm focus:outline-none focus:border-[#c5a059]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                  Your Email or Phone <span className="text-[#c5a059]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. john@company.com or phone"
                  value={clientContact}
                  onChange={(e) => setClientContact(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#142044] border border-[#243566] rounded-xl text-white text-sm focus:outline-none focus:border-[#c5a059]"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                Preferred Timeline / Start Date
              </label>
              <select
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#142044] border border-[#243566] rounded-xl text-white text-sm focus:outline-none focus:border-[#c5a059]"
              >
                <option value="Immediate / As Soon As Possible" className="bg-[#0e1938]">Immediate / As Soon As Possible</option>
                <option value="Within 1 - 2 Weeks" className="bg-[#0e1938]">Within 1 - 2 Weeks</option>
                <option value="Next Month" className="bg-[#0e1938]">Next Month</option>
                <option value="Flexible / Exploratory" className="bg-[#0e1938]">Flexible / Exploratory</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                Project Scope / Message
              </label>
              <textarea
                rows={3}
                placeholder="Briefly describe what you're looking for..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#142044] border border-[#243566] rounded-xl text-white text-sm focus:outline-none focus:border-[#c5a059]"
              />
            </div>

            <div className="pt-3 border-t border-[#1e2c56] flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsHireModalOpen(false)}
                className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-[#142044] rounded-lg"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-6 py-2.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-[#dfbe76] to-[#c5a059] hover:brightness-110 rounded-xl transition-all cursor-pointer shadow-md inline-flex items-center gap-1.5"
              >
                <span>Proceed to Send</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
