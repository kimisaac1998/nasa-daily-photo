import React, {useState, useEffect} from 'react';

function NasaDetails(props) {

const [nasa, setNasa] = useState(null);


useEffect(() => {
    const date = '2022-06-17';
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
            
        </div>
    );
}

export default NasaDetails;