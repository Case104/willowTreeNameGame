import React, { Component } from 'react'
import MainContainer from '../components/MainContainer'
import Name from '../components/Name'
import EmployeesContainer from './EmployeesContainer'
import Loading from '../components/Loading'
import { getAllEmployees, selectNumEmployees, selectRandomEmployee } from '../utils/helpers'

class GameContainer extends Component {
	constructor(){
		super()
		this.state = {
			isLoading: true,
			allEmployees: [],
			currentEmployees: [],
			selectedEmployee: null
		}
	}

	async componentDidMount(){
		try {
			const allEmployees = await getAllEmployees()
			const currentEmployees = selectNumEmployees(allEmployees)
			const selectedEmployee = selectRandomEmployee(currentEmployees)
			this.setState({
				isLoading: false,
				allEmployees,
				currentEmployees,
				selectedEmployee
			})
		} catch(error) { console.warn('Error in GameContainer', error) }
	}

	handleCorrect(){
		const newEmployees = selectNumEmployees(this.state.allEmployees)
		this.setState({
			currentEmployees: newEmployees,
			selectedEmployee: selectRandomEmployee(newEmployees)
		})
	}

	render(){
		if (this.state.isLoading){
			return <Loading />
		}
		return (
			<MainContainer>
				<h1>Willow Tree Name Game</h1>
				<Name name={this.state.selectedEmployee.name} />
				<EmployeesContainer 
					employees={this.state.currentEmployees} 
					matchName={this.state.selectedEmployee.name}
					onCorrect={() => this.handleCorrect()}
				/>
			</MainContainer>
		)
	}
}

export default GameContainer