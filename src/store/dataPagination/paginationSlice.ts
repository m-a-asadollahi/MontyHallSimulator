import { IPaginationState } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IPaginationState = {
  currentPage: 1,
  pageSize: 8,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage: (simulator, action: PayloadAction<number>) => {
      simulator.currentPage = action.payload;
    },
  },
});

export default paginationSlice.reducer;

export const { setCurrentPage } = paginationSlice.actions;
