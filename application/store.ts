import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./Users";
import balanceSliceReducer from "./Balance"
export const store = configureStore({
	reducer: {
		username: userSliceReducer,
	   amount:balanceSliceReducer
	},

});


export type RootState=ReturnType<typeof store.getState>






