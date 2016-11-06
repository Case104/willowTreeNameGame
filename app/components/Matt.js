import React, { PropTypes } from 'react'

function Matt({createMattRound}){
	return(
		<div>
			<button 
				type='button' 
				className='btn btn-lg btn-success'
				style={{marginTop: '20px'}}
				onClick={createMattRound}
			>
				Matt Round
			</button>
		</div>
	)
}

Matt.propTypes = {
	createMattRound: PropTypes.func.isRequired
}

export default Matt