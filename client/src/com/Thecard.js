import React from 'react'

function Thecard(props) {
	console.log(props)
	return (
		<div class="card"> 
		<div class="container" key={props.key}>
		<h1>{props.head}</h1>
		<img src={props.url} alt="no pic"/>
		<br></br>
		{props.content}
		<h3>{props.dates}</h3>
		<h1>{props.key}</h1>
		
		</div>
		</div>
	)
}

export default Thecard
