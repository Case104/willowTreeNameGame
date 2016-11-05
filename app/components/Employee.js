import React, { Component } from 'react'

function Employee({name, url}){
	return(
		<div>
			<p>{name}</p>
			<img src={url} className='img-rounded img-responsive' />
		</div>
	)
}

export default Employee