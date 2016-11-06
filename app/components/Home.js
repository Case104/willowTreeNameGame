import React from 'react'
import MainContainer from './MainContainer'
import { Link } from 'react-router'

function Home() {
	return (
		<MainContainer>
			<h1>Willow Tree Name Game</h1>
			<p className='lead'>By Jonathan Case</p>
			<Link to='/game'>
				<button type='button' className='btn btn-lg btn-success'>Play</button>
			</Link>
		</MainContainer>
	)
}

export default Home