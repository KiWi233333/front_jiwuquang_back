import axios from "axios";

export const request = axios.create({
  baseURL: "http://localhost:3000/admin",
  timeout: 20000,
});
