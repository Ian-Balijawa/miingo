import authReducer from "./slices/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/postsSlice";

export const store = configureStore( {
	reducer: {
		auth: authReducer,
		posts: postsReducer,
	},
	devTools: process.env.NODE_ENV !== "production",
} );
