import React from 'react';

function App() {
	function showMess(text) {
		alert(text);
	}

	function func(event) {
		console.log(event.target); // объект с событием
	}

	return <div>
		<button onClick={() => showMess("1")}>act1</button>
		<button onClick={() => showMess("2")}>act2</button>
		<button onClick={() => showMess("3")}>act3</button>
		<button onClick={func}>act</button>
	</div>;
}
export default App; 