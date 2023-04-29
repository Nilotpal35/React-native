import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  marginTop: 0,
};

const marginSlice = createSlice({
  name: "margin",
  initialState,
  reducers: {
    addMargin: (state, action) => {
      state.marginTop = action.payload.height;
    },
    removeMargin: (state, action) => {
      state.marginTop = action.payload.height;
    },
  },
});

export const { addMargin, removeMargin } = marginSlice.actions;

export default marginSlice.reducer;
