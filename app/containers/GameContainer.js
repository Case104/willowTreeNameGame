import React, { Component } from 'react'
import MainContainer from '../components/MainContainer'
import Name from '../components/Name'
import Employee from '../components/Employee'
import Loading from '../components/Loading'
import { getAllEmployees, selectNumEmployees, selectRandomEmployee } from '../utils/helpers'

class GameContainer extends Component {
	constructor(){
		super()
		this.state = {
			isLoading: true,
			currentEmployees: [],
			selectedEmployee: null
		}
	}

	async componentDidMount(){
		try {
			const employees = await getAllEmployees()
			const currentEmployees = selectNumEmployees(employees)
			const selectedEmployee = selectRandomEmployee(currentEmployees)
			this.setState({
				isLoading: false,
				currentEmployees,
				selectedEmployee
			})
		} catch(error) { console.warn('Error in GameContainer', error) }
	}

	render(){
		if (this.state.isLoading){
			return <Loading />
		}
		return (
			<MainContainer>
				<h1>Willow Tree Name Game</h1>
				<Name name={this.state.selectedEmployee.name} />
				<div className='col-sm-12 col-sm-offset-1'>
					{ this.state.currentEmployees.map((employee) => {
						return <Employee 
											name={employee.name} 
											url={employee.url} 
											matchName={this.state.selectedEmployee.name} 
											key={employee.name}
										/>
					}) }
				</div>
			</MainContainer>
		)
	}
}

export default GameContainer