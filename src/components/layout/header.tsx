'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Language } from '@/app/page';
import { Globe } from 'lucide-react';

interface HeaderProps {
  language: Language;
  toggleLanguage: () => void;
}

const navItemsData = {
  pt: [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Contato', href: '#contact' },
  ],
  en: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]
};

const portfolioNameData = {
  pt: 'Júlia Rosado',
  en: 'Júlia Rosado',
};

export default function Header({ language, toggleLanguage }: HeaderProps) {
  const currentNavItems = navItemsData[language];
  const portfolioName = portfolioNameData[language];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex max-w-7xl flex-col items-center px-4 py-3 sm:h-16 sm:flex-row sm:justify-between sm:py-0 sm:px-6 lg:px-8">
        <Link 
          href="#home" 
          className="text-xl font-headline text-primary transition-colors hover:text-primary/80 sm:text-2xl mb-2 sm:mb-0"
        >
          {portfolioName}
        </Link>
        <nav className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1 sm:gap-x-2">
          {currentNavItems.map((item) => (
            <Button 
              key={item.label} 
              variant="ghost" 
              asChild 
              className="font-headline text-xs hover:bg-accent/50 sm:text-sm md:text-base"
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
          <Button 
            variant="ghost" 
            onClick={toggleLanguage} 
            className="font-headline text-xs hover:bg-accent/50 sm:text-sm md:text-base" 
            size="icon"
          >
            <Globe className="h-5 w-5 sm:mr-1" />
            <span className="hidden sm:inline">{language === 'pt' ? 'EN' : 'PT'}</span>
          </Button>
        </nav>
      </div>
    </header>
  );
}
