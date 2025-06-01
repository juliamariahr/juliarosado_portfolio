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
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="text-2xl font-headline text-primary hover:text-primary/80 transition-colors">
          {portfolioName}
        </Link>
        <nav className="flex items-center space-x-1 sm:space-x-2">
          {currentNavItems.map((item) => (
            <Button key={item.label} variant="ghost" asChild className="font-headline text-xs sm:text-sm md:text-base hover:bg-accent/50">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
          <Button variant="ghost" onClick={toggleLanguage} className="font-headline text-xs sm:text-sm md:text-base hover:bg-accent/50" size="icon">
            <Globe className="h-5 w-5 sm:mr-1" />
            <span className="hidden sm:inline">{language === 'pt' ? 'EN' : 'PT'}</span>
          </Button>
        </nav>
      </div>
    </header>
  );
}
