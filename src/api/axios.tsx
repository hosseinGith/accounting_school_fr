import axios from "axios";
const baseURL = "http://localhost:3002/api";
// const baseURL = "https://school-admin.miradig.ir/api";
const apiClient = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

apiClient.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("accessToken");
    if (token && config.headers) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  }
  return config;
});

apiClient.interceptors.response.use((response) => response);
export default apiClient;
export { baseURL };
