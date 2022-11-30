import { createSlice } from '@reduxjs/toolkit';

// create a posts slice that will be used to store the posts data in the store
const postsSlice = createSlice( {
	name: "posts",
	initialState: {
		postsList: [],
	},
	reducers: {
		// add a post to the store
		postAdded ( state, action ) {
			state.postsList.push( action.payload );
		},
		// add multiple posts to the store
		postsAdded ( state, action ) {
			state.postsList = state.postsList.concat( action.payload );
		},
		// update a post in the store
		postUpdated ( state, action ) {
			const { _id, postDesc, video, document, user, likes, image } = action.payload;
			const existingPost = state.postsList.find( ( post ) => post._id === _id );
			if ( existingPost ) {
				existingPost.postDesc = postDesc;
				existingPost.video = video;
				existingPost.document = document;
				existingPost.user = user;
				existingPost.likes = likes;
				existingPost.image = image;
			}
		},

		// like a post in the store
		postLiked ( state, action ) {
			const { _id, likes } = action.payload;
			const existingPost = state.postsList.find( ( post ) => post._id === _id );
			if ( existingPost ) {
				existingPost.likes = likes;
			}
		},

		// delete a post from the store
		postDeleted ( state, action ) {
			const { _id } = action.payload;
			state.postsList = state.postsList.filter( ( post ) => post.id !== _id );
		},
	},
} );

// export the actions from the posts slice
export const { postAdded, postsAdded, postUpdated, postDeleted, postLiked } = postsSlice.actions;

// export a selector that will be used to get the posts from the store
// export the reducer from the posts slice
export default postsSlice.reducer;
