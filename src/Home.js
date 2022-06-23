import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";

function Home(props) {
	let navigate = useNavigate();
	const initialFormState = {
		date: '',
	};
	const [formState, setFormState] = useState(initialFormState);

	function handleChange(event) {
		setFormState({ ...formState, date: event.target.value });
	}

	function handleSubmit(event) {
		event.preventDefault();
		setFormState(initialFormState);
		navigate(`/details/${formState.date}`);
	}

	return (
		<div className='link'>
			<title>Nasa Photo Home</title>
			<h1>Nasa Daily Photo</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor='dateInput'>Input Date: </label>
				<input
					type='date'
					id='dateInput'
					value={formState.date}
					onChange={handleChange}
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}

export default Home;
