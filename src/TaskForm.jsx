import { useState, useEffect } from "react";

function TaskForm({ createTask }) {
	const [title, settitle] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		createTask(title);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Escribe tu tarea"
				onChange={(e) => settitle(e.target.value)}
			/>
			<button>Guardar</button>
		</form>
	);
}

export default TaskForm;
