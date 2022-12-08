import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGameInfo } from "./../../models/gameSimulator";
import { IGameSimulatorState } from "./types";
import { counter } from "../../components/utils/utils";

const initialState: IGameSimulatorState = {
  loading: false,
  showChart: false,
  showDetails: false,
  simulations: [],
  numberOfWins: 0,
  numberOfFailures: 0,
};

const gameSimulator = createSlice({
  name: "simulator",
  initialState,
  reducers: {
    //* set a flag for showing loading while getting data from server.
    setLoading: (simulator, action: PayloadAction<boolean>) => {
      simulator.loading = action.payload;
    },
    setShowChart: (simulator, action: PayloadAction<boolean>) => {
      simulator.showChart = action.payload;
    },
    setShowDetails: (simulator, action: PayloadAction<boolean>) => {
      simulator.showDetails = action.payload;
    },
    setSimulations: (simulator, action: PayloadAction<IGameInfo[]>) => {
      simulator.simulations = action.payload;
      simulator.numberOfWins = counter(simulator.simulations, "Win");
      simulator.numberOfFailures = counter(simulator.simulations, "Failure");
    },
  },
});

//* Reducer
export default gameSimulator.reducer;

//* Actions
export const { setLoading, setSimulations, setShowChart, setShowDetails } =
  gameSimulator.actions;
