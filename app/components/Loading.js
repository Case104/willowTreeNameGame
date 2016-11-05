import React, { Component } from 'react'
import { loadingStyles } from '../styles'

class Loading extends Component{
	constructor(props){
		super()
		this.origionalText = props.text
		this.state = {
			text: this.origionalText
		}
	}

	componentDidMount(){
		const stopper = this.originalText + '...'
		this.interval = setInterval(() => {
			if (this.state.text === stopper){
				this.setState({
					text: 'Loading'
				})
			} else {
				this.setState({
					text: this.state.text + '.'
				})
			}
		}, this.props.speed)
	}

	componentWillUnmount(){
		clearInterval(this.interval)
	}

	render(){
		return (
			<div style={loadingStyles.container}>
				<p style={loadingStyles.content}>{this.state.text}</p>
			</div>
		)
	}
}

Loading.defaultProps = {
	text: 'Loading',
	speed: 300
}

export default Loading