import React from "react";

import styles from "./UserPanel.module.css";

function UserPanel({ filter, filterTasksHandler }) {
	return (
		<div className={styles.btnPanel}>
			<button
				onClick={() => filterTasksHandler("all")}
				className={filter === "all" ? styles.active : styles.btn}>
				All
			</button>
			<button onClick={() => filterTasksHandler("done")} className={filter === "done" ? styles.active : styles.btn}>
				Done
			</button>
			<button onClick={() => filterTasksHandler("todo")} className={filter === "todo" ? styles.active : styles.btn}>
				ToDo
			</button>
		</div>
	);
}
export default UserPanel;
