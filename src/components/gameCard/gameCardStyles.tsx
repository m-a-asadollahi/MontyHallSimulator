import styled from "styled-components";
import { StyledCardType } from "./types";

export const GameCardContainer = styled.div`
  position: relative;
  margin: 0.5rem;
`;

export const GameCardStyled = styled.div<StyledCardType>`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  border-radius: 20px 20px 20px 20px;
  height: fit-content;
  box-shadow: 0px 2px 10px 2px #1d1d1d;
  background-image: linear-gradient(
    ${(props) => (props.gameResult === "Win" ? "#d8e68b" : "#f79bb0")},
    #fff,
    #fff,
    #fff
  );
  z-index: 999;
`;

export const Doors = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0.3rem 0;
`;

export const GameResult = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
`;

export const GameInfos = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  width: 100%;
  background-color: #e0e0e0;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 0px -1px 5px 2px #8f8f8f;
`;

export const GameInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0.5rem;
  border-left: 1px solid #c0bebe;
  width: 100%;

  &:first-child {
    border-left: none;
  }
`;

export const GameResultText = styled.div<StyledCardType>`
  position: absolute;
  padding: 1px 0;
  left: -1px;
  top: -25px;
  height: 40px;
  width: 50%;
  line-height: 20px;
  letter-spacing: 3px;
  vertical-align: text-top;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 10px 10px 0 0;
  border: 1px solid grey;
  z-index: 0;
  background-color: ${(props) =>
    props.gameResult === "Win" ? "#cee069" : "#e92f66"};
  color: ${(props) => (props.gameResult === "Win" ? "#3a3a3a" : "#fff")}; ;
`;

export const GameInfoValue = styled.div`
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: #645caa;
`;

export const GameInfoLabel = styled.div`
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
  font-weight: 500;
  color: #2a292c;
  white-space: nowrap;
`;

export const GameIndex = styled.div`
  box-sizing: border-box;
  position: absolute;
  bottom: -24px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: #949393;
  color: #fff;
  border-radius: 0 0 15px 15px;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 2px;
  padding-bottom: 0.3rem;
  border: 1px solid darkgray;
`;
