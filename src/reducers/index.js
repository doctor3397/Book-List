import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

// Application State - Genereated by reducers
// {
//   books: [{title: 'Harry Potter'}, {title: 'Javascript'}],
//   activeBook: {title: 'Javascript: The Good Parts'}
// }
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
