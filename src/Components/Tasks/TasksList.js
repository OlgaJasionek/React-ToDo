import styles from "./TasksList.module.css";

import React from "react";
import { useState } from "react";

import TaskInput from "../TaskInput/TaskInput";
import Task from "./Task/Task";
import UserPanel from "../UserPanel/UserPanel";

function TasksList() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const filteredTask = () => {
    switch (filter) {
      case "all":
        return tasks;
      case "done":
        return tasks.filter(task => task.checked);
      case "todo":
        return tasks.filter(task => !task.checked);
    }
  };

  const addTask = task => {
    const newTasks = [task, ...tasks];

    setTasks(newTasks);
  };

  const checkedHandler = id => {
    const checkedTask = tasks.map(task => {
      if (task.id === id) {
        task.checked = !task.checked;
      }
      return task;
    });

    setTasks(checkedTask);
  };

  const editHandler = id => {
    const editTask = tasks.map(task => ({ ...task, edit: task.id === id }));

    setTasks(editTask);
  };

  const acceptHandler = (id, newValue) => {
    const acceptEditTask = tasks.map(task => {
      if (task.id === id && newValue !== "") {
        return { ...task, edit: false, text: newValue };
      }
      return task;
    });

    setTasks(acceptEditTask);
  };

  const deleteHandler = id => {
    const deleteTask = [...tasks].filter(task => task.id !== id);

    setTasks(deleteTask);
  };

  const filterTasksHandler = type => {
    setFilter(type);
  };

  return (
    <div className={styles.container}>
      <TaskInput onSubmit={addTask} />
      <h2>Tasks to do :</h2>
      <UserPanel filter={filter} onChangeFilter={filterTasksHandler} />
      {filteredTask().map(task => (
        <Task
          key={task.id}
          task={task}
          onCheck={checkedHandler}
          onDelete={deleteHandler}
          onEdit={editHandler}
          onAccept={acceptHandler}
        />
      ))}
    </div>
  );
}
export default TasksList;
