import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

// Application State - Genereated by reducers
// {
//   books: [{title: 'Harry Potter'}, {title: 'Javascript'}],
//   activeBook: {title: 'Javascript: The Good Parts'}
// }
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
