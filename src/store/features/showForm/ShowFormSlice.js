import { createSlice } from "@reduxjs/toolkit";

export const formShowSlice = createSlice({
	name: "formShow",
	initialState: {
		show: false,
	},
	reducers: {
		toggleState: (state) => {
			state.show = !state.show;
		},
	},
});

export const { toggleState } = formShowSlice.actions;

export default formShowSlice.reducer;
