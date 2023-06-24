import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import ITasks from "src/models/ITask";
import { Wait } from "src/utils/shortcuts";
import { getAuthStatus } from "../api";

export function useFetchTasks() {
  const [tasks, setTasks] = useState<ITasks[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    getAuthStatus()
      .then((data: any) => {
        const tasks: ITasks[] = data;
        setTasks(tasks);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        Wait(1000).then(() => {
          setLoading(false);
        });
      });
  }, []);

  return { tasks, error, loading };
}
