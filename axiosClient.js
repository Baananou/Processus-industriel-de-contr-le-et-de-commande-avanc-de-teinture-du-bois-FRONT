import axios from "axios";
const axiosClient = axios.create({
	baseURL: "http://localhost:8080",
	withCredentials: false,
	headers: {
		Accept: "application/json",
	},
});

export default axiosClient;
