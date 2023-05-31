import { useState } from "react";
import { Card } from "./Card";
import { Tarea } from "./Tarea";
import { getId } from "../src/utils/getId";

const App = () => {
	const [tareas, setTareas] = useState([]);

	function agregarAlCard(item, item2) {
		const newTarea = {
			id: getId(),
			item,
			item2,
		};
		setTareas([...tareas, newTarea]);
	}

	function eliminarTarea(id) {
		const nuevaTarea = tareas.filter((tarea) => tarea.id !== id);
		setTareas(nuevaTarea);
	}

	return (
		<div style={{ fontFamily: "inter, sans serif" }}>
			<Card agregarAlCard={agregarAlCard} />
			<ul style={{ listStyle: "none", padding: "0" }}>
				{tareas.map((elem) => {
					return (
						<Tarea
							key={elem.id}
							tarea={elem.item}
							descripcion={elem.item2}
							eliminarTarea={() => eliminarTarea(elem.id)}
						/>
					);
				})}
			</ul>
		</div>
	);
};

export default App;
