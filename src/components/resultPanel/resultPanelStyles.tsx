import styled from "styled-components";

export const ResultPanelStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: #645caa;
  align-items: flex-end;
  top: -10px;
  z-index: 0;
  height: 40px;
  padding-bottom: 10px;
  border-radius: 0 0 10px 10px;
  width: 100%;
`;

export const ResultText = styled.h4`
  color: #fff;
  font-size: 0.8rem;
  margin: 0;
  font-weight: normal;
`;

export const ResultButton = styled.button`
  height: 20px;
  border: 1px solid #e0e0e0;
  background-color: #e0e0e0;
  color: #645caa;
  border-radius: 7px;
  min-width: 100px;
  padding: 0 0.5rem;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  font-weight: bold;

  &:hover {
    border: none;
    color: #645caa;
    background-color: #fdca40;
    box-shadow: 0px 0px 6px 1px #645caa;
  }
`;
