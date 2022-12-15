import * as axios from "axios";

const instance = axios.create( {
	baseURL: "https://backend-miingo.herokuapp.com/",
} );

instance.defaults.headers.post["Content-Type"] = "application/json";

export default instance

