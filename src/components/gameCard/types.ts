import {
  ISimulationInfo,
  TSimulationResult,
} from "./../../models/gameSimulator";
export interface gameCardTypes {
  data: ISimulationInfo;
  index: number;
}

export interface StyledCardType {
  gameResult: string;
}
