'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Language } from '@/app/page';
import { Globe, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

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

export default function Header({ language, toggleLanguage }: HeaderProps) {
  const currentNavItems = navItemsData[language];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex max-w-7xl flex-col items-center px-4 py-3 sm:h-16 sm:flex-row sm:justify-between sm:py-0 sm:px-4 lg:px-6">
        <Link
          href="#home"
          className="text-primary transition-colors hover:text-primary/80 mb-2 sm:mb-0 hidden sm:block"
        >
          <Sparkles className="h-7 w-7 fill-current" />
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
            className={cn(
              "font-headline",
              "h-8 w-8",
              "sm:h-10 sm:w-auto sm:px-3",
              "text-xs sm:text-sm md:text-base",
              "hover:bg-accent/50"
            )}
          >
            <Globe className="h-5 w-5 sm:mr-1" />
            <span className="hidden sm:inline">{language === 'pt' ? 'EN' : 'PT'}</span>
          </Button>
        </nav>
      </div>
    </header>
  );
}
