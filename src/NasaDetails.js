import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom"

function NasaDetails(props) {

	const {date} = useParams();

const [nasa, setNasa] = useState(null);
useEffect(() => {
   
	const url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${process.env.REACT_APP_IEX_KEY}`;

	fetch(url)
		.then((res) => res.json())
		.then((res) => {
			setNasa(res)
			console.log(res);
		})
		.catch((err) => {
			console.error(err);
		});
}, []);

if (!nasa) {
	return;
}





    return (
        <div>

           <h1>{nasa.title}</h1>
           <h2>{nasa.copyright}</h2>
		   <h2>{nasa.date}</h2>
		   <p>{nasa.explanation}</p> 
		   <img src={nasa.url} alt={nasa.title} />
        </div>
    );
}

export default NasaDetails;