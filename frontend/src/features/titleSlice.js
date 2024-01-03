import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "FiberNook",
};

export const titleSlice = createSlice({
  name: "title",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTitle } = titleSlice.actions;

export default titleSlice.reducer;
