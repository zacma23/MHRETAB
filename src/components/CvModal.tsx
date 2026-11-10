import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Globe, CheckCircle2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const CvModal: React.FC = () => {
  const { profile, experience, skills, isCvModalOpen, setIsCvModalOpen } = usePortfolio();

  if (!isCvModalOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const textContent = `
CURRICULUM VITAE
=============================================
${profile.fullName.toUpperCase()}
${profile.title}

CONTACT
---------------------------------------------
Email: ${profile.email}
Phone: ${profile.phone}
WhatsApp: ${profile.whatsapp}
Location: ${profile.location}
LinkedIn: ${profile.linkedin}

EXECUTIVE SUMMARY
---------------------------------------------
${profile.summary}

CORE COMPETENCIES
---------------------------------------------
${skills
  .map(
    (cat) =>
      `• ${cat.title.toUpperCase()}:\n  ${cat.skills.map((s) => `  - ${s}`).join('\n')}`
  )
  .join('\n\n')}

PROFESSIONAL EXPERIENCE
---------------------------------------------
${experience
  .map(
    (exp) =>
      `[${exp.title}]
Organization: ${exp.organization}
Period: ${exp.period} | Location: ${exp.location}
Overview: ${exp.description}
Key Responsibilities:
${exp.responsibilities.map((r) => `  - ${r}`).join('\n')}
Competencies: ${exp.skillsApplied.join(', ')}
`
  )
  .join('\n---------------------------------------------\n')}
=============================================
`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `CV_${profile.fullName.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden my-auto border border-slate-200">
        {/* Top Control Bar (Hidden on print) */}
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between no-print">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c5a059]" />
            <span>Executive Curriculum Vitae Preview</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-900 bg-[#c5a059] hover:bg-[#dfbe76] rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={handleDownloadText}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Text</span>
            </button>

            <button
              onClick={() => setIsCvModalOpen(false)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="p-8 sm:p-12 max-h-[80vh] overflow-y-auto print:max-h-none print:p-0 print:overflow-visible">
          {/* Header */}
          <div className="border-b-2 border-[#c5a059] pb-6 mb-8 flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight mb-1">
                {profile.fullName}
              </h1>
              <p className="text-sm font-semibold text-[#8c6f32]">
                {profile.title}
              </p>
            </div>

            <div className="text-xs text-slate-600 space-y-1 sm:text-right">
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>{profile.phone}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{profile.location}</span>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#8c6f32] mb-2 border-b border-slate-200 pb-1">
              Executive Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {profile.summary}
            </p>
          </div>

          {/* Professional Experience */}
          <div className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#8c6f32] mb-4 border-b border-slate-200 pb-1">
              Professional Experience
            </h2>

            <div className="space-y-6">
              {experience.map((item) => (
                <div key={item.id} className="text-xs sm:text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                    <h3 className="font-bold text-slate-900 text-sm">
                      {item.title}
                    </h3>
                    <span className="text-xs font-medium text-slate-500">
                      {item.period}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-slate-600 mb-2">
                    {item.organization} {item.location && `· ${item.location}`}
                  </div>

                  <p className="text-xs text-slate-700 mb-2 leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 pl-1">
                    {item.responsibilities.map((resp, idx) => (
                      <li key={idx} className="leading-snug">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Core Competencies Matrix */}
          <div className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#8c6f32] mb-3 border-b border-slate-200 pb-1">
              Core Competencies & Functional Domains
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {skills.map((cat) => (
                <div key={cat.id} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1.5">
                    {cat.title}
                  </h4>
                  <ul className="space-y-1 text-slate-600">
                    {cat.skills.map((s, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Language */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#8c6f32] mb-3 border-b border-slate-200 pb-1">
              Languages & Professional Orientation
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
              <div>
                <span className="font-bold text-slate-900">Languages:</span> English (Instruction & Tutoring Level), Amharic.
              </div>
              <div>
                <span className="font-bold text-slate-900">Engagement Terms:</span> Full-Time, Contract, Commission-Based, Tutoring.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
