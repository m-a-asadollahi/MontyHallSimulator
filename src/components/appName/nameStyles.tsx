import styled from "styled-components";
import { StyledNameType } from "./types";

export const TextStyled = styled.h5<StyledNameType>`
  white-space: nowrap;
  color: ${(props) => props.textColor};
  font-size: 2.5rem;
  font-weight: 800;
  text-shadow: 0 6px 9px ${(props) => props.textColor},
    0px -2px 1px ${(props) => props.textShadowColor};
  margin: 0.2rem 0 1rem;
  letter-spacing: 2px;

  @media screen and (max-width: 860px) {
    font-size: 1.7rem;
  }
`;
