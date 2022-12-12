import * as axios from "axios";

const instance = axios.create( {
	baseURL: "http://localhost:3000/" //"https://backend-miingo.herokuapp.com/",
} );

instance.defaults.headers.post["Content-Type"] = "application/json";

export default instance

