import { createSlice } from "@reduxjs/toolkit";

const tableSlice = createSlice({
  name: "table",
  initialState: {
    tableId: null,
  },
  reducers: {
    setTable: (state, payload) => {
      state.tableId = payload.tableId;
    },
    removeTable: state => {
      state.tableId = null;
    },
  },
});

export const { setTable, removeTable } = tableSlice.actions;
export default tableSlice.reducer;
