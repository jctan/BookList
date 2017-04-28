import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	 render() {
	 	if(!this.props.book){
	 		return <div>Select a book to get stared.</div>;
	 	}

	 	return (
	 		<div>
	 			<h3> Details for: </h3>
	 			<div>Title: {this.props.book.title}</div>
	 			<div>Pages: {this.props.book.pages}</div>
	 		</div>
	 	);
	 }
}

// mapping application state to props of BookDetail component at the top and return as this.props /
function mapStateToProps(state){
	return {
		book: state.activeBook
	};
}

export default connect(mapStateToProps) (BookDetail);