import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; 

class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li 
					key={book.title}
					onClick={() => this.props.selectBook(book) }
					className="list-group-item">
					{book.title}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}


//take application state as argument and whatever return from it, it'll show up in this.props in render/
//if application state changes, this container will instantly re-renders will new list of books
//another important factor to use connect to create a container is when an applicaion state changes, the object in the state function will be assigned to this.props
function mapStateToProps(state){
	//whatever is returned will show up as props inside of booklist
	//this is the connect between redux and container
	//state.books is the array of objects
	return{
		books: state.books 
	};
}

//anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch){
	//whenever selectBook is called, the result should be passed to all of reducers 
	return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. Make it available as a prop.
//this is the connect between redux and container.
//connects takes a funciton (mapStateToProps) and component (BookList) and produces a container and container is a component that is aware of the state that's in redux.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);


