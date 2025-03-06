import React from 'react';

function App() {
	const arr = [1, 2, 3, 4, 5];
	
	const res = arr.map(function(item, index) {
		return <p key={index}>{item}</p>;
	});
	
	return <div>
		{res}
	</div>;
}
export default App; 