import { memo, useContext } from "react";
import { AppContext } from "../../App";
import { Task } from "./Task";

interface TaskItemProps {
  task: Task;
  toggleTask: any;
}

const TaskItemFunc = function ({ task, toggleTask }: TaskItemProps) {
  const appContext = useContext(AppContext);
  return (
    <li>
      <input
        onChange={(e) => toggleTask(task)}
        type="checkbox"
        checked={task.done}
      />
      <span style={{ color: appContext.color }}>{task.title}</span>
    </li>
  );
};

export default memo(TaskItemFunc);
