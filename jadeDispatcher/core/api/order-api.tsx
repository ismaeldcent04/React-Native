import axios from "axios";
export const orderApi = axios.create({
  baseURL: "http://sgsdb.com:2040/api",
  headers: {
    Accept: "application/json",
  },
});
