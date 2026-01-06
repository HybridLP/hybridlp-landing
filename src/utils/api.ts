import axios from "axios";

const api = axios.create({
  // baseURL:  "/api",
  baseURL:  "htttps://api.hybridlp.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
