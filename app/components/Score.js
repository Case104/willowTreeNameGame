import React, { PropTypes } from 'react'

function Score({score}){
	return(
		<div className='h2'>
			Current Score: {score}
		</div>
	)
}

Score.propTypes = {
	score: PropTypes.number.isRequired
}

export default Score