
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Language } from '@/app/page';
import { Link2 } from 'lucide-react';
import AnimatedArrow from '@/components/ui/animated-arrow';
import { cn } from '@/lib/utils';

interface ProjectsSectionProps {
  language: Language;
}

type ProjectCategory = 'all' | 'fullstack' | 'mobile';

const projectsData = {
  pt: [
        {
      id: "project-6",
      title: "Sistema de Gestão de Estoque",
      imageUrl: "/img/gestao.png",
      imageHint: "estoque logistica",
      repoUrl: "https://github.com/Code-Nine-FTC/API-2025.2",
      description: "Sistema para modernizar o controle interno da Base de Caçapava, com gestão de estoque e fornecedores, leitura de código de barras e alertas inteligentes.",
      technologies: ["Java", "Flutter", "Dart", "Vue.js", "PostgreSQL", "Python"],
      category: 'mobile' as ProjectCategory
    },
    {
      id: "project-1",
      title: "Elo - Aplicativo de Controle Menstrual",
      imageUrl: "/img/elo.png",
      imageHint: "mobile saude",
      repoUrl: "https://github.com/juliamariahr/elocalendar",
      description: "Aplicativo mobile para rastreamento do ciclo menstrual, sintomas e previsões personalizadas, com foco em saúde, privacidade e experiência do usuário.",
      technologies: ["React Native", "Expo", "Firebase", "Firestore", "Git", "GitHub"],
      category: 'mobile' as ProjectCategory
    },
    {
      id: "project-5",
      title: "Estações Climáticas - Tecsus",
      imageUrl: "/img/tecsus.jpg",
      imageHint: "weather station data",
      repoUrl: "https://github.com/Code-Nine-FTC/API-2025.1",
      description: "Sistema para coleta e processamento de dados de Estações Meteorológicas, com inserção, busca e exibição de estatísticas em gráficos interativos.",
      technologies: ["React", "Python", "FastAPI", "MongoDB", "AWS", "IoT"],
      category: 'fullstack' as ProjectCategory
    },
    {
      id: "project-2",
      title: "Portal de Transparência - FAPG",
      imageUrl: "/img/fapg.png",
      imageHint: "dashboard dados",
      repoUrl: "https://github.com/Sync-FATEC/API-2024.2-3SEM",
      description: "Portal de transparência com inserção de projetos, buscas avançadas e geração de estatísticas para a Fundação de Apoio à Pesquisa de Pós-Graduandos.",
      technologies: ["Java (Spring Boot)", "MySQL", "React", "Python"],
      category: 'fullstack' as ProjectCategory
    },
    {
      id: "project-3",
      title: "Sistema de Gestão de Chamados",
      imageUrl: "/img/helpdesk.jpeg",
      imageHint: "sistema suporte",
      repoUrl: "https://github.com/Code-Nine-FTC/API-2024.1",
      description: "Sistema para gestão de chamados e serviços, com cadastro, criação, e relatórios, focado no ramo de entregas para solucionar problemas de frete e rastreamento.",
      technologies: ["JavaScript", "TypeScript", "Node.js", "React", "MySQL"],
      category: 'fullstack' as ProjectCategory
    },
  ],
  en: [
        {
      id: "project-6",
      title: "Inventory Management System",
      imageUrl: "/img/gestao.png",
      imageHint: "inventory logistics",
      repoUrl: "https://github.com/Code-Nine-FTC/API-2025.2",
      description: "A system to modernize internal control of the Caçapava Base, with inventory and supplier management, barcode scanning, and smart alerts.",
      technologies: ["Java", "Flutter", "Dart", "Vue.js", "PostgreSQL", "Python"],
      category: 'mobile' as ProjectCategory
    },
    {
      id: "project-1",
      title: "Elo - Menstrual Cycle App",
      imageUrl: "/img/elo.png",
      imageHint: "mobile health",
      repoUrl: "https://github.com/juliamariahr/elocalendar",
      description: "A mobile app for menstrual cycle tracking, symptom logging, and personalized predictions, focusing on health, privacy, and user experience.",
      technologies: ["React Native", "Expo", "Firebase", "Firestore", "Git", "GitHub"],
      category: 'mobile' as ProjectCategory
    },
    {
      id: "project-5",
      title: "Weather Stations - Tecsus",
      imageUrl: "/img/tecsus.jpg",
      imageHint: "weather station data",
      repoUrl: "https://github.com/Code-Nine-FTC/API-2025.1",
      description: "A system for collecting and processing data from Weather Stations, allowing data entry, search, and display of statistics on interactive graphs.",
      technologies: ["React", "Python", "FastAPI", "MongoDB", "AWS", "IoT"],
      category: 'fullstack' as ProjectCategory
    },
    {
      id: "project-2",
      title: "Transparency Portal - FAPG",
      imageUrl: "/img/fapg.png",
      imageHint: "data dashboard",
      repoUrl: "https://github.com/Sync-FATEC/API-2024.2-3SEM",
      description: "A transparency portal with project submission, advanced search, and statistics generation for the Graduate Research Support Foundation.",
      technologies: ["Java (Spring Boot)", "MySQL", "React", "Python"],
      category: 'fullstack' as ProjectCategory
    },
    {
      id: "project-3",
      title: "Ticketing Management System",
      imageUrl: "/img/helpdesk.jpeg",
      imageHint: "support system",
      repoUrl: "https://github.com/Code-Nine-FTC/API-2024.1",
      description: "A system for managing tickets and services, including registration, creation, and reporting, focused on the delivery industry to solve freight and tracking issues.",
      technologies: ["JavaScript", "TypeScript", "Node.js", "React", "MySQL"],
      category: 'fullstack' as ProjectCategory
    },
  ]
};

const sectionContent = {
  pt: {
    title: "Meus Projetos",
    subtitle: "Explore os projetos que desenvolvi ao longo da minha jornada acadêmica e de estudos.",
    repoButton: "Ver Repositório",
    scrollToNext: "Ir para Contato",
    categories: {
      all: 'Todos',
      fullstack: 'Full-Stack',
      mobile: 'Mobile'
    }
  },
  en: {
    title: "My Projects",
    subtitle: "Explore the projects I've developed throughout my academic and learning journey.",
    repoButton: "View Repository",
    scrollToNext: "Go to Contact",
    categories: {
      all: 'All',
      fullstack: 'Full-Stack',
      mobile: 'Mobile'
    }
  }
};

export default function ProjectsSection({ language }: ProjectsSectionProps) {
  const content = sectionContent[language];
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filteredProjects = activeCategory === 'all' 
    ? projectsData[language] 
    : projectsData[language].filter(p => p.category === activeCategory);

  const categories: ProjectCategory[] = ['all', 'fullstack', 'mobile'];

  return (
    <section id="projects" className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline text-primary mb-4">{content.title}</h2>
          <p className="text-base sm:text-lg font-body text-muted-foreground">{content.subtitle}</p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "font-headline transition-colors",
                activeCategory === category
                  ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                  : "border-primary/30 text-primary hover:bg-primary/10 hover:text-accent"
              )}
            >
              {content.categories[category]}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/80">
              <div className="relative w-full aspect-video">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  data-ai-hint={project.imageHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-xl text-accent">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="font-body text-foreground/90 text-sm leading-relaxed mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-body text-xs py-1 px-2 bg-primary/20 text-primary-foreground hover:bg-primary/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                {project.repoUrl && (
                  <Button variant="outline" asChild className="w-full border-primary/30 hover:bg-primary/10 text-primary hover:text-accent group text-sm">
                    <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Link2 className="mr-2 h-4 w-4 text-icon group-hover:text-accent transition-colors" />
                      {content.repoButton}
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <AnimatedArrow href="#contact" ariaLabel={content.scrollToNext} />
    </section>
  );
}
