import React from 'react';

function App() {
	const arr = ['a', 'b', 'c', 'd', 'e'];
	const res = [];

	for (const elem in arr){
		res.push(<p>{arr[elem]}</p>)
	}
	return <>
		<ul>
			{res}
		</ul>

	</>;
}
export default App; 