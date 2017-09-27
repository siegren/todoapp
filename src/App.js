import React, { Component } from 'react';
import './App.css';
// import Welcome from './Welcome.js';
// import Today from './Today.js';
// import Counter from './Counter.js';
import TodoForm from './Components/Todo/TodoForm'
import TodoList from './Components/Todo/TodoList'

class App extends Component {

		constructor(props){
		super(props);
		this.state = {
			list: ['eat', 'sleep', 'code']
		}
	}


  render() {
    return (
      <div>
       	<TodoForm />
       	<TodoList todo_data = {this.state.list} />
      </div>
    );
  }
}

export default App;
