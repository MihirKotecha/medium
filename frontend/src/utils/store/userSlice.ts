import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./appstore";

export interface InitialState {
  // Renamed initState to InitialState
  userName: string;
  bio: string;
}

const initialState: InitialState = {
  userName: "",
  bio: "",
};

export const userSlice = createSlice({
  name: "userDetails", // Corrected the typo
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    setBio: (state, action: PayloadAction<string>) => {
      state.bio = action.payload;
    },
  },
});

export const { setUserName, setBio } = userSlice.actions;
export const selectUserName = (state: RootState) => state.userDetails.userName; // Returns userName only
export const selectUserDetails = (state: RootState) => state.userDetails; // Returns the entire userDetails state
export default userSlice.reducer;
