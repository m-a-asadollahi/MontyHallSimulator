import {
  setShowChart,
  setShowDetails,
} from "../../store/gameSimulator/simulatorSlice";
import { useAppDispatch, useAppSelector } from "../../store/storeHook";
import {
  ResultButton,
  ResultPanelStyled,
  ResultText,
} from "./resultPanelStyles";

const ResultPanel = () => {
  const simulator = useAppSelector((state) => state.simulator);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setShowChart(!simulator.showChart));
    dispatch(setShowDetails(!simulator.showDetails));
  };
  return (
    <ResultPanelStyled>
      <ResultText>{`wins : ${simulator.numberOfWins}`}</ResultText>
      <ResultText>{`Failures : ${simulator.numberOfFailures}`}</ResultText>
      <ResultButton id="actionBtn" onClick={handleClick}>
        {`${simulator.showDetails ? "Chart" : "Details"}`}
      </ResultButton>
    </ResultPanelStyled>
  );
};

export default ResultPanel;
