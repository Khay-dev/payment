'use client';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { userState } from './types';



let storedValue = "";
if (typeof window !== "undefined") {
storedValue= localStorage.getItem("username") ?? "";

}
const initialValue = storedValue;

const initialState: userState = {
  username: initialValue,
};


const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setName: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
        if (typeof window !== "undefined") {
        localStorage.setItem("username", action.payload);
      }
		},
	},
});



export const { setName } = userSlice.actions;
export default userSlice.reducer;