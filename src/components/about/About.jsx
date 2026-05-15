import React from "react";
import { 
  SectionHeading, 
  SectionTitle,  
} from './SectionHeading';
import { 
  AboutContent, 
  AboutDetailsContainer,  
  ResumeLink,
  AboutImageContainer, 
  AboutImage 
} from './About.styled';
import {
  StyledParagraph
} from './Typography.styled';

import profileImg from '../../assets/img/profilee.jpg';
import resume from '../../assets/img/CV_MartinMorondo.pdf';

export const About = () => {
  return (
    <>
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="01"> {/* Agregado el número aquí */}
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

      {/* <TechnologiesHeader>
        Tecnologías y Herramientas
      </TechnologiesHeader> */}
    </>
  );
};

      