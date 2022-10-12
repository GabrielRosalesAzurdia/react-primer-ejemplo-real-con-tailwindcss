import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
	// Del contexto tomo a create task nada más, lo demás no me sirve
	const { createTask } = useContext(TaskContext);
	const [title, settitle] = useState("");
	const [description, setdescription] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		createTask({ title, description });
		settitle("");
		setdescription("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Escribe tu tarea"
				value={title}
				autoFocus
				onChange={(e) => settitle(e.target.value)}
			/>
			<textarea
				placeholder="Escribe la descripción de la tarea"
				cols="30"
				rows="10"
				value={description}
				onChange={(e) => setdescription(e.target.value)}
			></textarea>
			<button>Guardar</button>
		</form>
	);
}

export default TaskForm;
