import { createSlice } from "@reduxjs/toolkit";
import { COOKIE_NAME } from "../constant";

const appDataSlice = createSlice({
	name: "appData",
	initialState: {
		value: [],
	},
	reducers: {
		updateAppData: (state, action) => {
			state.value = action.payload;
			localStorage.setItem(COOKIE_NAME, JSON.stringify(action.payload));
		},
	},
});

export const { updateAppData } = appDataSlice.actions;
export default appDataSlice.reducer;
