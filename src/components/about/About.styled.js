import styled from "styled-components";

export const AboutContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  gap: 5%; 
  margin-top: 2rem;
  max-width: 1200px; 
  margin-left: auto;
  margin-right: auto;
  width: 90%;

  @media all and (max-width: 64rem) {
    flex-direction: column; 
    gap: 2rem;
  }
`;

export const AboutImageContainer = styled.div`
  position: relative;
  width: 45%; 
  height: auto; 
  max-width: 450px; 
  z-index: 3;
  display: block; 

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
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0 0 0 0;
    background: rgb(13, 14, 14, 0.15); /* Ligeramente más suave */
    z-index: 2;
    border-radius: 30px;
  }

    @media all and (max-width: 64rem) {
    width: 100%; /* Ocupa todo el ancho en móvil */
    max-width: 350px; /* Limitamos el tamaño en móvil */
    
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
  border-radius: 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
`;

export const AboutDetailsContainer = styled.div`
  position: relative;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-start; 

  @media all and (max-width: 64rem) {
    width: 100%;
    align-items: center; 
  }
`;

export const Resume = styled.div`
  display: inline-block;
  margin-top: 3rem;
  position: relative;
  transition: 0.3s ease;

  &::after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    bottom: -0.5rem;
    border-radius: 5px;
    height: 1px;
    background-color: #fff;
    width: 100%;
    transition: transform 0.3s ease;
    transform: scaleX(0);
    transform-origin: bottom right;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  @media all and (max-width: 64rem) {
    margin-top: 1rem;
  }
`;

export const ResumeLink = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 12px 32px;
  background-color: #e50914;
  color: #ffffff;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  border-radius: 30px; 
  box-shadow: 0 4px 15px rgba(229, 9, 20, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background-color: #b80710;
    color: #ffffff;
    transform: translateY(-3px); 
    box-shadow: 0 6px 20px rgba(229, 9, 20, 0.5);
  }

  @media all and (max-width: 64rem) {
    font-size: 1rem;
    padding: 10px 25px;
    margin-top: 2rem;
  }
`;

