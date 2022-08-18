import styles from "./Task.module.css";

import React, { useState } from "react";
import { BsFillTrashFill, ImCheckmark2, AiFillEdit } from "react-icons/all";

function Task({ task, onCheck, onDelete, onEdit, onAccept }) {
  const [newValue, setNewValue] = useState(task.text);

  return (
    <div className={styles.container}>
      <div className={styles.task}>
        <div
          className={task.checked ? styles.taskChecked : styles.text}
          key={task.id}
        >
          {task.text}
        </div>
        <div>
          <button
            onClick={() => onCheck(task.id)}
            className={task.checked ? styles.checkedBtn : styles.btn}
          >
            <ImCheckmark2 />
          </button>
          <button
            onClick={() => onEdit(task.id, task.text)}
            className={styles.btn}
          >
            <AiFillEdit />
          </button>
          <button onClick={() => onDelete(task.id)} className={styles.btn}>
            <BsFillTrashFill />
          </button>
        </div>
      </div>
      {task.edit && (
        <div className={styles.task}>
          <input
            className={styles.editTask}
            placeholder="You must write something.."
            value={newValue}
            onChange={e => setNewValue(e.target.value)}
          ></input>
          <button
            onClick={() => onAccept(task.id, newValue)}
            className={styles.editBtn}
          >
            Accept
          </button>
        </div>
      )}
    </div>
  );
}
export default Task;
