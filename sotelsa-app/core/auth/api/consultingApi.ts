import axios from "axios";
const consultingApi = axios.create({
  baseURL: "https://sotelsaapi.onrender.com/api",
});

export { consultingApi };
