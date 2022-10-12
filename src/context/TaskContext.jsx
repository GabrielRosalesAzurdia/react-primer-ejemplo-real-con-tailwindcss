import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
	// No le asignamos la data acá desde el inicio a tasks ya que cuando esto se
	// declara aún no existe, debemos usar un useEffect para colocarlo
	const [tasks, setTasks] = useState([]);

	function createTask(task) {
		// tomando la id la fecha para que sea única
		var timestamp = new Date().getUTCMilliseconds();
		setTasks([
			...tasks,
			{ title: task.title, id: timestamp, description: task.description },
		]);
	}

	function deleteTask(taskId) {
		setTasks(() => {
			let filtered = tasks.filter((value) => {
				// Cabe destacar que este return no es el return de la función
				// deleteTask sino que del filter
				return value.id !== taskId;
			});
			return filtered;
		});
	}

	useEffect(() => {
		setTasks(data);
	}, []);

	return (
		<TaskContext.Provider value={{ tasks, deleteTask, createTask }}>
			{props.children}
		</TaskContext.Provider>
	);
}
