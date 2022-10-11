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
		setTasks([
			...tasks,
			{ title: task.title, id: tasks.length, description: task.description },
		]);
	}

	return (
		<>
			<Taskform createTask={createTask} />
			<TaskList tasks={tasks} />
		</>
	);
}

export default App;
