import { useAppSelector } from "../../store/storeHook";
import Chart from "./chart";
import {
  ChartInfo,
  ChartInfoContainer,
  ChartInfoLabel,
  ChartInfoSymbol,
  SimulationChartStyled,
} from "./simulationChartStyles";

const SimulationChart = () => {
  const simulator = useAppSelector((state) => state.simulator);
  return (
    <SimulationChartStyled>
      <Chart
        data={[
          { name: "Wins", value: simulator.numberOfWins },
          { name: "Failures", value: simulator.numberOfFailures },
        ]}
      />
      <ChartInfoContainer>
        <ChartInfo>
          <ChartInfoSymbol color="#367E18" />
          <ChartInfoLabel color="#000">Win</ChartInfoLabel>
        </ChartInfo>
        <ChartInfo>
          <ChartInfoSymbol color="#E0144C" />
          <ChartInfoLabel color="#000">Failure</ChartInfoLabel>
        </ChartInfo>
      </ChartInfoContainer>
    </SimulationChartStyled>
  );
};

export default SimulationChart;
