import React from 'react';

import { SectionHeading, SectionTitle } from '../about/SectionHeading';

import { 
  StyledProjects, 
  StyledParagraph, 
  StyledLink, 
  ProjectsContainer 
} from './portfolio.styles';
import { projectData } from './portfolioData.js';
import ProjectCardComponent from './projectCard.jsx';

export const Portfolio = () => {
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
          <ProjectCardComponent key={project.id} {...project} />
        ))}
      </ProjectsContainer>
    </StyledProjects>
  );
};

