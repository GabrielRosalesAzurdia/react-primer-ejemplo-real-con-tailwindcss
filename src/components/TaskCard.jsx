import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
	const handleClick = () => {
		deleteTask(task.id);
	};
	const { deleteTask } = useContext(TaskContext);
	return (
		<div>
			<h1>{task.title}</h1>
			<p>{task.description} </p>
			<button onClick={handleClick}>Eliminiar</button>
		</div>
	);
}

export default TaskCard;
