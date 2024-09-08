import { createSlice } from "@reduxjs/toolkit";

export const globalSearchSlice = createSlice({
	name: "globalsearch",
	initialState: {
		value: "",
	},
	reducers: {
		updateGlobalSearch: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { updateGlobalSearch } = globalSearchSlice.actions;
export default globalSearchSlice.reducer;
