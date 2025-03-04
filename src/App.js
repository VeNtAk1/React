import React from 'react';

function App() {
	const obj = {name: 'john', surname: 'smit'};
	const attr = 'block';

	return <>
	<p>
		name: {obj.name} <br></br>
		name: {obj.surname}
	</p>
	<div id = {attr}>
		text
	</div>
	</>
}
export default App;