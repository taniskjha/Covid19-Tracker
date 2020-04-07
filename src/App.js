import React from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import BB from './Components/BB';

import CoronaState from './Components/Context/CoronaState';

function App() {
	return (
		<CoronaState>
			<div className="container">
				<Navbar />
				<BB />
			</div>
		</CoronaState>
	);
}

export default App;
