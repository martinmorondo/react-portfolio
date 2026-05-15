import styled from "styled-components";

export const AboutSection = styled.section`
  padding-top: 130px; /* Espacio para que respire por debajo del header fijo */
  padding-bottom: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%; 
  margin-top: 2rem;
  max-width: 1200px; 
  width: 90%;

  @media all and (max-width: 64rem) {
    flex-direction: column; 
    gap: 2rem;
  }
`;

export const AboutImageContainer = styled.div`
  position: relative;
  width: 40%; 
  height: auto; 
  max-width: 400px; 
  z-index: 3; 

  &::after {
    content: "";
    position: absolute;
    top: -1rem;
    left: -1rem;
    background: #F5FFFA;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    z-index: -2;
    transition: all 0.4s ease;
  }

  &:hover::after {
    top: -0.2rem;
    left: -0.2rem;
  }

    @media all and (max-width: 64rem) {
    width: 100%; /* Ocupa todo el ancho en móvil */
    max-width: 320px; /* Limitamos el tamaño en móvil */
    
    &::after {
      top: -0.5rem;
      left: -0.5rem;
    }
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
  position: relative;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);

  filter: grayscale(100%) contrast(1.1);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    filter: grayscale(0%) contrast(1);
    transform: translateY(-8px) scale(1.02); 
    box-shadow: 0 20px 40px rgba(229, 9, 20, 0.4); 
  }
`;

export const AboutDetailsContainer = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start; 

  @media all and (max-width: 64rem) {
    width: 100%;
    align-items: center; 
  }
`;

export const ResumeLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 12px 35px;
  background-color: #e50914;
  color: #ffffff !important;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 50px; 
  box-shadow: 0 4px 15px rgba(229, 9, 20, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background-color: #b80710;
    transform: translateY(-3px); 
    box-shadow: 0 8px 25px rgba(229, 9, 20, 0.5);
  }

  @media all and (max-width: 64rem) {
    font-size: 1rem;
    padding: 10px 25px;
    margin-top: 2rem;
  }
`
/* =========================================
   3. STACK TECNOLÓGICO
   ========================================= */
export const TechContainer = styled.div`
  margin-top: 7rem;
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TechTitle = styled.h3`
  font-size: 2rem;
  color: #fff;
  font-family: 'Marcellus', serif;
  margin-bottom: 3rem;
  text-shadow: 0 2px 10px rgba(0,0,0,0.5);
`;

export const TechGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
`;

/* Tarjetas interactivas de tecnologías */
export const TechCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.03); /* Fondo de cristal muy suave */
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Transición rebotante */
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.1);
    border-color: #e50914;
    box-shadow: 0 10px 20px rgba(229, 9, 20, 0.2);
  }

  /* Mostrar nombre en hover, ocultar icono */
  &:hover > span {
    opacity: 1;
    transform: translateY(0);
  }
  
  &:hover > div {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

export const TechIcon = styled.div`
  font-size: 3rem;
  transition: all 0.3s ease;
`;

export const TechName = styled.span`
  position: absolute;
  font-size: 0.9rem;
  font-weight: 700;
  color: #fff;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
  pointer-events: none;
  letter-spacing: 1px;
`;
;

