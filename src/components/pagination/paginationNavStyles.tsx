import styled from "styled-components";
import { EButtonDirection, PaginationButtonTypes } from "./types";

export const PaginationContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  margin: 0.5rem;
  background-color: transparent;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaginationPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 120px;
  background: #645caa;
  border-radius: 15px;
  z-index: 20;
  margin: 0;
  box-shadow: 0px 0px 10px 2px #302c55;
`;

export const Number = styled.span`
  position: relative;
  display: inline-block;
  z-index: 1;
  transform: translateY(-2px);
  color: #e0e0e0;
  font-weight: bold;

  &:first-of-type {
    font-size: 2rem;
  }

  &:first-of-type::after {
    content: "/";
    display: inline-block;
    padding: 0 0.2rem;
    font-size: 2rem;
  }
  &:last-of-type {
    font-size: 1rem;
    margin-left: 2px;
    transform: translateY(-0.8rem) translateX(-0.1rem);
  }
`;

export const PaginationButton = styled.button<PaginationButtonTypes>`
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  background: transparent;
  border: 0;
  outline: 0;
  margin: 0 1rem;
  color: ${(props) => props.color};
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.15s ease;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 50%;
    height: ${(props) => props.thickness};
    border-radius: 3;
    background: ${(props) => props.color};
    transition: all 0.15s ease;
    transform: rotate(${(props) => props.angle}deg);
    transform-origin: ${(props) =>
      props.direction === EButtonDirection.LEFT ? "0% 50%" : "100% 50%"};
    ${(props) =>
      props.direction === EButtonDirection.LEFT ? "left:0" : "right:0"}
  }
  &::before {
    content: "";
    position: absolute;
    width: 50%;
    height: ${(props) => props.thickness};
    border-radius: 3;
    background: ${(props) => props.color};
    transition: all 0.15s ease;
    transform-origin: ${(props) =>
      props.direction === EButtonDirection.LEFT ? "0% 50%" : "100% 50%"};
    transform: rotate(-${(props) => props.angle}deg);
    ${(props) =>
      props.direction === EButtonDirection.LEFT ? "left:0" : "right:0"}
  }

  &:hover::after {
    transform: rotate(${(props) => props.hoverAngle}deg);
    background: #b3870f;
  }
  &:hover::before {
    transform: rotate(-${(props) => props.hoverAngle}deg);
    background: #b3870f;
  }
  &.disable {
    opacity: 0.3;
    cursor: default;
  }

  &.disable::after {
    transform: rotate(0deg);
  }
  &.disable::before {
    transform: rotate(0deg);
  }
`;
