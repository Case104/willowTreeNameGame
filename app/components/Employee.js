import React, { Component } from 'react'
import { correctEmployee, wrongEmployee }from '../styles'

class Employee extends Component{
	constructor(props){
		super()
		this.matchName = props.matchName
		this.name = props.name
		this.url = props.url
		this.onCorrect = props.onCorrect
		this.state = {
			selected: false
		}
	}

	handleSelect(){
		this.setState({
			selected: true
		})
		if (this.props.name === this.props.matchName){
			setTimeout(() => this.props.onCorrect(), 2000);
		}
	}

	render(){
		if (this.state.selected === true && this.props.name === this.props.matchName){
			return (
				<div className='col-sm-2'>
					<img src={this.props.url} className='img-thumbnail' style={correctEmployee}/>
					<h3 className='bg-success text-success'>{this.props.name}</h3>
				</div>
			)
		}

		if (this.state.selected === true){
			return (
				<div className='col-sm-2'>
					<img src={this.props.url} className='img-thumbnail' style={wrongEmployee}/>
					<h3 className='bg-danger text-danger'>{this.props.name}</h3>
				</div>
			)
		}

		return(
			<div className='col-sm-2'
			onClick={() => this.handleSelect()}>
				<img src={this.props.url} className='img-thumbnail' />
			</div>
		)
	}
}

export default Employee