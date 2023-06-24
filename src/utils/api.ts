import axios, { AxiosRequestConfig } from "axios";
import ITasks from "src/models/ITask";

const CONFIG: AxiosRequestConfig = {
  baseURL: "https://my-json-server.typicode.com/groupevaleco/tt-fake-todolist",
};

export const getAuthStatus = () =>
  axios.get<ITasks>(`/tasks`, CONFIG).then((res) => {
    return res.data;
  });
