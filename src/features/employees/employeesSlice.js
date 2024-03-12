import { createSlice } from "@reduxjs/toolkit";

const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    list: [],
  },
  reducers: {
    addEmployee: (state, action) => {
      state.list = [...state.list, action.payload];
    },
  },
});

export const { addEmployee } = employeesSlice.actions;

export default employeesSlice.reducer;
