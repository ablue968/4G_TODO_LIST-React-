import React from "react";
import { Input } from "./input.js";

//recuerda importar el {createdList} debajo del input
// usar los componentes visuales de manera separada, si los modifico lo hago en ese componente separado y no en home

//create your first component
export function Home() {
	return (
		<React.Fragment>
			<h1 className="toCenter">TODOS!</h1>
			<Input />
		</React.Fragment>
	);
}
