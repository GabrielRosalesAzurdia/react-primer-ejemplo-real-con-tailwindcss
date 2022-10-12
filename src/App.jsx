// Importamos los datos de tareas con un alias ya que de lo contrario causará un
// conflicto con nombres
import TaskList from "./components/TaskList";
import Taskform from "./components/TaskForm";

function App() {
	return (
		<>
			<Taskform />
			<TaskList />
		</>
	);
}

export default App;
