import React from 'react';

function App() {
	const num1 = 3;
	const num2 = 2;
	const name = 'john';
	const surname = 'smit';
	const num = 4;


	return <>
		result: {num1 ** num2} <br></br>
		result: {name + ' ' + surname} <br></br>
		result: {Math.sqrt(num)}
	</>
}
export default App;