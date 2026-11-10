/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Services } from './components/Services';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { PortfolioGallery } from './components/PortfolioGallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { ContentEditorModal } from './components/ContentEditorModal';
import { HireMeModal } from './components/HireMeModal';

export default function App() {
  return (
    <PortfolioProvider>
      <div className="min-h-screen bg-[#080f24] text-slate-100 flex flex-col antialiased selection:bg-[#c5a059] selection:text-slate-950 font-sans">
        {/* Navigation Bar */}
        <Header />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* 1. Home / Hero Section */}
          <Hero />

          {/* 2. About Me Section */}
          <About />

          {/* 3. My Professional Skills Section (6 Categories) */}
          <Skills />

          {/* 4. Professional Experience Timeline (Editable entries) */}
          <Experience />

          {/* 5. Services I Offer (9 Services) */}
          <Services />

          {/* 6. Why Work With Me? (7 Pillars) */}
          <WhyWorkWithMe />

          {/* 7. Portfolio Gallery (Visual Showcase & Lightbox) */}
          <PortfolioGallery />

          {/* 8. Testimonials Section (Editable sample placeholders) */}
          <Testimonials />

          {/* 9. Contact Me Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Modals & Dialogs */}
        <CvModal />
        <ContentEditorModal />
        <HireMeModal />
      </div>
    </PortfolioProvider>
  );
}
