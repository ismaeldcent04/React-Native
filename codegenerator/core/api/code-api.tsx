import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage.adapter";
import axios from "axios";
const codeApi = axios.create({
  baseURL: "https://sgsdb.com:2038/api",
  headers: {
    Accept: "application/json",
  },
});

codeApi.interceptors.request.use(async (config) => {
  const token = await SecureStorageAdapter.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export { codeApi };
