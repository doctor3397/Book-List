// Action Creator: a function that returns an action
// Action: an object that flows through all the different reducers
// Reducer: use different action to produce different values for its state

// Create an action creator and make sure it's called when a book is clicked on
export function selectBook(book) {
  // console.log('A book has been selected: ', book.title);

  // selectBook is an ActionCreator, it needs to retun and action,
  // an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
