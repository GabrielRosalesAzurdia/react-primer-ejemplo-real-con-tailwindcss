// Importamos los datos de tareas con un alias ya que de lo contrario causará un
// conflicto con nombres
import TaskList from "./components/TaskList";
import Taskform from "./components/TaskForm";

function App() {
	return (
		<main className="bg-zinc-900 h-screen">
			<div className="container mx-auto p-10">
				<Taskform />
				<TaskList />
			</div>
		</main>
	);
}

export default App;
