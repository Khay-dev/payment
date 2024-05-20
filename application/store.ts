import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./Users";
import fundSliceReducer from "./Balance"
export const store = configureStore({
	reducer: {
		username: userSliceReducer,
	   amount:fundSliceReducer
	},

});


export type RootState=ReturnType<typeof store.getState>






