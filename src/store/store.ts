import { configureStore } from "@reduxjs/toolkit";

import gameSimulatorReducer from "./gameSimulator/simulatorSlice";
import paginationReducer from "./dataPagination/paginationSlice";

const store = configureStore({
  reducer: {
    simulator: gameSimulatorReducer,
    pagination: paginationReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
