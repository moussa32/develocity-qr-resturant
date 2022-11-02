import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalItems: 50,
    items: [],
  },
  reducers: {
    setItem: (state, payload) => {},
    removeItem: (state, payload) => {},
  },
});

export const { setItem } = cartSlice.actions;
export default cartSlice.reducer;
