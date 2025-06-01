'use client';

import { useState } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HomeSection from '@/components/sections/home-section';
import AboutSection from '@/components/sections/about-section';
import ProjectsSection from '@/components/sections/projects-section';
import ContactSection from '@/components/sections/contact-section';

export type Language = 'pt' | 'en';

export default function Home() {
  const [language, setLanguage] = useState<Language>('pt');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'pt' ? 'en' : 'pt'));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header language={language} toggleLanguage={toggleLanguage} />
      <main className="flex-grow">
        <HomeSection language={language} />
        <AboutSection language={language} />
        <ProjectsSection language={language} />
        <ContactSection language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}
