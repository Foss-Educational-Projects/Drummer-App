import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: "Press Above Keys"
}

export const activeValueSlice = createSlice({
	name: 'activeValueSlice',
	initialState,
	reducers:{
		changeText: (state, action) => {
			state.value = action.payload;
		}
	}
})

export const { changeText } = activeValueSlice.actions;

export default activeValueSlice.reducer;