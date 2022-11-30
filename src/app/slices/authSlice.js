import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice( {
	name: "auth",
	initialState: {
		user: null,
		accessToken: null,
	},
	reducers: {
		// set the user and accessToken in the store
		setUser ( state, action ) {
			state.user = action.payload.user;
			state.accessToken = action.payload.accessToken;
			localStorage.setItem( 'accessToken', JSON.stringify( action.payload.accessToken ) )
			localStorage.setItem( 'user', JSON.stringify( action.payload.user ) )
		},
		// remove the user and accessToken from the store
		removeUser ( state ) {
			state.user = null;
			state.accessToken = null;
			localStorage.clear()
		},
		//we shall need to set the accessToken independently of the user after we refresh the token
		setAccessToken ( state, action ) {
			state.accessToken = action.payload.accessToken;
			localStorage.setItem( 'accessToken', JSON.stringify( action.payload.accessToken ) )
		}

	},
} );

// export the actions from the auth slice
export const { setUser, removeUser, setAccessToken } = authSlice.actions;

// export a selector that will be used to get the user from the store
export const selectUser = ( state ) => state.auth.user;

// export the reducer from the auth slice
export default authSlice.reducer;
