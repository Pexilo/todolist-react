import React, { useState } from "react";
import ITask from "src/models/ITask";
import "src/styles/TaskItem.css";

function TaskItem({ task }: { task: ITask }) {
  const [completed, setCompleted] = useState(task.completed);

  return (
    <div className={`task-card ${completed && "completed"}`}>
      <div className="task-card-header">
        {completed ? <s>{task.title}</s> : task.title}
      </div>
      <div className="task-card-content">
        <div>{task.id}</div>
        <div className="task-card-checkbox">
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={completed}
              onChange={() => setCompleted(!completed)}
              id={`checkbox-${task.id}`}
            />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
