import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "https://api2.slipyme.com"
      : "https://api2.slipyme.com",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  },
});

export default instance;
