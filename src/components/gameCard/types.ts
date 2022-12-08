import { IGameInfo, TGameResult } from "./../../models/gameSimulator";
export interface gameCardTypes {
  data: IGameInfo;
  index: number;
}

export interface StyledCardType {
  gameResult: string;
}
