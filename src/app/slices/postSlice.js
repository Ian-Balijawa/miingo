import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{
		user: "",
		postDesc: "",
		image: "",
		video: "",
		document: "",
		likes: [""],
	},
];

const postSlice = createSlice({
	name: "post",
	initialState,
	reducers: {
		addPost: (state, action) => {
			state.push(action.payload);
		},

		deletePost: (state, action) => {},
	},
});

export const selectAllPosts = (state) => state.posts;

export const { addPost, deletePost } = postSlice.actions;

export default postSlice.reducer;
