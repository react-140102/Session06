import { useState } from "react";
import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css";
import styled from "styled-components";
import { addTask, taskSelector } from "./task.slice";
import { useDispatch, useSelector } from "react-redux";

const Input = styled.input`
  font-size: 1.5em;
  text-align: center;
  border-color: palevioletred;
  border-radius: 10%;
`;

export default function TodoList() {
  const [title, setTitle] = useState("");

  const task = useSelector(taskSelector);
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addTask(title));
    setTitle("");
  };

  return (
    <>
      <h1 className={styles.header}>New Task:</h1>
      <Input onChange={(e) => setTitle(e.target.value)} value={title} />
      <button onClick={add}>Add</button>
      <ul>
        {task.tasks.map((task) => (
          <TaskItem key={task.id} task={task}></TaskItem>
        ))}
      </ul>
    </>
  );
}
