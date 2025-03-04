import React from 'react';

function App() {
	const name = 'user';
	const age  = '30';
	const arr = [1, 2, 3, 4, 5];

	return <>
	<div>
		name: { name } <br></br>
		age: { age }
	</div>,
	<ul>
		<li>{arr[0]}</li>
		<li>{arr[1]}</li>
		<li>{arr[2]}</li>
		<li>{arr[3]}</li>
		<li>{arr[4]}</li>
	</ul>
	</>
}
export default App;