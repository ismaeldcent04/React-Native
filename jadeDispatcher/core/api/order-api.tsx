import axios from "axios";
export const orderApi = axios.create({
  baseURL: "https://10.0.0.62:5099/api",
  headers: {
    Accept: "application/json",
  },
});
