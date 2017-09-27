import React, { Component } from 'react';
import './App.css';
import TodoForm from './Components/Todo/TodoForm'
import TodoList from './Components/Todo/TodoList'
import SearchTodo from './Components/Todo/SearchTodo'

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			list: ['eat', 'sleep', 'code']
		}
	}

addNewTodo(todo){
	console.log(todo);
	this.setState({
		list: this.state.list.concat(todo)
	});
}

  render() {
    return (
      <div>
      	<SearchTodo />
      	<h1>My Todos</h1>
       	<TodoForm addNewTodoFunc={this.addNewTodo.bind(this)} />
       	<TodoList todo_data = {this.state.list} />
      </div>
    );
  }
}

export default App;
