import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { BsPersonFill } from "react-icons/bs";
import { TbNorthStar } from "react-icons/tb";
import { IconType } from "react-icons/lib";

// Define a type for the slice state
interface CounterState {
  navigation: nav[];
}

interface nav {
  icon: IconType;
  text: string;
}

// Define the initial state using that type
const initialState: CounterState = {
  navigation: [
    { icon: FaHome, text: "Home" },
    { icon: BsPersonFill, text: "About" },
    { icon: RiLightbulbFlashFill, text: "Skills" },
    { icon: TbNorthStar, text: "Experience" },
    { icon: SiMinutemailer, text: "Contact" },
  ],
};

export const userSlice = createSlice({
  name: "nav",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
