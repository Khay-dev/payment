import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./user/userSlice";
import fundSliceReducer from "./fund/balanceSlice"
export const store = configureStore({
	reducer: {
		username: userSliceReducer,
	   amount:fundSliceReducer

	},
	
});


export type RootState=ReturnType<typeof store.getState>






