import { ISimulationInfo } from "./../../models/gameSimulator";

//* Type of Game Card component's props
export interface gameCardTypes {
  data: ISimulationInfo;
  index: number;
}

//* Type of Game Card component's style
export interface StyledCardType {
  gameResult: string;
}
