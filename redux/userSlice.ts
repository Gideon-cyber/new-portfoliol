import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface CounterState {
  mode: boolean;
}

// Define the initial state using that type
const initialState: CounterState = {
  mode: false,
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = !state.mode;
    },
  },
});

export const { setMode } = userSlice.actions;

export default userSlice.reducer;
