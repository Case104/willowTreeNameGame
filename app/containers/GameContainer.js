import React, { Component } from 'react'
import Employee from '../components/Employee'
import Loading from '../components/Loading'
import { getAllEmployees } from '../utils/helpers'
import { selectNumEmployees } from '../utils/helpers'

class GameContainer extends Component {
	constructor(){
		super()
		this.state = {
			isLoading: true,
			currentEmployees: []
		}
	}

	async componentDidMount(){
		try {
			const employees = await getAllEmployees()
			const currentEmployees = selectNumEmployees(employees)
			this.setState({
				isLoading: false,
				currentEmployees
			})
		} catch(error) { console.warn('Error in GameContainer', error) }
	}

	render(){
		if (this.state.isLoading){
			return <Loading />
		}

		return (
			<div>
				{this.state.currentEmployees.map(function(employee){
					return <Employee name={employee.name} url={employee.url} key={employee.name}/>
				})}
			</div>
		)

	}

}

export default GameContainer