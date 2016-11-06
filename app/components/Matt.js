import React, { PropTypes } from 'react'

function MattModeBtn({createMattRound}){
	return(
		<div>
			<button 
				type='button' 
				className='btn btn-lg btn-success'
				style={{marginTop: '20px'}}
				onClick={createMattRound}
			>
				Matt Mode
			</button>
		</div>
	)
}

MattModeBtn.propTypes = {
	createMattRound: PropTypes.func.isRequired
}

export default MattModeBtn