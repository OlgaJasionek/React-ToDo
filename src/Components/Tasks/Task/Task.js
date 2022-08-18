import React, { useState } from "react";
import styles from "./Task.module.css";
import { BsFillTrashFill, ImCheckmark2, AiFillEdit } from "react-icons/all";

function Task({
	task,
	checkedHandler,
	deleteHandler,
	editHandler,
	acceptHandler,
}) {
	const [newValue, setNewValue] = useState(task.text);
	return (
		<div className={styles.container}>
			<div className={styles.task}>
				<div
					className={task.checked ? styles.taskChecked : styles.text}
					key={task.id}>
					{task.text}
				</div>
				<div>
					<button
						onClick={() => checkedHandler(task.id)}
						className={task.checked ? styles.checkedBtn : styles.btn}>
						<ImCheckmark2 />
					</button>
					<button
						onClick={() => editHandler(task.id, task.text)}
						className={styles.btn}>
						<AiFillEdit />
					</button>
					<button onClick={() => deleteHandler(task.id)} className={styles.btn}>
						<BsFillTrashFill />
					</button>
				</div>
			</div>
			{task.edit && (
				<div className={styles.task}>
					<input
						className={styles.editTask}
						placeholder='You must write something..'
						value={newValue}
						onChange={e => setNewValue(e.target.value)}></input>
					<button
						onClick={() => acceptHandler(task.id, newValue)}
						className={styles.editBtn}>
						Accept
					</button>
				</div>
			)}
		</div>
	);
}
export default Task;
