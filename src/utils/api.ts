import axios, { AxiosRequestConfig } from "axios";
import ITasks from "src/models/ITask";

const CONFIG: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API_URL,
};

export const getAuthStatus = () =>
  axios.get<ITasks>(`/tasks`, CONFIG).then((res) => {
    return res.data;
  });
