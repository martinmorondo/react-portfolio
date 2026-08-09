import React from "react";
import styled from "styled-components";
import { BiLinkExternal, BiX } from "react-icons/bi";
import { SiGithub } from "react-icons/si";

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  background: #111;
  border: 1px solid #333;
  padding: 2.5rem 2rem;
  border-radius: 20px;
  max-width: 600px;
  width: 100%;
  position: relative;
  color: #fff;
  text-align: center;
  box-shadow: 0 10px 30px rgba(229, 9, 20, 0.2); /* Resplandor rojo oscuro */
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: #ccc;
  font-size: 2rem;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: #e50914; /* Se pone rojo al pasar el mouse */
  }
`;

/* ESTILO PARA LAS NUEVAS ETIQUETAS DE TECNOLOGÍA */
const TechBadge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.05);
  padding: 12px 20px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    border-color: #e50914;
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.1);
  }

  span {
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: #ddd;
  }
  
  .icon {
    font-size: 2rem;
    color: #e50914;
  }
`;

/* ESTILOS EN LÍNEA OPTIMIZADOS PARA LOS BOTONES */
const actionBtnStyle = {
  display: 'flex', 
  alignItems: 'center', 
  gap: '8px', 
  padding: '12px 25px', 
  color: '#fff', 
  textDecoration: 'none', 
  borderRadius: '50px', 
  fontWeight: 'bold', 
  transition: '0.3s',
  border: 'none'
};

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={onClose}><BiX /></CloseBtn>
        
        <h2 style={{ marginBottom: "10px", fontSize: "2rem", fontFamily: "'Marcellus', serif" }}>
          {project.title}
        </h2>
        
        <p style={{ margin: "20px 0 30px 0", color: "#ccc", lineHeight: "1.6", fontSize: "1rem" }}>
          {project.description}
        </p>
        
        {/* Renderizamos el Stack Tecnológico con Nombres */}
        <h4 style={{ marginBottom: "15px", color: "#fff", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "2px" }}>
          Tecnologías
        </h4>
        
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
          {project.techStack?.map((tech, i) => (
            <TechBadge key={i}>
              <div className="icon">{tech.icon}</div>
              <span>{tech.name}</span>
            </TechBadge>
          ))}
        </div>

        {/* Botones de Acción */}
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {project.codeLink && (
            <a 
              href={project.codeLink} 
              target="_blank" 
              rel="noreferrer" 
              style={{ ...actionBtnStyle, background: '#333' }} 
              onMouseEnter={(e) => e.currentTarget.style.background = '#444'} 
              onMouseLeave={(e) => e.currentTarget.style.background = '#333'}
            >
              <SiGithub style={{ fontSize: "1.2rem" }}/> Código
            </a>
          )}
          
          {project.liveLink && (
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noreferrer" 
              style={{ ...actionBtnStyle, background: '#e50914' }} 
              onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#b80710';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(229, 9, 20, 0.4)';
              }} 
              onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#e50914';
                  e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <BiLinkExternal style={{ fontSize: "1.3rem" }}/> Sitio Web
            </a>
          )}
        </div>
      </ModalContent>
    </ModalOverlay>
  );
};