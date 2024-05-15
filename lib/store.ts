import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {username: "" },
	reducers: {
		setName: (state, action) => {
			state.username = action.payload;
		},
	},
});
export const store = configureStore({
	reducer: userSlice.reducer,
});


export type RootState=ReturnType<typeof store.getState>


export const { setName} = userSlice.actions;



