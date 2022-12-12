import React, { useState, useRef } from "react";
import { useAppDispatch } from "../../store/storeHook";
import {
  setLoading,
  setSimulations,
  setShowChart,
  setShowDetails,
} from "../../store/gameSimulator/simulatorSlice";
import { ValidationText, InputFormStyled } from "./inputFormStyles";
import MontyHallSimulator from "../../services/gameSimulator";
import {
  Input,
  Select,
  Option,
  Label,
  FormGroup,
  Button,
} from "./inputFormStyles";
import { setCurrentPage } from "../../store/dataPagination/paginationSlice";

const InputForm = () => {
  const dispatch = useAppDispatch();

  const [numberOfSimulations, setNumberOfSimulations] = useState("1");
  const [changeTheChoise, setChangeTheChoise] = useState(false);
  const [validation, setValidation] = useState({ error: false, message: "" });
  const inputText = useRef<HTMLInputElement>(null);

  //* Get form data and call API
  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateInput(numberOfSimulations)) {
      try {
        dispatch(setShowChart(false));
        dispatch(setShowDetails(false));
        dispatch(setLoading(true));

        const simulationList = await MontyHallSimulator.simulate(
          parseInt(numberOfSimulations),
          changeTheChoise
        );
        if (simulationList.length !== 0) {
          dispatch(setSimulations(simulationList));
          dispatch(setLoading(false));
          dispatch(setCurrentPage(1));
          dispatch(setShowChart(true));
        } else {
          dispatch(setLoading(false));
        }
      } catch (error) {
        dispatch(setLoading(false));
      }
    }
  };

  //* Validate input value
  const validateInput = (value: string) => {
    const simulationsCount = value === "" ? 0 : value;
    if (simulationsCount > 100000 || simulationsCount < 1) {
      inputText.current?.focus();
      setValidation({
        error: true,
        message:
          simulationsCount > 100000
            ? "Value must be less than 100000."
            : "Value must be grather than zero",
      });
      return false;
    } else {
      setValidation({ error: false, message: "" });
      return true;
    }
  };

  //* Handle input value
  const handleChangeValue = (value: string) => {
    setValidation({ error: false, message: "" });
    setNumberOfSimulations(value);
    validateInput(value);
  };

  return (
    <InputFormStyled onSubmit={submitForm}>
      <FormGroup>
        <Label htmlFor="numberOfSimulations">Number of simulations: </Label>
        <Input
          ref={inputText}
          type="number"
          name="numberOfSimulations"
          id="numberOfSimulations"
          placeholder="Please enter a number"
          value={numberOfSimulations}
          onChange={(e) => handleChangeValue(e.target.value)}
        />
        {validation.error && (
          <ValidationText>{validation.message}</ValidationText>
        )}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="changeDoor">Change door: </Label>
        <Select
          id="changeDoor"
          name="changeDoor"
          value={changeTheChoise ? "yes" : "no"}
          onChange={(e) =>
            setChangeTheChoise(e.target.value === "yes" ? true : false)
          }
        >
          <Option value="yes">Yes</Option>
          <Option value="no">No</Option>
        </Select>
      </FormGroup>

      <Button>Play</Button>
    </InputFormStyled>
  );
};

export default InputForm;
