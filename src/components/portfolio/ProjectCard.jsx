import React from "react";
import { IconContext } from "react-icons";
import { BiPlus } from "react-icons/bi";
import {
    ProjectCard,
    ProjectDetails,
    ProjectImage,
    ProjectTransitionImage,
    ProjectTitle,
    ProjectStack,       
  } from './portfolio.styles';

  const ProjectCardComponent = ({
    image,
    transitionImage,
    title,
    techStack,   
    onOpenModal 
  }) => 
  {
    return (
    <IconContext.Provider value={{ size: "1.2rem" }}>
      <ProjectCard>
        
        {/* Botón "+" para abrir el modal */}
        <button 
          onClick={onOpenModal} 
          style={{ 
            position: 'absolute', 
            top: '15px', 
            right: '15px', 
            background: 'rgba(229, 9, 20, 0.8)', 
            border: 'none', 
            color: 'white', 
            borderRadius: '50%', 
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.5rem',
            cursor: 'pointer', 
            zIndex: 10,
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 10px rgba(0,0,0,0.5)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <BiPlus />
        </button>

        <ProjectImage src={image} alt={`Vista previa del proyecto ${title}`} loading="lazy" />
        <ProjectTransitionImage src={transitionImage} alt={`Animación del proyecto ${title}`} loading="lazy" />
        
        {/* Tarjeta limpia en el Hover */}
        <ProjectDetails>
          <ProjectTitle>{title}</ProjectTitle>

         {/* Solo dejamos el título y el stack técnico brillando */}
          {techStack && (
            <ProjectStack>
              {/* mapeamos tech y renderizamos tech.icon. Añadimos el atributo "title" */}
              {techStack.map((tech, index) => (
                <span key={index} title={tech.name}>{tech.icon}</span>
              ))}
            </ProjectStack>
          )}
          
        </ProjectDetails>
      </ProjectCard>
    </IconContext.Provider>
  );
};

export default ProjectCardComponent;