import React from "react";
import { 
  SectionHeading, 
  SectionTitle,  
} from './SectionHeading';
import { 
  AboutSection,
  AboutContent, 
  AboutDetailsContainer,  
  ResumeLink,
  AboutImageContainer, 
  AboutImage,
  TechContainer,
  TechTitle,
  TechGrid,
  TechCard,
  TechIcon,
  TechName 
} from './About.styled';
import {
  StyledParagraph
} from './Typography.styled';

import profileImg from '../../assets/img/profilee.jpg';
import resume from '../../assets/img/CV_MartinMorondo.pdf';

import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiPython 
} from "react-icons/si";

// Lista de tecnologías con sus colores oficiales
const mySkills = [
  { name: 'HTML5', icon: <SiHtml5 color="#E34F26" /> },
  { name: 'CSS3', icon: <SiCss3 color="#1572B6" /> },
  { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
  { name: 'React', icon: <SiReact color="#61DAFB" /> },
  { name: 'Node.js', icon: <SiNodedotjs color="#339933" /> },
  { name: 'Express', icon: <SiExpress color="#FFFFFF" /> },
  { name: 'Python', icon: <SiPython color="#3776AB" /> },
];

export const About = () => {
  return (
    <AboutSection id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="01"> 
          Sobre mí
        </SectionTitle>
      </SectionHeading>

      <AboutContent>
        {/* LADO IZQUIERDO: Contenedor de la Imagen */}
        <AboutImageContainer>
          <AboutImage src={profileImg} alt="Martín Morondo - Desarrollador Frontend" />
        </AboutImageContainer>

        {/* LADO DERECHO: Contenedor del Texto */}
        <AboutDetailsContainer>
          <StyledParagraph>
            ¡Hola! Soy Martín, desarrollador enfocado en el ecosistema Front-End y estudiante de tercer año de Ingeniería de Sistemas. Me apasiona construir interfaces limpias, intuitivas y optimizadas, trabajando principalmente con React, JavaScript, HTML y CSS. Además, cuento con bases sólidas en el lado del servidor utilizando Node.js, Express y Python, lo que me permite comprender la arquitectura completa de una aplicación.
          </StyledParagraph>
          <StyledParagraph>
            Me atrae resolver problemas complejos y diseñar soluciones escalables, desde el desarrollo de plataformas SaaS para gestión industrial hasta la conceptualización de interfaces centradas en el usuario. Mi enfoque siempre está en escribir código limpio y mantenible que aporte valor real al producto final.
          </StyledParagraph>
          
          <ResumeLink href={resume} download="CV_Martin_Morondo.pdf">
            Descargar CV
          </ResumeLink>
        </AboutDetailsContainer>
      </AboutContent>

      {/* Stack Tecnológico Dinámico */}
      <TechContainer>
        <TechTitle>Mi Stack Tecnológico</TechTitle>
        <TechGrid>
          {mySkills.map((tech, index) => (
            <TechCard key={index}>
              <TechIcon>{tech.icon}</TechIcon>
              <TechName>{tech.name}</TechName>
            </TechCard>
          ))}
        </TechGrid>
      </TechContainer>
    </AboutSection>
  );
};

      