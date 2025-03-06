import React from 'react';

function App() {
	function getDigitsSum(num1, num2){
		return num1 + num2
	}

	const num_1 = 61;
	const num_2 = 62;
	
	
	return <div>
		{ getDigitsSum(num_1, num_2)}
	</div>
}
export default App; 