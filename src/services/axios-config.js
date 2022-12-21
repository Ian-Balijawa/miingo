import * as axios from "axios";
import {state} from "../state";

const instance = axios.create( {
	baseURL: "https:/api1.miingoapp.com",
} );

instance.defaults.headers.post["Content-Type"] = "application/json";
instance.interceptors.request.use(
	(config) => {
	  const token = state.accessToken;
	  const auth = token ? `Bearer ${token}` : '';
	  config.headers.common['Authorization'] = auth;
	  return config;
	},
	(error) => Promise.reject(error),
  );
  
export default instance

