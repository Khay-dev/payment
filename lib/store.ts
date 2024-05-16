import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./Users/userSlice";
import fundSliceReducer from "./Balance/balanceSlice"
export const store = configureStore({
	reducer: {
		username: userSliceReducer,
	   amount:fundSliceReducer

	},
	
});


export type RootState=ReturnType<typeof store.getState>






