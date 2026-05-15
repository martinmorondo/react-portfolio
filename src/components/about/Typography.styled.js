import styled from "styled-components";

export const StyledParagraph = styled.p`
  color: #d1d5db;
  margin-bottom: 2rem; /* Más espacio entre párrafos */
  font-size: ${(props) => props.fontSize || "1.125rem"};
  letter-spacing: ${(props) => props.spacing || "normal"};
  text-align: ${(props) => props.textAlign || "center"}; /* Texto centrado para equilibrar */
  line-height: 1.7; /* Interlineado moderno y limpio */
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; /* Forzamos una fuente legible */
`;

export const StyledLink = styled.a`
  color: #4353ff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #2c38d9; 
  }

  @media all and (max-width: 58.125rem) {
    display: block;
  }
`;