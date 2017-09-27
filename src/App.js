import React, { Component } from 'react';
import './App.css';
import TodoForm from './Components/Todo/TodoForm';
import TodoList from './Components/Todo/TodoList';


class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			list: ['eat', 'sleep', 'code'],
			search: ['eat', 'sleep', 'code']
			}
	}

addNewTodo(todo){
	console.log(todo);
	this.setState({
		list: this.state.list.concat(todo)
	});
	this.setState({
		search: this.state.search.concat(todo)
	});
}

	search(event){


 //  	const filterItems = (query) => {
	//   return this.state.list.filter((el) =>
	//     el.toLowerCase().indexOf(query.toLowerCase()) > -1
	//   );
	// }
	var items = this.state.list;

	var filterItems = items.filter(function(todo){
	  return todo.includes(event.target.value);
	});


	this.setState({
		search: filterItems
	});

	// this.setState({
	// 	search: filterItems(event.target.value)
	// });

	// console.log(filterItems(event.target.value));
	console.log(event.target.value);

	}

  render() {
    return (
      <div>
      <h2>Search</h2>
					<input placeholder="Search..." onChange={(event) => this.search(event)}/>

        	<h1>My Todos</h1>
       	<TodoForm addNewTodoFunc={this.addNewTodo.bind(this)} />
       	<TodoList todo_data = {this.state.search} />
      </div>
    );
  }
}

export default App;
