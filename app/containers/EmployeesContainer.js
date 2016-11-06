import React from 'react'
import Employee from '../components/Employee'

function EmployeesContainer({employees, matchName, onCorrect}){
	return(
		<div className='col-sm-12 col-sm-offset-1'>
			{ employees.map((employee) => {
				return <Employee 
									name={employee.name} 
									url={employee.url} 
									matchName={matchName.name} 
									onCorrect={onCorrect}
									key={employee.name}
								/>
			}) }
		</div>
	)
}

export default EmployeesContainer
