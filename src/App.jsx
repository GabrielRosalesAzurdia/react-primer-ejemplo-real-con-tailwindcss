// Importamos los datos de tareas con un alias ya que de lo contrario causará un
// conflicto con nombres
import TaskList from "./components/TaskList";
import Taskform from "./components/TaskForm";
import { tasks as data } from "./data/tasks";
import { useState, useEffect } from "react";

function App() {
	// No le asignamos la data acá desde el inicio a tasks ya que cuando esto se
	// declara aún no existe, debemos usar un useEffect para colocarlo
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		setTasks(data);
	}, []);

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

	return (
		<>
			<Taskform createTask={createTask} />
			<TaskList deleteTask={deleteTask} tasks={tasks} />
		</>
	);
}

export default App;
