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
      repoUrl: "https://github.com/Code-Nine-FTC/API-2025.1",
      description: "Este projeto visa a coleta e processamento de dados de Estações Meteorológicas para o cliente Tecsus. O sistema permite inserção e busca de dados, além da exibição de estatísticas em gráficos interativos. A iniciativa atende à demanda da Tecsus para o monitoramento ambiental, utilizando sensores de baixo custo para medir vento, chuva, umidade, temperatura e pressão. Os dados são transmitidos para um servidor e exibidos em um portal com dashboards e relatórios, promovendo também a aprendizagem baseada em problemas.",
      technologies: ["Figma", "GitHub", "HTML", "CSS", "Python", "FastAPI", "React", "MongoDB", "AWS", "PostgreSQL", "Mosquitto", "Material UI", "IoT"]
    },
    {
      id: "project-6",
      title: "Cute Cat Bot – Bot de Gatinhos para Discord",
      imageUrl: "/img/cutecat.png",
      imageHint: "cute cat bot",
      repoUrl: "https://github.com/juliamariahr/CuteCatBot-site",
      description: "O Cute Cat Bot é um bot em Python para Discord que envia automaticamente imagens fofas de gatinhos todos os dias às 16h (BRT). Utiliza a biblioteca discord.py com Slash Commands via @app_commands, além de um servidor Flask para manter o bot online. A configuração é simples, com comando para definir o canal de envio por servidor. O projeto conta com agendamento assíncrono, armazenamento em JSON e estrutura modular, sendo ideal tanto para fins de aprendizado quanto para integração prática com APIs e automações em chat. Segue as políticas de segurança exigidas pelo Discord.",
      technologies: ["Python", "Flask", "JSON", "asyncio", "The Cat API", "discord.py"]
    },
    {
      id: "project-2",
      title: "Portal de Transparência - FAPG",
      imageUrl: "/img/fapg.png",
      imageHint: "dashboard dados",
      repoUrl: "https://github.com/Sync-FATEC/API-2024.2-3SEM",
      description: "Este projeto tem como objetivo desenvolver um portal de transparência para a Fundação de Apoio à Pesquisa de Pós-Graduandos (FAPG). Nossa meta é entregar uma plataforma robusta e eficiente, com funcionalidades que permitam a inserção de projetos, a realização de buscas avançadas por meio de filtros e a geração de estatísticas apresentadas em gráficos interativos, promovendo um acesso transparente e facilitado às informações públicas. O sistema é construído com um backend em Spring Boot e MySQL para importação e gerenciamento seguro de dados, e um frontend em React para dashboards dinâmicos, relatórios e operações CRUD para editais e beneficiários, garantindo conformidade com as exigências de divulgação pública.",
      technologies: ["Java (Spring Boot)", "MySQL", "React", "Python"]
    },
    {
      id: "project-3",
      title: "Sistema de Gestão de Chamados",
      imageUrl: "/img/helpdesk.jpeg",
      imageHint: "sistema suporte",
      repoUrl: "https://github.com/Code-Nine-FTC/API-2024.1",
      description: "O projeto tem o objetivo de desenvolver um sistema capaz de implementar melhorias no sistema de chamados e serviços, possuindo sistema de cadastro, criação de chamados a serem atendidos, registro de conclusão dos atendimentos e sistema de relatórios para análise. Atendendo no ramo de entregas, visando solucionar problemas relacionados a frete, rastreamento, dentre outros. O sistema é construído com um backend em Node.js, TypeScript e MySQL, implementando controle de acesso baseado em funções (admin, suporte, cliente), rastreamento de status dos chamados, registro histórico e implementação de SLA para otimizar fluxos de serviço e garantir qualidade no atendimento.",
      technologies: ["JavaScript", "TypeScript", "Node.js", "React", "CSS", "MySQL"]
    },
    {
      id: "project-4",
      title: "Criança Renal – Projeto API Acadêmico",
      imageUrl: "/img/criancarenal.jpeg",
      imageHint: "plataforma comunidade",
      repoUrl: "https://github.com/TeamHiveAPI/API-2023.2",
      description: "O projeto Criança Renal foi desenvolvido na API (Aprendizagem por Projeto Integrador), realizado em grupo. O objetivo é criar um site informativo com o propósito de conscientizar a população brasileira sobre as dificuldades enfrentadas pelos pais de crianças com Doença Renal Crônica (DRC) para garantir um tratamento de qualidade. Além disso, o projeto visa auxiliar esses pais a encontrar hospitais especializados no cuidado de crianças com DRC, fornecendo informações sobre recursos e meios de tratamento disponíveis no Brasil.",
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
      repoUrl: "https://github.com/Code-Nine-FTC/API-2025.1",
      description: "This project, for the client Tecsus, focuses on collecting and processing data from Weather Stations. The system allows for data insertion and retrieval, as well as displaying statistics on interactive graphs. The initiative addresses Tecsus's demand for environmental monitoring, using low-cost sensors to measure wind, rain, humidity, temperature, and pressure. Data is transmitted to a server and displayed on a portal with dashboards and reports, also promoting problem-based learning.",
      technologies: ["Figma", "GitHub", "HTML", "CSS", "Python", "FastAPI", "React", "MongoDB", "AWS", "PostgreSQL", "Mosquitto", "Material UI", "IoT"]
    },
    {
      id: "project-6",
      title: "Cute Cat Bot – Discord Cat Image Bot",
      imageUrl: "/img/cutecat.png",
      imageHint: "cute cat bot",
      repoUrl: "https://github.com/juliamariahr/CuteCatBot-site",
      description: "Cute Cat Bot is a Python-based Discord bot that automatically sends cute cat images every day at 4 PM (BRT). It uses the discord.py library with Slash Commands via @app_commands, along with a lightweight Flask server to keep the bot running. Configuration is simple, allowing admins to set the target channel per server. The project features asynchronous scheduling, JSON-based storage, and a modular code structure, making it ideal both for learning purposes and for practical API integration and chat automation. It follows Discord's security and privacy guidelines.",
      technologies: ["Python", "Flask", "JSON", "asyncio", "The Cat API", "discord.py"]
    },
    {
      id: "project-2",
      title: "Transparency Portal - FAPG",
      imageUrl: "/img/fapg.png",
      imageHint: "data dashboard",
      repoUrl: "https://github.com/Sync-FATEC/API-2024.2-3SEM",
      description: "This project is focused on developing a transparency portal for the Fundação de Apoio à Pesquisa de Pós-Graduandos (FAPG). The platform includes project submission, advanced data filtering, and interactive chart-based statistics, promoting transparency and easy access to public information. The system is built with a Spring Boot and MySQL backend for secure data import and management, and a React frontend for dynamic dashboards, reports, and CRUD operations for calls and beneficiaries, ensuring compliance with public disclosure requirements.",
      technologies: ["Java (Spring Boot)", "MySQL", "React", "Python"]
    },
    {
      id: "project-3",
      title: "Ticketing Management System",
      imageUrl: "/img/helpdesk.jpeg",
      imageHint: "support system",
      repoUrl: "https://github.com/Code-Nine-FTC/API-2024.1",
      description: "This project focuses on developing a system to improve the ticketing and service management process. It includes user registration, support ticket creation, service completion tracking, and a reporting module for analysis. Designed for the delivery sector, the system aims to address issues related to freight, tracking, and other logistics challenges. Built with a Node.js, TypeScript, and MySQL backend, it implements role-based access control (admin, support, client), ticket status tracking, historical logging, and SLA implementation to optimize service flows and ensure quality support.",
      technologies: ["JavaScript", "TypeScript", "Node.js", "React", "CSS", "MySQL"]
    },
    {
      id: "project-4",
      title: "Criança Renal - Academic API Project",
      imageUrl: "/img/criancarenal.jpeg",
      imageHint: "community platform",
      repoUrl: "https://github.com/TeamHiveAPI/API-2023.2",
      description: "The Criança Renal project was developed as part of the Integrated Project-Based Learning (API) program, as a collaborative group project. The goal was to create an informational website aimed at raising awareness among the Brazilian population about the challenges faced by parents of children with Chronic Kidney Disease (CKD) in accessing quality treatment. The project also seeks to help these families find hospitals specialized in pediatric CKD care by providing information on available resources and treatment options in Brazil.",
      technologies: ["Figma", "HTML", "CSS", "JavaScript", "Python", "Flask", "MySQL"]
    }
  ]
};

const sectionContent = {
  pt: {
    title: "Meus Projetos",
    subtitle: "Uma amostra das minhas capacidades técnicas e projetos criativos.",
    techTitle: "Tecnologias Utilizadas:",
    repoButton: "Ver Repositório",
    scrollToNext: "Ir para Contato"
  },
  en: {
    title: "My Projects",
    subtitle: "A glimpse into my technical capabilities and creative projects.",
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline text-primary mb-4">{content.title}</h2>
          <p className="text-base sm:text-lg font-body text-muted-foreground">{content.subtitle}</p>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-6">
          {currentProjects.map((project) => (
            <AccordionItem key={project.id} value={project.id} asChild>
              <Card className="shadow-lg overflow-hidden group">
                <AccordionTrigger className="hover:no-underline focus:no-underline p-0">
                  <CardHeader className="flex flex-row items-center justify-between w-full p-4 md:p-6 group-hover:bg-accent/10 transition-colors">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                       <div className="relative w-16 h-12 sm:w-20 sm:h-16 md:w-28 md:h-20 rounded-md overflow-hidden flex-shrink-0 shadow-md">
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          layout="fill"
                          objectFit="cover"
                          data-ai-hint={project.imageHint}
                        />
                      </div>
                      <CardTitle className="font-headline text-lg sm:text-xl md:text-2xl text-accent text-left group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    </div>
                  </CardHeader>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-4 md:p-6 pt-2 md:grid md:grid-cols-2 md:gap-x-6 lg:gap-x-8 space-y-6 md:space-y-0">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl mb-4 md:mb-0 md:col-span-1">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        data-ai-hint={project.imageHint}
                        className="transition-transform duration-300 ease-in-out group-data-[state=open]:scale-105"
                      />
                    </div>
                    <div className="md:col-span-1 flex flex-col justify-center">
                      <CardDescription className="font-body text-foreground/90 text-base leading-relaxed mb-4">
                        {project.description}
                      </CardDescription>
                      <div className="mb-4">
                        <h4 className="flex items-center font-headline text-sm sm:text-md text-primary mb-2">
                          <Code2 className="mr-2 h-5 w-5 text-icon" />
                          {content.techTitle}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="font-body text-xs py-1 px-2 sm:px-2.5 bg-primary/20 text-primary-foreground hover:bg-primary/30">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      {project.repoUrl && (
                        <div className="mt-auto pt-4">
                          <Button variant="outline" asChild className="border-primary/30 hover:bg-primary/10 text-primary hover:text-accent group text-sm">
                            <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                              <Link2 className="mr-2 h-4 w-4 text-icon group-hover:text-accent transition-colors" />
                              {content.repoButton}
                            </Link>
                          </Button>
                        </div>
                      )}
                    </div>
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
