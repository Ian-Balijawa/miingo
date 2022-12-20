import * as axios from "axios";

const instance = axios.create( {
	baseURL: "https:/api1.miingoapp.com",
} );

instance.defaults.headers.post["Content-Type"] = "application/json";

export default instance

