import axios from "axios";
export const orderApi = axios.create({
  baseURL: "https://sgsdb.com:2039/api",
  headers: {
    Accept: "application/json",
  },
});
