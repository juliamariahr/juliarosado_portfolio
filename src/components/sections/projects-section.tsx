
'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Language } from '@/app/page';
import { Code2, Link2 } from 'lucide-react';
import AnimatedArrow from '@/components/ui/animated-arrow';

interface ProjectsSectionProps {
  language: Language;
}

const projectsData = {
  pt: [
    {
      id: "project-1",
      title: "Elo - Aplicativo de Controle Menstrual",
      imageUrl: "/img/elo.png",
      imageHint: "mobile saude",
      repoUrl: "https://github.com/juliamariahr/elocalendar",
      description: "Aplicativo mobile para rastreamento do ciclo menstrual, sintomas e previsões personalizadas, com foco em saúde, privacidade e experiência do usuário. Desenvolvido individualmente, este projeto acadêmico envolveu implementação full-stack usando React Native para o frontend e Firebase (Auth, Firestore, Push Notifications) para o backend. Funcionalidades chave incluem autenticação segura (email/senha, biometria), registro detalhado do ciclo, previsões automatizadas, notificações push, calendário interativo/dashboards e exportação de dados (PDF/CSV).",
      technologies: ["React Native", "Expo", "Firebase", "Firestore", "Git", "GitHub"]
    },
    {
      id: "project-5",
      title: "Estações Climáticas - Tecsus",
      imageUrl: "/img/tecsus.jpg",
      imageHint: "weather station data",
      repoUrl: "",
      description: "Este projeto visa a coleta e processamento de dados de Estações Meteorológicas para o cliente Tecsus. O sistema permite inserção e busca de dados, além da exibição de estatísticas em gráficos interativos. A iniciativa atende à demanda da Tecsus para o monitoramento ambiental, utilizando sensores de baixo custo para medir vento, chuva, umidade, temperatura e pressão. Os dados são transmitidos para um servidor e exibidos em um portal com dashboards e relatórios, promovendo também a aprendizagem baseada em problemas.",
      technologies: ["Figma", "GitHub", "HTML", "CSS", "Python", "FastAPI", "React", "MongoDB", "AWS", "PostgreSQL", "Mosquitto", "Material UI", "IoT"]
    },
    {
      id: "project-2",
      title: "Portal de Transparência - FAPG",
      imageUrl: "/img/fapg.png",
      imageHint: "dashboard dados",
      repoUrl: "https://github.com/Sync-FATEC/API-2024.2-3SEM",
      description: "Desenvolvido para a FAPG para aumentar a transparência na gestão de bolsas de projetos científicos. Este projeto full-stack possui backend em Spring Boot e MySQL para importação e gestão segura de dados, e frontend em React para dashboards dinâmicos, relatórios e operações CRUD para bolsas e bolsistas, garantindo conformidade com requisitos de divulgação pública.",
      technologies: ["Java (Spring Boot)", "MySQL", "React", "Python"]
    },
    {
      id: "project-3",
      title: "Sistema de Gestão de Chamados",
      imageUrl: "/img/helpdesk.jpeg",
      imageHint: "sistema suporte",
      repoUrl: "https://github.com/Code-Nine-FTC/API-2024.1",
      description: "Um sistema backend para gerenciamento de chamados de suporte técnico, construído com Node.js, TypeScript e MySQL. Possui controle de acesso baseado em função (admin, suporte, cliente), rastreamento de status de chamados, log histórico e implementação de SLA para otimizar fluxos de trabalho de serviço e garantir a qualidade do serviço.",
      technologies: ["JavaScript", "TypeScript", "Node.js", "React", "CSS", "MySQL"]
    },
    {
      id: "project-4",
      title: "Criança Renal – Projeto API Acadêmico",
      imageUrl: "/img/criancarenal.jpeg",
      imageHint: "plataforma comunidade",
      repoUrl: "https://github.com/TeamHiveAPI/API-2023.2",
      description: "Um projeto de API acadêmico e website para 'Criança Renal', apoiando famílias de crianças com Doença Renal Crônica. Desenvolvido usando Flask (Python) para o backend, inclui funcionalidades como postagem de conteúdo, perfis de usuário com permissões e uploads de imagem. Como Scrum Master, facilitei processos ágeis. O projeto enfatiza empatia e usabilidade para fornecer informação e suporte para uma causa social.",
      technologies: ["Figma", "HTML", "CSS", "JavaScript", "Python", "Flask", "MySQL"]
    }
  ],
  en: [
    {
      id: "project-1",
      title: "Elo - Menstrual Cycle Tracking App",
      imageUrl: "/img/elo.png",
      imageHint: "mobile health",
      repoUrl: "https://github.com/juliamariahr/elocalendar",
      description: "A mobile app for menstrual cycle tracking, symptom logging, and personalized predictions, focusing on health, privacy, and user experience. Developed individually, this academic project involved full-stack implementation using React Native for the frontend and Firebase (Auth, Firestore, Push Notifications) for the backend. Key features include secure authentication (email/password, biometrics), detailed cycle logging, automated predictions, push notifications, interactive calendar/dashboards, and data export (PDF/CSV).",
      technologies: ["React Native", "Expo", "Firebase", "Firestore", "Git", "GitHub"]
    },
    {
      id: "project-5",
      title: "Weather Stations - Tecsus",
      imageUrl: "/img/tecsus.jpg",
      imageHint: "weather station data",
      repoUrl: "",
      description: "This project, for the client Tecsus, focuses on collecting and processing data from Weather Stations. The system allows for data insertion and retrieval, as well as displaying statistics on interactive graphs. The initiative addresses Tecsus's demand for environmental monitoring, using low-cost sensors to measure wind, rain, humidity, temperature, and pressure. Data is transmitted to a server and displayed on a portal with dashboards and reports, also promoting problem-based learning.",
      technologies: ["Figma", "GitHub", "HTML", "CSS", "Python", "FastAPI", "React", "MongoDB", "AWS", "PostgreSQL", "Mosquitto", "Material UI", "IoT"]
    },
    {
      id: "project-2",
      title: "Transparency Portal - FAPG",
      imageUrl: "/img/fapg.png",
      imageHint: "data dashboard",
      repoUrl: "https://github.com/Sync-FATEC/API-2024.2-3SEM",
      description: "Developed for FAPG to enhance transparency in managing scientific project grants. This full-stack project features a Spring Boot and MySQL backend for secure data import and management, and a React frontend for dynamic dashboards, reports, and CRUD operations for grants and grantees, ensuring compliance with public disclosure requirements.",
      technologies: ["Java (Spring Boot)", "MySQL", "React", "Python"]
    },
    {
      id: "project-3",
      title: "Ticketing Management System",
      imageUrl: "/img/helpdesk.jpeg",
      imageHint: "support system",
      repoUrl: "https://github.com/Code-Nine-FTC/API-2024.1",
      description: "A backend system for technical support ticket management, built with Node.js, TypeScript, and MySQL. It features role-based access control (admin, support, client), ticket status tracking, historical logging, and SLA implementation to optimize service workflows and ensure quality of service.",
      technologies: ["JavaScript", "TypeScript", "Node.js", "React", "CSS", "MySQL"]
    },
    {
      id: "project-4",
      title: "Criança Renal - Academic API Project",
      imageUrl: "/img/criancarenal.jpeg",
      imageHint: "community platform",
      repoUrl: "https://github.com/TeamHiveAPI/API-2023.2",
      description: "An academic API project and website for 'Criança Renal', supporting families of children with Chronic Kidney Disease. Developed using Flask (Python) for the backend, it includes features like content posting, user profiles with permissions, and image uploads. As Scrum Master, I facilitated agile processes. The project emphasizes empathy and usability to provide information and support for a social cause.",
      technologies: ["Figma", "HTML", "CSS", "JavaScript", "Python", "Flask", "MySQL"]
    }
  ]
};

const sectionContent = {
  pt: {
    title: "Meus Projetos",
    subtitle: "Uma amostra das minhas capacidades técnicas e empreendimentos criativos.",
    techTitle: "Tecnologias Utilizadas:",
    repoButton: "Ver Repositório",
    scrollToNext: "Ir para Contato"
  },
  en: {
    title: "My Projects",
    subtitle: "A glimpse into my technical capabilities and creative endeavors.",
    techTitle: "Technologies Used:",
    repoButton: "View Repository",
    scrollToNext: "Go to Contact"
  }
};

export default function ProjectsSection({ language }: ProjectsSectionProps) {
  const currentProjects = projectsData[language];
  const content = sectionContent[language];

  return (
    <section id="projects" className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline text-primary mb-4">{content.title}</h2>
          <p className="text-lg font-body text-muted-foreground">{content.subtitle}</p>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-6">
          {currentProjects.map((project) => (
            <AccordionItem key={project.id} value={project.id} asChild>
              <Card className="shadow-lg overflow-hidden">
                <AccordionTrigger className="hover:no-underline focus:no-underline p-0 group">
                  <CardHeader className="flex flex-row items-center justify-between w-full p-4 md:p-6 group-hover:bg-accent/10 transition-colors">
                    <div className="flex items-center space-x-4">
                       <div className="relative w-20 h-16 md:w-28 md:h-20 rounded-md overflow-hidden flex-shrink-0 shadow-md">
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          layout="fill"
                          objectFit="cover"
                          data-ai-hint={project.imageHint}
                        />
                      </div>
                      <CardTitle className="font-headline text-xl md:text-2xl text-accent text-left group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    </div>
                  </CardHeader>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-4 md:p-6 pt-2 space-y-4">
                    <CardDescription className="font-body text-foreground/90 text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                    <div>
                      <h4 className="flex items-center font-headline text-md text-primary mb-2">
                        <Code2 className="mr-2 h-5 w-5 text-icon" />
                        {content.techTitle}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="font-body text-xs py-1 px-2.5 bg-primary/20 text-primary-foreground hover:bg-primary/30">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    {project.repoUrl && (
                      <div className="mt-4">
                        <Button variant="outline" asChild className="border-primary/30 hover:bg-primary/10 text-primary hover:text-accent group">
                          <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                            <Link2 className="mr-2 h-4 w-4 text-icon group-hover:text-accent transition-colors" />
                            {content.repoButton}
                          </Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </Card>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <AnimatedArrow href="#contact" ariaLabel={content.scrollToNext} />
    </section>
  );
}
