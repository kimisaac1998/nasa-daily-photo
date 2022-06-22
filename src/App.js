import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import NasaDetails from './NasaDetails';
import NotFound from './NotFound';

function App() {


  const current = new Date();
  const currentDate = `${current.getFullYear()}-${
		current.getMonth() + 1
		}-${current.getDate()}`;


console.log(currentDate)


	return (
		<div className='App'>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to={`/details/${currentDate}`}>Today's Photo</Link>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route path='/' element={<Home />} />

				<Route path='/details/:date' element={<NasaDetails />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
