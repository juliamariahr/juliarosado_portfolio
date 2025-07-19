
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

const aboutContent = {
  pt: {
    mainTitle: "Sobre Mim",
    mainSubtitle: "Minha jornada, paixão e experiência.",
    backgroundTitle: "Minha Trajetória",
    backgroundText: "Sou estudante de Desenvolvimento de Software Multiplataforma na FATEC São José dos Campos (conclusão prevista para 2026), com foco em me tornar uma desenvolvedora fullstack. Meu interesse por tecnologia começou cedo, por influência do meu pai e da minha irmã. Aos 11 anos, tive meu primeiro contato com HTML brincando no Tumblr, o que despertou minha curiosidade pela área. Anos depois, decidi seguir profissionalmente na área de desenvolvimento e venho aprimorando minhas habilidades desde então. Tenho perfil proativo, comunicativo e comprometido, com facilidade para aprender, colaborar em equipe e resolver problemas. Possuo inglês em nível intermediário.",
    whatIDoTitle: "O Que Eu Faço",
    whatIDoText: "Desenvolvo projetos como fullstack durante minha formação, com foco em aprender e aplicar boas práticas de desenvolvimento. Tenho experiência prática com linguagens como JavaScript, Python e Java, usando frameworks como React, Node.js, Flask e Spring. Participei de projetos acadêmicos que simularam ambientes reais, com uso de metodologias ágeis e integração contínua.",
    technologiesTitle: "Tecnologias que Utilizo",
    techCategories: [
      {
        title: "Linguagens",
        skills: ['Python', 'JavaScript', 'TypeScript', 'Java']
      },
      {
        title: "Bancos de Dados",
        skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'DBeaver']
      },
      {
        title: "Frameworks & Bibliotecas",
        skills: ['Flask', 'React', 'Node.js', 'Vue.js', 'Bootstrap', 'Spring Framework', 'React Native']
      },
      {
        title: "Metodologias & Ferramentas",
        skills: ['Scrum', 'Git', 'GitHub', 'Docker']
      }
    ],
    scrollToNext: "Ir para Projetos"
  },
  en: {
    mainTitle: "About Me",
    mainSubtitle: "My journey, my passion, and my expertise.",
    backgroundTitle: "My Background",
    backgroundText: "I’m a Software Development student at FATEC São José dos Campos (expected graduation in 2026), focused on becoming a fullstack developer. My interest in technology started early, influenced by my father and sister. At 11, I had my first contact with HTML while customizing Tumblr themes for fun, which sparked my curiosity about the field. Years later, I decided to pursue software development professionally and have been improving my skills ever since. I’m proactive, communicative, and committed, with strong problem-solving skills and the ability to learn quickly and collaborate in teams. I have an intermediate level of English.",
    whatIDoTitle: "What I Do",
    whatIDoText: "I’ve been developing fullstack projects during my studies, with a focus on learning and applying development best practices. I have hands-on experience with languages like JavaScript, Python, and Java, using frameworks such as React, Node.js, Flask, and Spring. I’ve participated in academic projects that simulated real-world environments, applying agile methodologies and continuous integration.",
    technologiesTitle: "Technologies I Use",
    techCategories: [
      {
        title: "Languages",
        skills: ['Python', 'JavaScript', 'TypeScript', 'Java']
      },
      {
        title: "Databases",
        skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'DBeaver']
      },
      {
        title: "Frameworks & Libraries",
        skills: ['Flask', 'React', 'Node.js', 'Vue.js', 'Bootstrap', 'Spring Framework', 'React Native']
      },
      {
        title: "Methodologies & Tools",
        skills: ['Scrum', 'Git', 'GitHub', 'Docker']
      }
    ],
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
            <CardContent className="space-y-6">
              {content.techCategories.map((category) => (
                <div key={category.title}>
                  <h3 className="font-headline text-lg text-primary mb-3">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((tech) => (
                      <Badge key={tech} variant="secondary" className="font-body text-xs py-1 px-2 bg-primary/20 text-primary-foreground hover:bg-primary/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
      <AnimatedArrow href="#projects" ariaLabel={content.scrollToNext} />
    </section>
  );
}
