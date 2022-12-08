import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/storeHook";
import {
  setLoading,
  setSimulations,
  setShowChart,
  setShowDetails,
} from "../../store/gameSimulator/simulatorSlice";
import { InputFormStyled } from "./inputFormStyles";
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

  const [numberOfSimulations, setNumberOfSimulations] = useState(0);
  const [changeTheChoise, setChangeTheChoise] = useState(false);

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(setShowChart(false));
    dispatch(setShowDetails(false));
    dispatch(setLoading(true));

    const simulationList = await MontyHallSimulator.simulateGame(
      numberOfSimulations,
      changeTheChoise
    );
    dispatch(setSimulations(simulationList));
    dispatch(setLoading(false));
    dispatch(setCurrentPage(1));
    dispatch(setShowChart(true));
  };

  return (
    <InputFormStyled onSubmit={submitForm}>
      <FormGroup>
        <Label htmlFor="numberOfSimulations">Number of simulations: </Label>
        <Input
          type="number"
          name="numberOfSimulations"
          id="numberOfSimulations"
          placeholder="0"
          value={numberOfSimulations}
          onChange={(e) => setNumberOfSimulations(parseInt(e.target.value))}
        />
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
