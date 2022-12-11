import axios from "axios";
import { ISimulationInfo } from "../models/gameSimulator";
import config from "./config.json";

//* Simulator service.
//* Config service and coonect to server.
class MontyHallSimulatorService {
  http = axios.create({
    baseURL: config.apiUrl,
    headers: {
      "Content-Type": "application/json",
    },
  });

  //* Call API and get the result of simulations base on given data.
  async simulate(numberOfSimulations: number, changeTheChoice: boolean) {
    const response = await this.http.get<ISimulationInfo[]>(
      `/${numberOfSimulations}/${changeTheChoice}`
    );
    return response.data;
  }
}

export default new MontyHallSimulatorService();
