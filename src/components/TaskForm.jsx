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
		<div className="max-w-md mx-auto">
			<form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
				<h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
				<input
					type="text"
					placeholder="Escribe tu tarea"
					value={title}
					className="bg-slate-300 p-3 w-full mb-2"
					autoFocus
					onChange={(e) => settitle(e.target.value)}
				/>
				<textarea
					placeholder="Escribe la descripción de la tarea"
					value={description}
					onChange={(e) => setdescription(e.target.value)}
					className="bg-slate-300 p-3 w-full mb-2"
				></textarea>
				<button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
			</form>
		</div>
	);
}

export default TaskForm;
