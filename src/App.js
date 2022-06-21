import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import React, { useState, useEffect } from 'react';
import NasaDetails from './NasaDetails';

function App() {


	return (
		<div className='App'>
			

			<Routes>
				<Route path='/' element={<Home />} />

				<Route path='/details/:date' element={<NasaDetails />} />
			</Routes>
		</div>
	);
}

export default App;
