import React, { PropTypes } from 'react'
import Employee from '../components/Employee'

function EmployeesContainer({employees, matchName, onCorrect, onIncorrect}){
	return(
		<div className='col-sm-12 col-sm-offset-1'>
			{ employees.map((employee) => {
				return <Employee 
									name={employee.name} 
									url={employee.url} 
									matchName={matchName} 
									onCorrect={onCorrect}
									onIncorrect={onIncorrect}
									key={employee.name}
								/>
			}) }
		</div>
	)
}

EmployeesContainer.propTypes = {
	employees: PropTypes.array.isRequired,
	matchName: PropTypes.string.isRequired,
	onCorrect: PropTypes.func.isRequired,
	onIncorrect: PropTypes.func.isRequired
}

export default EmployeesContainer
