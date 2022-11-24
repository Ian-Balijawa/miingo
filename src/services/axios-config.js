import * as axios from "axios";
const instance = axios.create( {
	baseURL: process.env.REACT_APP_BASE_URL || "https://api1.miingoapp.com",
} );

instance.defaults.headers.common[
	"Authorization"
] = `Bearer ${localStorage.getItem( "token" )}`;

console.log( "TAOKEN: ", localStorage.getItem( "token" ) )
instance.defaults.headers.post["Content-Type"] = "application/json";

export default instance;
