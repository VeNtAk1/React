import React from 'react';

function App() {
	function func(arg, event) {
		console.log(arg, event);
	}
	function func_2(arg, event) {
		console.log(event, arg);
	}

	return <>
		<button onClick={event => func('eee', event)}>act</button>
		<button onClick={event => func_2('eee', event)}>act</button>
	</>;
}
export default App; 