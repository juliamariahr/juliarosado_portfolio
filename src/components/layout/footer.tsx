'use client';

import type { Language } from '@/app/page';

interface FooterProps {
  language: Language;
}

const footerText = {
  pt: {
    copyright: `© ${new Date().getFullYear()} Júlia Rosado. Todos os direitos reservados.`
  },
  en: {
    copyright: `© ${new Date().getFullYear()} Júlia Rosado. All rights reserved.`
  }
};

export default function Footer({ language }: FooterProps) {
  const currentText = footerText[language];
  return (
    <footer className="py-8 text-center">
      <p className="text-sm text-muted-foreground font-body">
        {currentText.copyright}
      </p>
    </footer>
  );
}
