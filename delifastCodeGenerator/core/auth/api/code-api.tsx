import axios from "axios";
export const codeApi = axios.create({
  baseURL: "https://sgsdb.com:2038/api",
  headers: {
    Accept: "application/json",
  },
});
