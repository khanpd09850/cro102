import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: [
		{
			name: "Rua chen",
		},
	],
};

export const todosSlide = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodos: (state, action) => {
			state.value = [...state.value, action.payload];
		},
	},
});
export const { addTodos } = todosSlide.actions;
export default todosSlide.reducer;