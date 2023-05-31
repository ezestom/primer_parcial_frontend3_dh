export const Tarea = ({ tarea, descripcion, eliminarTarea }) => {
	return (
		<li
			style={{
				backgroundColor: "lightgray",
				padding: "10px",
				listStyle: "none",
				maxWidth: "400px",
				borderRadius: "8px",
				width: "100%",
				margin: "0"
			}}>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}>
				<div style={{ fontWeight: "bold" }}>{"Título: " + tarea}</div>
				<div>{"Descripción: " + descripcion}</div>
				<button
					style={{
						backgroundColor: "red",
						color: "white",
						padding: "5px",
						border: "none",
						borderRadius: "5px",
					}}
					onClick={eliminarTarea}>
					Eliminar tarea
				</button>
			</div>
		</li>
	);
};
