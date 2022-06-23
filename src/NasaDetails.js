import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom"
import "./NasaDetails.css"
import {saveAs} from "file-saver"

function NasaDetails(props) {

	const saveFile = () => {
		saveAs(nasa.url)
	}

	const {date} = useParams();

const [nasa, setNasa] = useState(null);
useEffect(() => {
   
	const url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${process.env.REACT_APP_IEX_KEY}`;

	fetch(url)
		.then((res) => res.json())
		.then((res) => {
			setNasa(res)
		})
		.catch((err) => {
			console.error(err);
		});
}, []);

if (!nasa) {
	return;
}




    return (
			<div className='details'>
				<h2>{nasa.title}</h2>
				<h3>{nasa.copyright}</h3>
				<h4>{nasa.date}</h4>
				<p>{nasa.explanation}</p>
				<img src={nasa.url} alt={nasa.title} />
				<button onClick={saveFile}>Download</button>
			</div>
		);
}

export default NasaDetails;