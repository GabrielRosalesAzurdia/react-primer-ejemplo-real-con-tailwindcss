function TaskCard({ task, deleteTask }) {
	const handleClick = () => {
		deleteTask(task.id);
	};
	return (
		<div>
			<h1>{task.title}</h1>
			<p>{task.description} </p>
			<button onClick={handleClick}>Eliminiar</button>
		</div>
	);
}

export default TaskCard;
