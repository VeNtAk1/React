import React from 'react';

function App() {
	let text;
	const age = 18;

	if (age > 19){
		text = <p>text_1</p>
	}
	else{
		text = <p>text_2</p>
	}
	return <div>
		{ text }
	</div>
}
export default App; 