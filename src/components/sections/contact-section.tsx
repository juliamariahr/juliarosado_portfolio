
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import type { Language } from '@/app/page';
import AnimatedArrow from '@/components/ui/animated-arrow';

interface ContactSectionProps {
  language: Language;
}

const contactLinksData = {
  pt: [
    {
      name: 'GitHub',
      href: 'https://github.com/juliamariahr',
      icon: <Github className="h-6 w-6 text-icon" />,
      handle: 'juliamariahr'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/júlia-rosado/',
      icon: <Linkedin className="h-6 w-6 text-icon" />,
      handle: 'júlia-rosado'
    },
    {
      name: 'E-mail',
      href: 'mailto:juliamariahhr@gmail.com',
      icon: <Mail className="h-6 w-6 text-icon" />,
      handle: 'juliamariahhr@gmail.com'
    },
  ],
  en: [
    {
      name: 'GitHub',
      href: 'https://github.com/juliamariahr',
      icon: <Github className="h-6 w-6 text-icon" />,
      handle: 'juliamariahr'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/júlia-rosado/',
      icon: <Linkedin className="h-6 w-6 text-icon" />,
      handle: 'júlia-rosado'
    },
    {
      name: 'Email',
      href: 'mailto:juliamariahhr@gmail.com',
      icon: <Mail className="h-6 w-6 text-icon" />,
      handle: 'juliamariahhr@gmail.com'
    },
  ]
};

const contactContent = {
  pt: {
    mainTitle: "Entre em Contato",
    mainSubtitle: "Estou sempre aberta para discutir novos projetos, ideias criativas ou oportunidades para fazer parte da sua visão.",
    cardTitle: "Conecte-se Comigo",
    scrollToTop: "Voltar para o Início"
  },
  en: {
    mainTitle: "Get in Touch",
    mainSubtitle: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
    cardTitle: "Connect With Me",
    scrollToTop: "Back to Top"
  }
};

export default function ContactSection({ language }: ContactSectionProps) {
  const currentLinks = contactLinksData[language];
  const content = contactContent[language];

  return (
    <section id="contact" className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-28 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline text-primary mb-4">{content.mainTitle}</h2>
          <p className="text-lg font-body text-muted-foreground">
            {content.mainSubtitle}
          </p>
        </div>
        
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-center text-accent">{content.cardTitle}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {currentLinks.map((link) => (
              <Button
                key={link.name}
                variant="outline"
                className="w-full justify-start p-6 h-auto border-primary/30 hover:bg-primary/10 group"
                asChild
              >
                <Link href={link.href} target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center space-x-4">
                    {link.icon}
                    <div>
                      <p className="font-headline text-lg text-primary group-hover:text-accent transition-colors">{link.name}</p>
                      <p className="font-body text-sm text-muted-foreground group-hover:text-accent/80 transition-colors">{link.handle}</p>
                    </div>
                  </div>
                </Link>
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>
      <AnimatedArrow href="#home" ariaLabel={content.scrollToTop} />
    </section>
  );
}

