import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISimulationInfo } from "./../../models/gameSimulator";
import { ISimulatorState } from "./types";
import { counter } from "../../components/utils/utils";

//* The state of simulator is set to the default values.
const initialState: ISimulatorState = {
  loading: false,
  showChart: false,
  showDetails: false,
  simulations: [],
  numberOfWins: 0,
  numberOfFailures: 0,
};

//* Create simulator state
const simulator = createSlice({
  name: "simulator",
  initialState,
  reducers: {
    //* set a flag for showing loading while getting data from server.
    setLoading: (simulator, action: PayloadAction<boolean>) => {
      simulator.loading = action.payload;
    },
    //* set a flag for showing chart .
    setShowChart: (simulator, action: PayloadAction<boolean>) => {
      simulator.showChart = action.payload;
    },
    //* set a flag for showing simulations details .
    setShowDetails: (simulator, action: PayloadAction<boolean>) => {
      simulator.showDetails = action.payload;
    },
    //* save simulations info in store.
    setSimulations: (simulator, action: PayloadAction<ISimulationInfo[]>) => {
      simulator.simulations = action.payload;
      simulator.numberOfWins = counter(simulator.simulations, "Win");
      simulator.numberOfFailures = counter(simulator.simulations, "Failure");
    },
  },
});

//* Reducer
export default simulator.reducer;

//* Actions
export const { setLoading, setSimulations, setShowChart, setShowDetails } =
  simulator.actions;
