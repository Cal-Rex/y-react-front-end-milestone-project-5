
import axios from "axios";


axios.defaults.baseURL = 'https://y-api-milestone-project-5-3530384cc0f8.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();