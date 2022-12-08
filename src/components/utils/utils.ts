import _ from "lodash";
import { IGameInfo, TGameResult } from "../../models/gameSimulator";

export const counter = (list: IGameInfo[], key: TGameResult) => {
  return list.filter((info) => info.gameResult === key).length;
};

export const paginate = (
  items: any[],
  pageNumber: number,
  pageSize: number
) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
};

export const getSimulationIndexOnPage = (
  index: number,
  pageNumber: number,
  pageSize: number
) => {
  return index + 1 + (pageNumber - 1) * pageSize;
};
