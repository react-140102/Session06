import { store } from "./../store";
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3010",
});

api.interceptors.request.use((config) => {
  const token = store.getState().auth.token;
  if (token && config.headers) {
    config.headers["token"] = token;
  }
  return config;
});
