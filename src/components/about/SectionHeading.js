import styled from "styled-components";

export const SectionHeading = styled.div`
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem; 
`;

export const SectionTitle = styled.h2`
  margin-bottom: 0;
  position: relative;
  font-size: 3rem;
  font-weight: 800;
  text-transform: capitalize;
  z-index: 1;
  color: ${(props) => (props.dark ? "#f2f2f2" : "#262637")};
  display: inline-block;
  text-shadow: 0px 4px 15px rgba(229, 9, 20, 0.4);

  &::after {
    position: absolute;
    content: "${(props) => props.number || '01'}"; 
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: ${(props) =>
      props.dark ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.04)"};
    z-index: -1;
    font-size: 7rem;
    font-weight: 900;
  }
`;