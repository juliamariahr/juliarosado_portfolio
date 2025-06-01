
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Language } from '@/app/page';
import AnimatedArrow from '@/components/ui/animated-arrow';

interface HomeSectionProps {
  language: Language;
}

const homeContent = {
  pt: {
    title: "Júlia Rosado",
    typedPhrases: ["Desenvolvedora Full-Stack", "Desenvolvedora Backend", "Amante de Gatos", "Gamer"],
    description: "Sou Júlia, desenvolvedora full-stack apaixonada por criar soluções digitais inovadoras e eficientes. Explore meus projetos, conheça minhas habilidades e veja como utilizo desenvolvimento colaborativo e metodologias ágeis para construir aplicações de impacto.",
    buttonText: "Ver Meus Trabalhos",
    scrollToNext: "Ir para Sobre Mim"
  },
  en: {
    title: "Júlia Rosado",
    typedPhrases: ["Full-Stack Developer", "Backend Developer", "Cat Lover", "Gamer"],
    description: "I'm Júlia, a full-stack developer passionate about creating innovative and efficient digital solutions. Explore my projects, learn about my skills, and see how I leverage collaborative development and agile methodologies to build impactful applications.",
    buttonText: "View My Work",
    scrollToNext: "Go to About Me"
  }
};

export default function HomeSection({ language }: HomeSectionProps) {
  const content = homeContent[language];

  const TYPING_SPEED = 100;
  const DELETING_SPEED = 50;
  const PAUSE_DURATION = 1500;

  const [currentText, setCurrentText] = useState('');
  const [phraseArrayIndex, setPhraseArrayIndex] = useState(0);
  const [charIndexInPhrase, setCharIndexInPhrase] = useState(0);
  const [isDeletingPhase, setIsDeletingPhase] = useState(false);


  useEffect(() => {
    setCurrentText('');
    setPhraseArrayIndex(0);
    setCharIndexInPhrase(0);
    setIsDeletingPhase(false);
  }, [language, content.typedPhrases]);

  useEffect(() => {
    if (!content.typedPhrases || content.typedPhrases.length === 0) return;

    const phrases = content.typedPhrases;
    const currentPhrase = phrases[phraseArrayIndex];
    let timeoutId: NodeJS.Timeout;

    if (!isDeletingPhase) {
      if (charIndexInPhrase < currentPhrase.length) {
        timeoutId = setTimeout(() => {
          setCurrentText((prev) => prev + currentPhrase[charIndexInPhrase]);
          setCharIndexInPhrase((prev) => prev + 1);
        }, TYPING_SPEED);
      } else {
        timeoutId = setTimeout(() => {
          setIsDeletingPhase(true);
        }, PAUSE_DURATION);
      }
    } else {
      if (charIndexInPhrase > 0) {
        timeoutId = setTimeout(() => {
          setCurrentText((prev) => prev.substring(0, prev.length - 1));
          setCharIndexInPhrase((prev) => prev - 1);
        }, DELETING_SPEED);
      } else {
        timeoutId = setTimeout(() => {
          setIsDeletingPhase(false);
          setPhraseArrayIndex((prev) => (prev + 1) % phrases.length);
        }, TYPING_SPEED);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [currentText, isDeletingPhase, phraseArrayIndex, charIndexInPhrase, language, content.typedPhrases]);


  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center pt-20 pb-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline text-primary mb-2">
          {content.title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-body text-accent mb-6 h-10">
          {currentText}
          <span className="animate-blink-cursor ml-1 text-accent relative" style={{ top: '-0.05em' }}>|</span>
        </p>
        <p className="text-base sm:text-lg md:text-xl font-body text-foreground mb-8">
          {content.description}
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-headline">
          <Link href="#projects">{content.buttonText}</Link>
        </Button>
      </div>
      <AnimatedArrow href="#about" ariaLabel={content.scrollToNext} />
    </section>
  );
}

