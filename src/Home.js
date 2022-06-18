import React from 'react';
import { Link } from 'react-router-dom';

function Home({ formState, setFormState, initialFormState }) {
	function handleChange(event) {
		setFormState({ ...formState, date: event.target.value });
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log('click');
		console.log(formState);
		setFormState(initialFormState);
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
