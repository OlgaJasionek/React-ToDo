import React from "react";
import classnames from "classnames";

import styles from "./UserPanel.module.css";

function UserPanel({ filter, onChangeFilter }) {
  return (
    <div className={styles.btnPanel}>
      <button
        onClick={() => onChangeFilter("all")}
        className={classnames(styles.btn, {
          [styles.active]: filter === "all"
        })}
      >
        All
      </button>
      <button
        onClick={() => onChangeFilter("done")}
        className={classnames(styles.btn, {
          [styles.active]: filter === "done"
        })}
      >
        Done
      </button>
      <button
        onClick={() => onChangeFilter("todo")}
        className={classnames(styles.btn, {
          [styles.active]: filter === "todo"
        })}
      >
        ToDo
      </button>
    </div>
  );
}
export default UserPanel;
