import styled from "styled-components";

export const InputFormStyled = styled.form`
  box-sizing: border-box;
  border: 1px solid #ced4da;
  padding: 0.2rem 0.7rem;
  border-radius: 10px;
  box-shadow: 0px 1px 10px 1px #4d4c7d;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  background-color: #e0e0e0;
  font-size: 0.8rem;
  width: 100%;

  @media screen and (max-width: 660px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Label = styled.label`
  display: block;
  width: 100%;
  white-space: nowrap;
  color: #645caa;
  font-weight: bold;
  margin: 0.2rem 0;
`;

export const Input = styled.input`
  display: block;
  padding: 0.375rem 0.75rem;
  color: #4d4c7d;
  font-weight: bold;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    outline: none;
    border-color: #4d4c7da7;
    box-shadow: 0px 0px 3px 2px #4d4c7d63;
  }
`;

export const Select = styled.select`
  padding: 0.375rem 0.75rem;
  display: block;
  width: 100%;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    outline: none;
    border: 1px solid #4d4c7da7;
    box-shadow: 0px 0px 3px 2px #4d4c7d63;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`;

export const Option = styled.option`
  padding: 1rem;
  margin: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  margin: 0.5rem 1rem;
`;

export const Button = styled.button`
  min-height: 60px;
  border: 1px solid #645caa;
  background-color: #645caa;
  color: #fff;
  border-radius: 7px;
  min-width: 100px;
  padding: 0 0.5rem;
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  &:hover {
    border: none;
    color: #645caa;
    font-weight: bold;
    background-color: #fdca40;
    box-shadow: 0px 0px 6px 1px #645caa;
  }
  @media screen and (max-width: 660px) {
    width: 100%;
    min-height: 30px;
    margin-bottom: 0.5rem;
  }
`;
