import { memo } from "react";
import { Task } from "./Task";

interface TaskItemProps {
  task: Task;
  toggleTask: any;
}

const TaskItemFunc = function ({ task, toggleTask }: TaskItemProps) {
  return (
    <li>
      <input
        onChange={(e) => toggleTask(task)}
        type="checkbox"
        checked={task.done}
      />
      <a>{task.title}</a>
    </li>
  );
};

export default memo(TaskItemFunc);
