/* eslint-disable import/no-anonymous-default-export */

import Cookies from 'js-cookie';
import axios from '../services/axios-config';
import { useEffect } from "react"

// now we check the expiration of access token
export default () => {

	axios.get( "/auth/refresh-token", { withCredentials: true } ).then( ( res ) => {
		Cookies.set( res.data.access ) // assuming the response has the access token

	} )

	useEffect( () => {
		if ( ( Cookies.get( "accessToken" ) ) ) {
			axios.get( "refresh_url_here/" ).then( ( res ) => {
				console.log( "REFRESHED TOKEN: ", Cookies.get( "accessToken" ) )

			} )
			/*what you do here, is try to have a
			resource/view in your backend that has
			the refresh token and make request to it
			so that it gives you a new access token,
			because refresh token should be in cookies tagged with `httponly',
			then you can send the access token to client side
			as a response and set it somewhere.
			*/
		}
		else {
			//do something else
		}
	}, [] )
}
