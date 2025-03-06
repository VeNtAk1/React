import React from 'react';

function App() {
	const isAuth = true;
	const hide = false;

	
	return <div>
		{isAuth && <p>text_1</p>}
		{!hide && <p>text_2</p>}
	</div>
}
export default App; 