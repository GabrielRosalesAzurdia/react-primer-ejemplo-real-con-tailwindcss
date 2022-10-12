import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task, deleteTask }) {
	const handleClick = () => {
		deleteTask(task.id);
	};
	const valor = useContext(TaskContext);
	console.log(valor);
	return (
		<div>
			<h1>{task.title}</h1>
			<p>{task.description} </p>
			<button onClick={handleClick}>Eliminiar</button>
		</div>
	);
}

export default TaskCard;
