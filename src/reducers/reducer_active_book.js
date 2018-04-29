// State argument is not application state, only the state
// this reducer is responsible for
export default function(state = null , action) {  // if the state is undefined, set it to null
  switch (action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }

  return state;
}

// Action Creator
// {
//   type: 'BOOK_SELECTED',
//   payload: {title: 'book 2'}
// }
