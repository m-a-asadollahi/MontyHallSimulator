import _ from "lodash";
import { ISimulationInfo, TSimulationResult } from "../../models/gameSimulator";

//* Returns the number of simulations base on given key.
//* This function returns the number of simulations that their result is win or failure.
export const counter = (list: ISimulationInfo[], key: TSimulationResult) => {
  return list.filter((info) => info.simulationResult === key).length;
};

//*   Returns an array of simulations.
//* This function takes all simulations and pagination info and returns a slice of simulations array.
export const paginate = (
  items: ISimulationInfo[],
  pageNumber: number,
  pageSize: number
) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
};

//* Returns the index of simulation base on current page number .
export const getSimulationIndexOnPage = (
  index: number,
  pageNumber: number,
  pageSize: number
) => {
  return index + 1 + (pageNumber - 1) * pageSize;
};
