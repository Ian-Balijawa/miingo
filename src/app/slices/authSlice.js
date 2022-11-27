import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice( {
	name: "auth",
	initialState: { user: null, accessToken: null },
	reducers: {
		signin: ( state, action ) => {
			const { user, accessToken } = action.payload;
			state.user = { ...user };
			state.accessToken = accessToken;
			localStorage.setItem( 'user', JSON.stringify( user ) );
			localStorage.setItem( 'accessToken', JSON.stringify( accessToken ) );
		},
		register: ( state, action ) => {
			const { user, accessToken } = action.payload;
			state.user = { ...user };
			state.accessToken = accessToken;
			localStorage.setItem( 'user', JSON.stringify( user ) );
			localStorage.setItem( 'accessToken', JSON.stringify( accessToken ) );
		},
		setAccessToken: ( state, action ) => {
			state.accessToken = action.payload
		},
		signout: ( state, action ) => {
			state.user = null;
			state.accessToken = null;
			localStorage.clear()
		},
	},

} );

export const { signin, signout, register, setAccessToken } = authSlice.actions;
export const selectCurrentUser = ( state ) => state.auth.user;
export const selectCurrentToken = ( state ) => state.auth.accessToken;

export default authSlice.reducer;
