import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalItems: 0,
    items: [],
  },
  reducers: {
    setItem: (state, { payload }) => {
      state.totalItems++;
      state.items.push(payload);
    },
    removeItem: (state, { payload }) => {
      state.totalItems--;
      state.items = state.items.filter(item => item.id !== payload.id);
    },
  },
});

export const { setItem } = cartSlice.actions;
export default cartSlice.reducer;
