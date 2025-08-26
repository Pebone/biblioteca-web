import axios from "axios";

const api = axios.create({
  baseURL: "https://library-76ft.onrender.com/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "GET, POST, DELETE, HEAD, OPTIONS",
  },
});

export default api;
