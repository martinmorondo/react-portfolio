import React from 'react';
import { useState } from "react";
import { ProjectModal } from "./ProjectModal";

import { SectionHeading, SectionTitle } from '../about/SectionHeading';

import { 
  StyledProjects, 
  StyledParagraph, 
  StyledLink, 
  ProjectsContainer 
} from './portfolio.styles';
import { projectData } from './portfolioData.jsx';
import ProjectCardComponent from './projectCard.jsx';

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
    return (
    <StyledProjects id="projects">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle number="02" dark="true">
          Proyectos
        </SectionTitle>
      </SectionHeading>
      
      <StyledParagraph dark='true' textAlign='center'>
        Proyectos recientes | {' '}
        <StyledLink
          href='https://github.com/martinmorondo'
          target='_blank'
          rel='noopener noreferrer'
        >
          Ver más en GitHub
        </StyledLink>
      </StyledParagraph>
      
      <ProjectsContainer>
        {projectData.map((project) => (
          <ProjectCardComponent 
             key={project.id} 
             {...project} 
             onOpenModal={() => setSelectedProject(project)} // Pasamos la función
          />
        ))}
      </ProjectsContainer>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </StyledProjects>
  );
};

