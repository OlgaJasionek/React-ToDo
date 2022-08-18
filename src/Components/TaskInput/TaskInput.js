import React, { useState } from "react";
import styles from "./TaskInput.module.css";

function TaskInput(props) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = e => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const handlerSubmit = e => {
    e.preventDefault();

    if (inputValue !== "") {
      props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: inputValue,
        edit: false,
        checked: false
      });
    }

    setInputValue("");
  };
  return (
    <form className={styles.container} onSubmit={handlerSubmit}>
      <input
        type="text"
        placeholder="Write the content of the task..."
        className={styles.taskInput}
        value={inputValue}
        onChange={handleChange}
      />
      <button className={styles.button}>ADD</button>
    </form>
  );
}
export default TaskInput;
