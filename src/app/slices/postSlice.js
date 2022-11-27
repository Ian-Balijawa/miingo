import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	posts: []
}

const postSlice = createSlice( {
	name: "post",
	initialState,
	reducers: {
		addPost: ( state, action ) => {
			state.posts = [...state.posts, action.payload]
		},
		deletePost: ( state, action ) => {
			const { _id } = action.payload
			state.posts.filter( post => post._id !== _id )
		},
		fetchAllPosts: ( state, action ) => {
			const { payload } = action
			state.posts = [...payload]
		},
	},
} );

export const selectAllPosts = ( state ) => state.posts;

export const { addPost, deletePost, fetchAllPosts } = postSlice.actions;

export default postSlice.reducer;
