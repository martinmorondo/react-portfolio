import React from "react";
import {BiLinkExternal } from 'react-icons/bi';
import { SiGithub } from "react-icons/si";
import { IconContext } from "react-icons";
import {
    LinkName,
    ProjectCard,
    ProjectCodeLink,
    ProjectDetails,
    ProjectImage,
    ProjectLiveLink,
    ProjectTitle,
    ProjectTransitionImage,
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
    <IconContext.Provider value={{ size: "1rem" }}>
      <ProjectCard>
        <ProjectImage src={image} alt={`Vista previa del proyecto ${title}`} />
        <ProjectTransitionImage src={transitionImage} alt={`Animación del proyecto ${title}`} />
        
        <ProjectDetails>
          <ProjectTitle>{title}</ProjectTitle>
          
          <ProjectCodeLink
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub /> 
            <LinkName>
              GitHub
            </LinkName>
          </ProjectCodeLink>
          
          <ProjectLiveLink
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLinkExternal />
            <LinkName>
              Sitio Web
            </LinkName>
          </ProjectLiveLink>
        </ProjectDetails>
      </ProjectCard>
    </IconContext.Provider>
  );
};

  export default ProjectCardComponent;