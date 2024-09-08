import { configureStore } from "@reduxjs/toolkit";
import addWidget from "../slices/addWidgetSlice";
import appDataSlice from "../slices/updateAppDataSlice";
import categoryUpdateDataSlice from "../slices/categoryUpdateDataSlice";
import globalSearchSlice from "../slices/globalSearchSlice";

export const store = configureStore({
	reducer: {
		addWidgetReducer: addWidget,
		updateAppDataReducer: appDataSlice,
		categoryUpdateDataReducer: categoryUpdateDataSlice,
		globalSearchReducer: globalSearchSlice,
	},
});
