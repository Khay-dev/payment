import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./user/user";

export const store = configureStore({
	reducer: {
		username: userSliceReducer
	}
});


export type RootState=ReturnType<typeof store.getState>






