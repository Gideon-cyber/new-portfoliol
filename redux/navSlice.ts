import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface CounterState {
  navigation: []
}

// Define the initial state using that type
const initialState: CounterState = {
  navigation: [],
};

export const userSlice = createSlice({
  name: "nav",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    
  },
});

export const { } = userSlice.actions;

export default userSlice.reducer;
