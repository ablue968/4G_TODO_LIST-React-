import React, { useState } from "react";

export function Input() {
	const [task, setTask] = useState("");
	const [todo, setTodo] = useState([]);

	const handlerEnterKey = event => {
		if (
			event.key == "Enter" &&
			task != "" &&
			task != setTodo([...todo, task])
		) {
			setTodo([...todo, task]);
			setTask("");
		}
	};
	const cancelElementHandler = element => {
		let newList = todo.filter(oneToDo => oneToDo != element);
		setTodo(newList);
	};
	return (
		<>
			<input
				value={task}
				onChange={() => setTask(event.target.value)}
				onKeyPress={() => handlerEnterKey(event)}
			/>
			{todo.map((element, index) => {
				return (
					<div key={index}>
						{element}{" "}
						<button
							type="button"
							onClick={() => cancelElementHandler(element)}>
							x
						</button>
					</div>
				);
			})}
			<h5>You have {todo.length} tasks to do!</h5>
		</>
	);
}
