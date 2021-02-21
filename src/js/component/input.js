import React, { useState } from "react";

export function Input() {
	const [task, setTask] = useState("");
	const [todo, setTodo] = useState([]);

	const handlerEnterKey = event => {
		if (event.key == "Enter" && task != "") {
			setTodo([...todo, task]);
			setTask("");
		}
	};
	const cancelElementHandler = element => {
		let newList = todo.filter(oneToDo => oneToDo != element);
		setTodo(newList);
	};
	return (
		<React.Fragment>
			<input
				className="col-12"
				size="22"
				value={task}
				placeholder="What needs to be done?"
				onChange={() => setTask(event.target.value)}
				onKeyPress={() => handlerEnterKey(event)}
			/>
			{todo.map((element, index) => {
				return (
					<div key={index} className="d-flex justify-content-between">
						{element}
						<button
							type="button"
							onClick={() => cancelElementHandler(element)}
						/>
					</div>
				);
			})}
			<h5>You have {todo.length} tasks to do!</h5>
		</React.Fragment>
	);
}
