import * as axios from "axios";

const instance = axios.create( {
	baseURL: process.env.REACT_APP_BASE_URL || "https://api1.miingoapp.com",
} );
const token = localStorage.getItem( "token" );
if ( token ) {
	instance.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse( token )}`
}

instance.defaults.headers.post["Content-Type"] = "application/json";

export default instance;
