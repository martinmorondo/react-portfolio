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
  TechName,
  EducationContainer,
  EducationTitle,
  EducationGrid,
  EducationCard,
  EduIconWrapper,
  EduTitle,
  EduInstitution,
  EduStatus,
  ExperienceContainer,
  ExperienceTitle,
  ExperienceList,
  ExperienceCard,
  ExpHeader,
  ExpTitleGroup,
  ExpTitle,
  ExpCompany,
  ExpDate,
  ExpTasks
} from './About.styled';
import { StyledParagraph } from './Typography.styled';

import profileImg from '../../assets/img/profilee.jpg';
import resume from '../../assets/img/CV_MartinMorondo.pdf';

// Íconos para Tecnologías, Educación y Experiencia
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiPython 
} from "react-icons/si";
import { FaLaptopCode, FaGraduationCap, FaChartBar, FaBriefcase } from "react-icons/fa";

// Data del Stack
const mySkills = [
  { name: 'HTML5', icon: <SiHtml5 color="#E34F26" /> },
  { name: 'CSS3', icon: <SiCss3 color="#1572B6" /> },
  { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
  { name: 'React', icon: <SiReact color="#61DAFB" /> },
  { name: 'Node.js', icon: <SiNodedotjs color="#339933" /> },
  { name: 'Express', icon: <SiExpress color="#FFFFFF" /> },
  { name: 'Python', icon: <SiPython color="#3776AB" /> },
];

// Data de Educación
const educationData = [
  {
    title: "Tecnicatura Desarrollo de Software",
    institution: "IFTS N° 29",
    status: "Finalizado",
    icon: <FaLaptopCode />,
    highlight: true 
  },
  {
    title: "Tecnicatura Desarrollo Web",
    institution: "UNER",
    status: "Último cuatrimestre",
    icon: <FaGraduationCap />,
    highlight: false
  },
  {
    title: "Tecnicatura Ciencia de Datos",
    institution: "UNDEC (Chilecito)",
    status: "2do año (3er cuatrimestre)",
    icon: <FaChartBar />,
    highlight: false
  }
];

// Data de Experiencia Laboral 
const experienceData = [
  {
    title: "Desarrollador Front end",
    company: "Grupo Saich",
    date: "Marzo 2024 - Abril 2025",
    tasks: [
      "Desarrollo y mantenimiento de aplicaciones web escalables utilizando React.js y TypeScript, optimizando la arquitectura de componentes y el flujo de datos.",
      "Implementación de interfaces responsivas y accesibles, traduciendo requerimientos de diseño en soluciones interactivas de alta fidelidad.",
      "Gestión eficiente del código fuente y revisión de pares utilizando Git y GitHub, asegurando la calidad del software y el trabajo colaborativo."
    ]
  },
  {
    title: "Desarrollador Frontend Freelance",
    company: "Independiente",
    date: "Marzo 2022 - Febrero 2024",
    tasks: [
      "Diseño y desarrollo de sitios web responsivos para diversos clientes, utilizando tecnologías como HTML, CSS, JavaScript, Bootstrap y React.js.",
      "Personalización de soluciones web según las necesidades y requisitos específicos de los clientes, asegurando la satisfacción y el cumplimiento estricto de plazos.",
      "Optimización del rendimiento y velocidad de carga en sitios web, reduciendo los tiempos de respuesta e incrementando los puntajes en métricas de Core Web Vitals y Lighthouse."
    ]
  }
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
        {/* LADO IZQUIERDO */}
        <AboutImageContainer>
          <AboutImage src={profileImg} alt="Martín Morondo - Desarrollador Frontend" />
        </AboutImageContainer>

        {/* LADO DERECHO */}
        <AboutDetailsContainer>
          <StyledParagraph>
            ¡Hola! Soy Martín, desarrollador enfocado en el ecosistema Front-End con una sólida formación académica continua. Me apasiona construir interfaces limpias, intuitivas y optimizadas, trabajando principalmente con React, JavaScript, HTML y CSS. Además, cuento con bases sólidas en el lado del servidor utilizando Node.js, Express y Python.
          </StyledParagraph>
          <StyledParagraph>
            Me atrae resolver problemas complejos y diseñar soluciones escalables, desde el desarrollo de plataformas SaaS para gestión industrial hasta la conceptualización de interfaces centradas en el usuario. Mi enfoque siempre está en escribir código limpio y mantenible que aporte valor real al producto final.
          </StyledParagraph>
          
          <ResumeLink href={resume} download="CV_Martin_Morondo.pdf">
            Descargar CV
          </ResumeLink>
        </AboutDetailsContainer>
      </AboutContent>

      {/* Stack Tecnológico */}
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

      {/* SECCIÓN: Educación */}
      <EducationContainer>
        <EducationTitle>Formación Académica</EducationTitle>
        <EducationGrid>
          {educationData.map((edu, index) => (
            <EducationCard key={index} finished={edu.highlight}>
              <EduIconWrapper finished={edu.highlight}>
                {edu.icon}
              </EduIconWrapper>
              <EduTitle>{edu.title}</EduTitle>
              <EduInstitution>{edu.institution}</EduInstitution>
              <EduStatus finished={edu.highlight}>{edu.status}</EduStatus>
            </EducationCard>
          ))}
        </EducationGrid>
      </EducationContainer>

      {/* SECCIÓN: Experiencia Laboral */}
      <ExperienceContainer>
        <ExperienceTitle>Experiencia Laboral</ExperienceTitle>
        <ExperienceList>
          {experienceData.map((exp, index) => (
            <ExperienceCard key={index}>
              <ExpHeader>
                <ExpTitleGroup>
                  <FaBriefcase className="exp-icon" />
                  <div>
                    <ExpTitle>{exp.title}</ExpTitle>
                    <ExpCompany>{exp.company}</ExpCompany>
                  </div>
                </ExpTitleGroup>
                <ExpDate>{exp.date}</ExpDate>
              </ExpHeader>
              <ExpTasks>
                {exp.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ExpTasks>
            </ExperienceCard>
          ))}
        </ExperienceList>
      </ExperienceContainer>

    </AboutSection>
  );
};