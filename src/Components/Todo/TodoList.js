import React, { Component } from 'react';

class TodoList extends Component{


	render(){
		return(
			<ul id="myUl">
				{this.props.todo_data.map((todo, i) => <li className="name" key={i}>{todo}</li>)}
			</ul>

			)
	}
}

export default TodoList;