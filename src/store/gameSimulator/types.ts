import { IGameInfo } from "../../models/gameSimulator";

export interface IGameSimulatorState {
  loading: boolean;
  showChart: boolean;
  showDetails: boolean;
  simulations: IGameInfo[];
  numberOfWins: number;
  numberOfFailures: number;
}

export interface SimulatorResultCounts {
  name: string;
  value: number;
}
