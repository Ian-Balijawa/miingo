import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice( {
	name: "auth",
	initialState: { user: null, token: null },
	reducers: {
		signin: ( state, action ) => {
			const { user, token } = action.payload;
			state.user = { ...user };
			state.token = token;
		},
		register: ( state, action ) => {
			const { user, token } = action.payload;
			state.user = { ...user };
			state.token = token;
		},
		signout: ( state, action ) => {
			state.user = null;
			state.token = null;
		},

	},
	extraReducers: {
		logout: ( state, action ) => {
			state.user = null;
			state.token = null;
		}
	},

} );

export const { signin, signout, register } = authSlice.actions;
export const selectCurrentUser = ( state ) => state.auth.user;
export const selectCurrentToken = ( state ) => state.auth.token;

export default authSlice.reducer;
