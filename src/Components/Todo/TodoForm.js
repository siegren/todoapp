import React, { Component } from 'react';

class TodoForm extends Component{

	constructor(props){
		super(props);
		this.state = {
			text: ''
		}
	}

	addTodo(){
		console.log('working');
	}

	updateText(event){
		console.log('working');
		console.log(event.target.value);
		this.setState({text: event.target.value});
	}

	render(){
		return(
				<div>
					<input onChange={(event) => this.updateText(event)} value={this.state.text}/>
					<button onClick = {() => this.addTodo() } >ADD</button>
				</div>

			) 
	}
}

export default TodoForm;