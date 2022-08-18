import React, { useState } from "react";
import styles from "./TaskInput.module.css";

function TaskInput(props) {
	const [input, setInput] = useState("");

	const handleChange = e => {
		e.preventDefault();
		setInput(e.target.value);
	};

	const handlerSubmit = e => {
		e.preventDefault();
		if (input !== "") {
			props.onSubmit({
				id: Math.floor(Math.random() * 10000),
				text: input,
				edit: false,
				checked: false,
			});
		}
		setInput("");
	};
	return (
		<form className={styles.container} onSubmit={handlerSubmit}>
			<input
				type='text'
				placeholder='Write the content of the task...'
				className={styles.taskInput}
				value={input}
				onChange={handleChange}
			/>
			<button className={styles.button}>ADD</button>
		</form>
	);
}
export default TaskInput;
