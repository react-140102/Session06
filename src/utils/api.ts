import { store } from "./../store";
import axios from "axios";
import { notification } from "antd";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

api.interceptors.request.use((config) => {
  const token = store.getState().auth.token;
  if (token && config.headers) {
    config.headers["token"] = token;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response && error.response.data) {
      notification.error({ message: error.response.data.error });
    } else {
      notification.error({ message: error.message });
    }

    return Promise.reject(error);
  }
);
