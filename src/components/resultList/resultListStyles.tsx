import styled from "styled-components";

export const ResultListStyled = styled.section`
  overflow-y: auto;
  overflow-x: hidden;
  display: grid;

  gap: 40px 10px;
  width: 100vw;
  padding: 1.5rem 0.5rem 1.5rem 0.5rem;
  justify-content: center;

  @media screen and (max-width: 600px) {
    grid-template-columns: auto;
  }

  @media screen and (min-width: 600px) {
    grid-template-columns: auto auto;
  }
  @media screen and (min-width: 920px) {
    grid-template-columns: auto auto auto auto;
  }
`;
