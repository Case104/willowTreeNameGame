import React, { Component } from 'react'
import MainContainer from '../components/MainContainer'
import Name from '../components/Name'
import Score from '../components/Score'
import EmployeesContainer from './EmployeesContainer'
import Matt from '../components/Matt'
import Loading from '../components/Loading'
import { getAllEmployees, selectNumEmployees, selectRandomEmployee, getMatts } from '../utils/helpers'

class GameContainer extends Component {
	constructor(){
		super()
		this.state = {
			isLoading: true,
			allEmployees: [],
			currentEmployees: [],
			selectedEmployee: null,
			score: 0
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
				selectedEmployee,
			})
		} catch(error) { console.warn('Error in GameContainer', error) }
	}

	handleCorrect(){
		const newEmployees = selectNumEmployees(this.state.allEmployees)
		this.setState({
			currentEmployees: newEmployees,
			selectedEmployee: selectRandomEmployee(newEmployees),
			score: this.state.score + 1
		})
	}

	handleIncorrect(){
		this.setState({
			score: this.state.score - 1
		})
	}

	createMattRound(){
		const matts = selectNumEmployees(getMatts(this.state.allEmployees))
		this.setState({
			currentEmployees: matts,
			selectedEmployee: selectRandomEmployee(matts)
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
				<Score score={this.state.score} />
				<EmployeesContainer 
					employees={this.state.currentEmployees} 
					matchName={this.state.selectedEmployee.name}
					onCorrect={() => this.handleCorrect()}
					onIncorrect={() => this.handleIncorrect()}
				/>
				<Matt createMattRound={() => this.createMattRound()}/>
			</MainContainer>
		)
	}
}

export default GameContainer