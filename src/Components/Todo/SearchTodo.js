import React, { Component } from 'react';

class SearchTodo extends Component{

	constructor(props){
		super(props);
		this.state = {
			text: ''
		}

	}

	search(){
		var input = document.getElementById('myInput');

	    var filter = input.value.toUpperCase();
	    var list = document.getElementsByTagName('li');
	    for (var i = 0; i < list.length; i++) {
	        var name = list[i].innerHTML;
	        if (name.toUpperCase().indexOf(filter) >= 0) 
	            list[i].style.display = 'list-item';
	        else
	            list[i].style.display = 'none';
	        // console.log();
	    }

	}
	

	render(){
		return(
				<div>
					<h2>Search</h2>
					<input id='myInput' onChange={() => this.search()}/>
				</div>

			) 
	}
}

export default SearchTodo;