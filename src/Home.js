import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
		console.log('click');
		setFormState(initialFormState);
		navigate(`/details/${formState.date}`);
		console.log(formState.date, 'newformstate');
	}

	return (
		<div className='link'>
			<h1>Nasa photo</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor='dateInput'>Date: </label>
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
