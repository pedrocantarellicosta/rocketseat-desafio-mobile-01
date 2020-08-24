import axios from "axios";

const api = axios.create({
  baseURL: "http://172.18.223.86:3333",
});

export default api;
