import axios from "axios";
import { IGameInfo, MontyHallSimulationDto } from "../models/gameSimulator";
import config from "./config.json";

class MontyHallSimulatorService {
  http = axios.create({
    baseURL: config.apiUrl,
    headers: {
      "Content-Type": "application/json",
    },
  });

  async simulateGame(numberOfGames: number, changeTheChoice: boolean) {
    // const MontyHallSimulationDto: MontyHallSimulationDto = {
    //   numberOfGames,
    //   changeTheChoice,
    // };
    // console.log(MontyHallSimulationDto);
    const response = await this.http.get<IGameInfo[]>(
      `/${numberOfGames}/${changeTheChoice}`
    );
    return response.data;
  }
}

export default new MontyHallSimulatorService();
