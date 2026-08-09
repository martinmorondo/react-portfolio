import styled, { css } from "styled-components";

export const HoverStyle = css`
    content: '';
    position: absolute;
    bottom: -0.3rem;
    right: 0;
    left: 0;
    width: 0;
    height: 1px;
    background: #fff;
    transition: 0.3s ease-in-out;
`;

export const Flex = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StyledProjects = styled.section`
  background-color: #0c0c0c;;
  color: #111;
  padding: 4rem 0;
`;

export const StyledParagraph = styled.p`
  color: white;
  margin-bottom: 1rem;
  font-size: ${(props) => props.fontSize || "1.125rem"};
  letter-spacing: ${(props) => props.spacing};
  text-align: ${(props) => props.textAlign};
`;

export const StyledLink = styled.a`
  color: #ff3333;
  text-decoration: underline;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6666;
  }

  @media all and (max-width: 58.125rem) {
    display: block;
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
  padding: 0 1rem;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
`;

export const ProjectTransitionImage = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.4s ease;
`;

export const ProjectDetails = styled.div`
  position: absolute;
  inset: 0; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem; /* Redujimos el gap para que entre todo el contenido sin saturar */
  color: #fff;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.98) 100%
  );
  transform: translateY(100%);
  opacity: 0;
  pointer-events: none;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 5;
  padding: 1.5rem 1rem;
  text-align: center;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0;
  color: #fff;
`;

/* Estilo de la descripción */
export const ProjectDescription = styled.p`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.4;
  margin: 0;
  
  /* Truco de CSS para limitar el texto a 3 líneas y poner "..." si se pasa */
  display: -webkit-box;
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

/* Contenedor del Stack Tecnológico */
export const ProjectStack = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;
  margin: 0.2rem 0 0.5rem 0;
  font-size: 1.3rem; /* Tamaño de los iconos del stack */
  color: #e50914; /* Color rojo de tu marca */
`;

export const LinkName = styled.span``;

export const ProjectLinksContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem; /* Separamos un poquito los botones del stack */
`;

/* Unificamos ProjectCodeLink y ProjectLiveLink en un solo componente reutilizable */
export const ProjectLink = styled.a`
  color: #fff;
  font-size: 14px;
  ${Flex}
  position: relative;
  text-decoration: none;

  ${LinkName}::after {
    ${HoverStyle}
  }

  &:hover ${LinkName}::after {
    width: 100%;
  }
`;

export const ProjectCard = styled.article`
  background: #fff;
  width: 340px;            
  height: 220px;           
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    inset: 0 0 0 0;
    background: rgb(13, 14, 14, 0.1);
    z-index: 2;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 25px rgba(255, 0, 0, 0.15);
  }

  &:hover ${ProjectDetails} {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }

  &:hover ${ProjectTransitionImage} {
    opacity: 1;
  }

  @media all and (max-width: 64rem) {
    width: 25rem;
  }
  
  @media all and (max-width: 58.125rem) {
    width: 100%;
    max-width: 400px;
  }
`;


