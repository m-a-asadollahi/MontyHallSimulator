import styled from "styled-components";

export const DoorStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.2rem 0.5rem;
`;

export const DoorImg = styled.img`
  max-width: 70px;
  height: auto;
  z-index: 5;
`;

export const DoorLabel = styled.p`
  display: inline;
  position: relative;
  font-size: 0.8rem;
  background-color: #645caa;
  color: #fff;
  margin: 0;
  top: -7px;
  width: 80%;
  text-align: center;
  z-index: 0;
  padding: 0.2rem 0;
`;
