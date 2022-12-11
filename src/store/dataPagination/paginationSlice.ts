import { IPaginationState } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//* The state of Pagination is set to the default values.
const initialState: IPaginationState = {
  currentPage: 1,
  pageSize: 8,
};

//* Create Pagination state
const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    //* set currentPage.
    setCurrentPage: (simulator, action: PayloadAction<number>) => {
      simulator.currentPage = action.payload;
    },
  },
});

export default paginationSlice.reducer;

export const { setCurrentPage } = paginationSlice.actions;
