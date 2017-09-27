import React, { Component } from 'react';

class Counter extends Component{

	constructor(props){
		super(props);
		this.state = {
			counter: 0
		}

		// this.count = this.count.bind(this);
	}

	count(){
		this.setState({
			counter: this.state.counter + 1
		});
		console.log('working');
	}

	render(){
		return(
			<div>
				<h1>{this.state.counter}</h1>
				<button onClick = {() => this.count()}>ADD</button>
			</div>

			) 
	}
}

export default Counter;