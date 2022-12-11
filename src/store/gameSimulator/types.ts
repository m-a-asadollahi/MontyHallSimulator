import { ISimulationInfo } from "../../models/gameSimulator";

//* The simulator state interface.
export interface ISimulatorState {
  loading: boolean;
  showChart: boolean;
  showDetails: boolean;
  simulations: ISimulationInfo[];
  numberOfWins: number;
  numberOfFailures: number;
}

export interface SimulatorResultCounts {
  name: string;
  value: number;
}
