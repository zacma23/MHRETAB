import React, { useState, useEffect } from 'react';
import { Mail, Phone, MessageSquare, Send, CheckCircle2, Copy, Check, ArrowRight, ExternalLink } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Contact: React.FC = () => {
  const { profile, selectedServiceForInquiry, setSelectedServiceForInquiry } = usePortfolio();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (selectedServiceForInquiry) {
      setFormData((prev) => ({
        ...prev,
        subject: `Inquiry Regarding ${selectedServiceForInquiry}`
      }));
    }
  }, [selectedServiceForInquiry]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // WhatsApp formatted URL with pre-filled message
  const cleanPhone = profile.whatsapp.replace(/\D/g, '');
  const encodedWaMsg = encodeURIComponent(
    `Hello Mhretabe, I came across your professional portfolio and would like to connect regarding ${formData.subject || 'a collaboration opportunity'}.`
  );
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedWaMsg}`;

  // Direct mailto link
  const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
    formData.subject || 'Professional Inquiry - Mhretabe Abrhame'
  )}&body=${encodeURIComponent(
    `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-24 bg-[#080f24] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Call to action kicker */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider text-[#c5a059] uppercase mb-2">
            08. Start A Conversation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 text-balance">
            Let's Connect, Collaborate, and Create Opportunities Together.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Whether you represent a school seeking teaching support, a business needing financial bookkeeping, a family looking for high school tutoring, or a partner exploring real estate transactions—reach out today.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Channels & WhatsApp Integration */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#0e1938] border border-[#1e2c56] p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Direct Contact Information
              </h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                Available for local and remote engagements. Inquiries are typically answered within 24 hours.
              </p>

              {/* Direct Email Card */}
              <div className="p-4 rounded-xl bg-[#142044] border border-[#243566] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-[#0e1938] flex items-center justify-center text-[#c5a059] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-xs text-slate-400">Direct Email</div>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-sm font-semibold text-white hover:text-[#c5a059] transition-colors truncate block"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-slate-400 hover:text-white hover:bg-[#1a2b59] rounded-lg transition-colors cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp Card */}
              <div className="p-4 rounded-xl bg-[#142044] border border-[#243566] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">WhatsApp Instant Chat</div>
                    <div className="text-sm font-semibold text-white">{profile.phone}</div>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 text-xs font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors inline-flex items-center gap-1 shadow-sm shrink-0"
                >
                  <span>Chat</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-[#142044] border border-[#243566] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0e1938] flex items-center justify-center text-[#c5a059] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Direct Telephone</div>
                    <a
                      href={`tel:${profile.phone}`}
                      className="text-sm font-semibold text-white hover:text-[#c5a059] transition-colors"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>

                <a
                  href={`tel:${profile.phone}`}
                  className="px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-white bg-[#0e1938] border border-[#2b3c6e] hover:border-[#c5a059] rounded-lg transition-colors shrink-0"
                >
                  Call Now
                </a>
              </div>

              {/* Social Channels with Editable Placeholders */}
              <div className="pt-4 border-t border-[#18264e]">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Professional Networks:
                </div>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 text-xs font-medium text-slate-200 bg-[#142044] hover:bg-[#1a2b59] hover:text-[#c5a059] border border-[#243566] rounded-lg transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>

                  <a
                    href={profile.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 text-xs font-medium text-slate-200 bg-[#142044] hover:bg-[#1a2b59] hover:text-[#c5a059] border border-[#243566] rounded-lg transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Telegram Channel</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0e1938] border border-[#1e2c56] p-6 sm:p-8 shadow-xl">
              {isSubmitted ? (
                <div className="py-12 px-4 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Thank You, {formData.fullName || 'Valued Partner'}!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Your inquiry regarding <strong className="text-white">{formData.subject || 'collaboration'}</strong> has been prepared. You can send it directly via email or WhatsApp below to ensure instant delivery.
                  </p>

                  <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={mailtoUrl}
                      className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-[#c5a059] hover:bg-[#dfbe76] rounded-xl transition-all inline-flex items-center gap-2 shadow-md"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Email App</span>
                    </a>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 text-xs font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all inline-flex items-center gap-2 shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </a>

                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setSelectedServiceForInquiry(null);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          subject: '',
                          message: ''
                        });
                      }}
                      className="px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-[#142044] rounded-xl transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                        Full Name <span className="text-[#c5a059]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Samuel Bekele"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-[#142044] border border-[#243566] rounded-xl text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#c5a059] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                        Email Address <span className="text-[#c5a059]">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. samuel@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-[#142044] border border-[#243566] rounded-xl text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#c5a059] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-[#142044] border border-[#243566] rounded-xl text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#c5a059] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                        Subject <span className="text-[#c5a059]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Tutoring Inquiry / Accounting Assistance"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-[#142044] border border-[#243566] rounded-xl text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#c5a059] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                      Message <span className="text-[#c5a059]">*</span>
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Please share details about your inquiry, project scope, school grade level, or business collaboration goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-[#142044] border border-[#243566] rounded-xl text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#c5a059] transition-colors leading-relaxed"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-slate-400">
                      Direct response guaranteed within 24 hours.
                    </span>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-[#dfbe76] to-[#c5a059] hover:brightness-110 active:scale-[0.98] rounded-xl shadow-lg shadow-[#c5a059]/20 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-slate-950" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
