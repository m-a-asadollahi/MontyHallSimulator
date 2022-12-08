import styled from "styled-components";
import { ChartInfoType } from "./types";

export const SimulationChartStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.3rem;
`;

export const ChartInfoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ChartInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.4rem;
`;

export const ChartInfoLabel = styled.div<ChartInfoType>`
  color: ${(props) => props.color};
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 2px;
`;

export const ChartInfoSymbol = styled.div<ChartInfoType>`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  box-shadow: 0px 0px 5px 1px #5e5d5d;
  margin-right: 0.3rem;
`;
