
'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Cpu, UserCircle } from 'lucide-react';
import type { Language } from '@/app/page';
import AnimatedArrow from '@/components/ui/animated-arrow';

interface AboutSectionProps {
  language: Language;
}

const technologies = [
  'Python', 'JavaScript', 'TypeScript', 'Java',
  'MySQL', 'MongoDB', 'PostgreSQL',
  'Flask', 'React', 'Node.js', 'Vue.js', 'Bootstrap', 'Spring Framework', 'React Native',
  'Scrum', 'Git', 'GitHub', 'Docker', 'DBeaver'
];

const aboutContent = {
  pt: {
    mainTitle: "Sobre Mim",
    mainSubtitle: "Minha jornada, paixão e experiência.",
    backgroundTitle: "Minha Trajetória",
    backgroundText: "Sou uma profissional comunicativa, proativa e comprometida, com facilidade para trabalhar em equipe, me adaptar a novos desafios e manter o foco em qualidade e eficiência nas entregas. Entrei na tecnologia por influência do meu pai e da minha irmã, e comecei essa jornada aos 11 anos, brincando com HTML no Tumblr por pura diversão, sem nem imaginar onde isso iria me levar. Atualmente curso Desenvolvimento de Software Multiplataforma na FATEC São José dos Campos, com previsão de conclusão em 2026, e possuo inglês em nível intermediário.",
    whatIDoTitle: "O Que Eu Faço",
    whatIDoText: "Atuo como desenvolvedora fullstack em ambientes colaborativos que adotam metodologias ágeis e incentivam inovação e aprendizado contínuo. Tenho foco em entregar soluções digitais escaláveis e bem estruturadas, participando de todo o ciclo de desenvolvimento, da definição técnica à entrega em produção, sempre com atenção à qualidade, performance e manutenibilidade do código.",
    technologiesTitle: "Tecnologias que Utilizo",
    scrollToNext: "Ir para Projetos"
  },
  en: {
    mainTitle: "About Me",
    mainSubtitle: "My journey, my passion, and my expertise.",
    backgroundTitle: "My Background",
    backgroundText: "I'm a communicative, proactive, and committed professional, with strong teamwork skills, adaptability to new challenges, and a focus on delivering quality and efficiency. I got into tech thanks to my dad and sister, starting this journey at age 11 by playing around with HTML on Tumblr just for fun, without any idea where it would lead me. I'm currently studying Multiplatform Software Development at FATEC São José dos Campos, expected to graduate in 2026, and I have an intermediate level of English.",
    whatIDoTitle: "What I Do",
    whatIDoText: "I work as a fullstack developer in collaborative environments that follow agile methodologies and promote innovation and continuous learning. I focus on delivering scalable, well-structured digital solutions, participating in the entire development cycle, from technical planning to production deployment, always paying attention to code quality, performance, and maintainability.",
    technologiesTitle: "Technologies I Use",
    scrollToNext: "Go to Projects"
  }
};

export default function AboutSection({ language }: AboutSectionProps) {
  const content = aboutContent[language];

  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-28 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-4xl w-full space-y-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline text-primary mb-4">{content.mainTitle}</h2>
          <p className="text-base sm:text-lg font-body text-muted-foreground mb-10">{content.mainSubtitle}</p>
        </div>

        <div className="flex flex-col items-center mb-12">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mb-6">
            <Image
              src="/img/julia.jpeg"
              alt="Júlia Rosado"
              width={300}
              height={300}
              className="rounded-full object-cover shadow-xl border-4 border-primary/50"
              data-ai-hint="profile photo"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center font-headline text-xl sm:text-2xl text-accent">
                <UserCircle className="mr-3 h-6 w-6 sm:h-7 sm:w-7 text-icon" />
                {content.backgroundTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-body text-foreground leading-relaxed text-base">
                {content.backgroundText}
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center font-headline text-xl sm:text-2xl text-accent">
                <Briefcase className="mr-3 h-6 w-6 sm:h-7 sm:w-7 text-icon" />
                {content.whatIDoTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-body text-foreground leading-relaxed text-base">
                {content.whatIDoText}
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center font-headline text-xl sm:text-2xl text-accent">
                <Cpu className="mr-3 h-6 w-6 sm:h-7 sm:w-7 text-icon" />
                {content.technologiesTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="font-body text-xs sm:text-sm py-1 px-2 sm:px-3 bg-primary/20 text-primary-foreground hover:bg-primary/30">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <AnimatedArrow href="#projects" ariaLabel={content.scrollToNext} />
    </section>
  );
}
