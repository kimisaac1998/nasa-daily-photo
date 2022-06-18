import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import React, { useState, useEffect } from 'react';
import NasaDetails from './NasaDetails';

function App() {
const initialFormState={
  date: ''
};
const [formState, setFormState] = useState(initialFormState)


	return (
		<div className='App'>
			<nav>
				<ul>
					<li>{/* link here */}</li>
				</ul>
			</nav>

			<Routes>
				<Route path='/' element={<Home formState={formState} setFormState={setFormState} initialFormState={initialFormState}/>} />

				<Route path='/details' element={<NasaDetails />} />
			</Routes>
		</div>
	);
}

export default App;
