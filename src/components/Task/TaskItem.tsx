import { memo, useContext } from "react";
import { useDispatch } from "react-redux";
import { AppContext } from "../../App";
import { Task } from "./Task";
import { removeTask, toggleTask } from "./task.slice";

interface TaskItemProps {
  task: Task;
}

const TaskItemFunc = function ({ task }: TaskItemProps) {
  const [context] = useContext(AppContext);
  const dispatch = useDispatch();
  return (
    <li>
      <input
        onChange={(e) => dispatch(toggleTask(task.id))}
        type="checkbox"
        checked={task.done}
      />
      <span style={{ color: context.color }}>{task.title}</span>
      <button onClick={() => dispatch(removeTask(task.id))}>❌</button>
    </li>
  );
};

export default memo(TaskItemFunc);
