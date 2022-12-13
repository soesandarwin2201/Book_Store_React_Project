/* eslint-disable */
const ADD_BOOK = 'bookAdded';
const REMOVE_BOOK = 'bookRemoved';
const booksArray = [];

export const bookAdded = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const bookRemoved = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

const bookReducer = (state = booksArray, action) => {
  if (action.type === ADD_BOOK) {
    return [...state, action.payload];
  }
  if (action.type === REMOVE_BOOK) {
    return [...state.filter((book) => book.id !== action.id)];
  }
  return state;
};

export default bookReducer;
