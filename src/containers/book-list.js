import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

// Container: a react/smart component that has a direct connection to the state managed by redux
// Promote BookList from a Component into a Container
class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      )
    });
  }

  render() {
    // console.log(this.props.asdf); // -> '123'
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// Glue between React and Redux
// Takes Application state and return props inside the containers
function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  return {
    // asdf: '123'
    books: state.books
  };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {

  // Make sure the action that is generated by the action creator
  // ends up flowing through all the different reducers
  // Whenever selectBook is called, the return values should flow through
  // to all of the reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// export the container
// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
