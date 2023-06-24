import { useFetchTasks } from "src/utils/hooks/useFetchTasks";
import ITask from "src/models/ITask";
import TaskItem from "./TaskItem";
import "src/styles/TaskList.css";

function TaskList() {
  const { tasks, error, loading } = useFetchTasks();

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>Error: {error.message}</div>;

  return tasks ? (
    <div className="task-list">
      {tasks.map((task: ITask) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  ) : (
    <div>No tasks</div>
  );
}
export default TaskList;
