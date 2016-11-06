import React from 'react'

function Name({name}){
	return(
		<div>
			<h2 className='strong'>Who is <span className='text-primary'>{name}</span>?</h2>
		</div>
	)
}

export default Name