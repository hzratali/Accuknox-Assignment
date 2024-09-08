import { createSlice } from "@reduxjs/toolkit";

const categoryUpdateDataSlice = createSlice({
	name: "categoryData",
	initialState: {
		value: [],
	},
	reducers: {
		categoryUpdateData: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { categoryUpdateData } = categoryUpdateDataSlice.actions;
export default categoryUpdateDataSlice.reducer;
