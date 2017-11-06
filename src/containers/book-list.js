import React, { Component } from 'react';
import { connect } from 'react-redux';

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

// export the container
// connect takes a function and a component and produces a container
export default connect(mapStateToProps)(BookList);
