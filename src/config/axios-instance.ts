import axios from "axios";
import { baseUrl } from "./config";

const axiosInstance = axios.create({
    baseURL: `${baseUrl}`,
});

export default axiosInstance;
