import React from "react";
import { useSelector } from "react-redux";

import { tasksSelector } from "../../redux/tasks/selectors";

import styles from "./TasksList.module.scss";

export const TasksList = () => {
  const { tasksList, status } = useSelector(tasksSelector);

  return (
    <div className={styles.root}>
      {status === "pending"
        ? "LOAGING"
        : status === "fulfilled"
        ? tasksList.map((task) => (
            <li key={task.id}>
              {task.title} - {task.completed ? "Completed" : "Not Completed"}
            </li>
          ))
        : "ERROR FETCHING"}
    </div>
  );
};
