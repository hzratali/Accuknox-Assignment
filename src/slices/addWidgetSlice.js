import { createSlice } from "@reduxjs/toolkit";

export const addWidget = createSlice({
	name: "addWidget",
	initialState: {
		value: {
			display: false,
			addCategoryDisplay: false,
			addChartDisplay: false,
			category: "",
		},
	},
	reducers: {
		showWidgetPage: (state, action) => {
			action.payload.display ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "");
			state.value = action.payload;
		},
	},
});

export const { showWidgetPage } = addWidget.actions;
export default addWidget.reducer;
