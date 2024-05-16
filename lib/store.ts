import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./user/user";
import fundSliceReducer from "./fund/fund"
export const store = configureStore({
	reducer: {
		username: userSliceReducer,
	   amount:fundSliceReducer

	},
	
});


export type RootState=ReturnType<typeof store.getState>






