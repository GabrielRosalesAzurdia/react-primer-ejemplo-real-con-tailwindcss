// Importamos los datos de tareas con un alias ya que de lo contrario causará un
// conflicto con nombres
import { tasks as data } from "./tasks";
import { useState, useEffect } from "react";

function TaskList() {
	// No le asignamos la data acá desde el inicio a tasks ya que cuando esto se
	// declara aún no existe, debemos usar un useEffect para colocarlo
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		setTasks(data);
	}, []);

	if (tasks.length === 0) {
		return <h1>No hay tareas aún</h1>;
	}

	return (
		<div>
			{tasks.map((task) => {
				return (
					<div key={task.id}>
						<h1>{task.title}</h1>
						<p>{task.description} </p>
					</div>
				);
			})}
		</div>
	);
}

export default TaskList;
