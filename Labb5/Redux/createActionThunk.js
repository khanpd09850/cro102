import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAPI = createAsyncThunk("data/fetch", async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts");
	return response.json();
});

const dataSlide = createSlice({
	name: "data",
	initialState: {
		items: [],
		status: "idle",
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAPI.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchAPI.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.items = action.payload;
			})
			.addCase(fetchAPI.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});
export default dataSlide.reducer;