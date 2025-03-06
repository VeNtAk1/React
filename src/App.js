import React from 'react';

function App() {
	const arr = [
		<li>1</li>,
		<li>2</li>,
		<li>3</li>,
		<li>4</li>,
		<li>5</li>,
		];

	const arr2 = [];

	for (let i = 0; i <= 5; i++){
		arr2.push(<p>{i}</p>)
	}
	return <>
		<ul>
			{ arr }
		</ul>
		
		<ul>
			{ arr2 }
		</ul>

	</>;
}
export default App; 