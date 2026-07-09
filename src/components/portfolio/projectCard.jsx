import React from "react";
import {BiLinkExternal } from 'react-icons/bi';
import { SiGithub } from "react-icons/si";
import { IconContext } from "react-icons";
import {
    LinkName,
    ProjectCard,
    ProjectDetails,
    ProjectImage,
    ProjectTransitionImage,
    ProjectTitle,
    ProjectLinksContainer,
    ProjectLink,
  } from './portfolio.styles';


  const ProjectCardComponent = ({
    image,
    transitionImage,
    title,
    codeLink,
    liveLink,
  }) => 
  {
    return (
    <IconContext.Provider value={{ size: "1.2rem" }}>
      <ProjectCard>
        <ProjectImage src={image} alt={`Vista previa del proyecto ${title}`} loading="lazy" />
        <ProjectTransitionImage src={transitionImage} alt={`Animación del proyecto ${title}`} loading="lazy" />
        
        <ProjectDetails>
          <ProjectTitle>{title}</ProjectTitle>
          
          <ProjectLinksContainer>
            {/* Renderizado condicional en caso de que algún proyecto no tenga link de Github */}
            {codeLink && (
              <ProjectLink
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub /> 
                <LinkName>GitHub</LinkName>
              </ProjectLink>
            )}
            
            {/* Renderizado condicional en caso de que algún proyecto no esté deployado */}
            {liveLink && (
              <ProjectLink
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
            <BiLinkExternal />
            <LinkName>
              Sitio Web
            </LinkName>
          </ProjectLink>
          )}
          </ProjectLinksContainer>

        </ProjectDetails>
      </ProjectCard>
    </IconContext.Provider>
  );
};

  export default ProjectCardComponent;