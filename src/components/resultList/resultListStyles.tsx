import styled from "styled-components";

export const ResultListStyled = styled.section`
  overflow-y: auto;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 40px 10px;
  width: 100vw;
  padding: 1.5rem 0.5rem 1.5rem 0.5rem;
  justify-content: center;

  @media screen and (max-width: 860px) {
    grid-template-columns: auto;
  }
`;
