import { useState } from "react";

export const Card = ({ agregarAlCard }) => {
	const [item, setItem] = useState("");
	const [item2, setItem2] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		if (item !== "" && item2 !== "") {
			agregarAlCard(item, item2);
			setItem2("");
			setItem("");
		} else {
			alert("No se puede agregar una tarea sin nombre o descripción");
		}
	}

	return (
		<div
			className="card"
			style={{
				backgroundColor: "lightgray",
				padding: "10px",
				borderRadius: "5px",
				maxWidth: "400px",
				display: "grid",
				placeContent: "center"
				
			}}>
			<h3 style={{ marginBottom: "10px" }}>Lista de tareas</h3>
			<h4 style={{ marginBottom: "10px" }}>
				Ingrese su tarea y descripción sin omitir ningún campo.
			</h4>
			<form
				onSubmit={handleSubmit}
				style={{ display: "flex", flexDirection: "column" }}>
				<input
					type="text"
					value={item}
					onChange={(e) => setItem(e.target.value)}
					placeholder="Nombre de la tarea"
					style={{ marginBottom: "10px", padding: "5px" }}
				/>
				<input
					placeholder="Descripción de la tarea"
					type="text"
					value={item2}
					onChange={(e) => {
						setItem2(e.target.value);
					}}
					style={{ marginBottom: "10px", padding: "5px" }}
				/>
				<button
					type="submit"
					style={{
						backgroundColor: "dodgerblue",
						color: "white",
						padding: "5px",
						border: "none",
						borderRadius: "5px",
						cursor: "pointer",
					}}>
					Agregar Tarea
				</button>
			</form>
		</div>
	);
};
