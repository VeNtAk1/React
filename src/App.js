import React from 'react';

function App() {
	let num = 18;
	let text;

	if (num >= 18){
		const isAdult = true;
		if (isAdult){
			text = <p>text_1</p>
		}
	}
	else{
		<p>Тебе нет 18 лет</p>
	}
		
	
	return <>
		{text}
	</>
}
export default App;