import { SiHtml5, SiCss3, SiJavascript, SiReact, SiFirebase, SiTailwindcss, SiBootstrap, SiPhp } from "react-icons/si";

import {
  projectProde, projectProdeTwo,
  projectSaich, projectSaichTwo,
  project2, projectTwo,
  project9, projectNine,
  project15, projectFifteen,
  project16, projectSixteen,
  project17, projectSeventeen,
} from './projectImages';

export const projectData = [
      {
        id: 18,
        image: projectProde,
        transitionImage: projectProdeTwo,
        title: "Prode Mundial 2026",
        description: "Plataforma de pronósticos deportivos con motor de gamificación y sincronización en tiempo real. Arquitectura optimizada con Custom Hooks, reglas de seguridad (Firestore) y autenticación delegada.",
        techStack: [
          { name: "React", icon: <SiReact /> }, 
          { name: "Tailwind", icon: <SiTailwindcss /> }, 
          { name: "Firebase", icon: <SiFirebase /> }
        ],
        codeLink: "https://github.com/martinmorondo/prode-mundial-2026",
        liveLink: "https://prode-mundial-2026-pi-umber.vercel.app/",
      },
      {
        id: 19,
        image: projectSaich,
        transitionImage: projectSaichTwo,
        title: "Saich Edition",
        description: "Plataforma web corporativa para agencia de soluciones digitales. Desarrollo integral enfocado en optimización SEO, animaciones interactivas fluidas y posicionamiento de identidad comercial.",
        techStack: [
          { name: "JavaScript", icon: <SiJavascript /> }, 
          { name: "Bootstrap", icon: <SiBootstrap /> }, 
          { name: "PHP", icon: <SiPhp /> }
        ],
        codeLink: "https://github.com/martinmorondo/saich-edition-arg", 
        liveLink: "https://saich-edition-arg.vercel.app/", 
      },
      {
        id: 16,
        image: project16,
        transitionImage: projectSixteen,
        title: "React Ecommerce",
        description: "Plataforma de comercio electrónico con catálogo de productos, filtros dinámicos por categoría y arquitectura de componentes escalable.",
        techStack: [
          { name: "React", icon: <SiReact /> }, 
          { name: "CSS3", icon: <SiCss3 /> }, 
          { name: "JavaScript", icon: <SiJavascript /> }
        ],
        codeLink: "https://github.com/martinmorondo/react-ecommerce",
        liveLink: "https://lively-dasik-84407c.netlify.app/",
      },
      {
        id: 17,
        image: project17,
        transitionImage: projectSeventeen,
        title: "React Chatbot",
        description: "Interfaz conversacional (Chatbot) desarrollada para ofrecer respuestas interactivas. Demuestra integración de flujos de conversación y manejo de estado complejo en UI.",
        techStack: [
          { name: "React", icon: <SiReact /> }, 
          { name: "CSS3", icon: <SiCss3 /> }, 
          { name: "JavaScript", icon: <SiJavascript /> }
        ],
        codeLink: "https://github.com/martinmorondo/portfolio-chatbot",
        liveLink: "https://bucolic-praline-a0d151.netlify.app/",
      },
      {
        id: 9,
        image: project9,
        transitionImage: projectNine,
        title: "React Gym",
        description: "Landing page interactiva para centro de entrenamiento enfocada en la conversión y UI/UX. Completamente responsiva y optimizada para alto rendimiento.",
        techStack: [
          { name: "React", icon: <SiReact /> }, 
          { name: "CSS3", icon: <SiCss3 /> }, 
          { name: "JavaScript", icon: <SiJavascript /> }
        ],
        codeLink: "https://github.com/martinmorondo/react-gym",
        liveLink: "https://helpful-halva-c2f9db.netlify.app/",
      },
      {
        id: 15,
        image: project15,
        transitionImage: projectFifteen,
        title: "React Shopping",
        description: "Aplicación de carrito de compras con gestión de estado dinámica. Permite al usuario interactuar con productos, modificar cantidades y calcular totales en tiempo real.",
        techStack: [
          { name: "React", icon: <SiReact /> }, 
          { name: "CSS3", icon: <SiCss3 /> }, 
          { name: "JavaScript", icon: <SiJavascript /> }
        ],
        codeLink: "https://github.com/martinmorondo/react-shopping-cart",
        liveLink: "https://fastidious-cendol-ad104b.netlify.app/",
      },
      {
        id: 2,
        image: project2,
        transitionImage: projectTwo,
        title: "Own Webpage",
        description: "Directorio de recursos gratuitos para programadores que centraliza cursos, libros y documentaciones útiles. Diseño enfocado en la accesibilidad de la información.",
        techStack: [
          { name: "React", icon: <SiReact /> }, 
          { name: "CSS3", icon: <SiCss3 /> }, 
          { name: "JavaScript", icon: <SiJavascript /> }
        ], 
        codeLink: "https://github.com/martinmorondo/My-website",
        liveLink: "https://recursosparaprogramadores.netlify.app/",
      },
];