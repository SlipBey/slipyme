import axios from "axios";

const instance = axios.create({
  baseURL: "/api/proxy",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      console.warn("Slipyme API unauthorized response");
    }
    return Promise.reject(error);
  },
);

export default instance;
