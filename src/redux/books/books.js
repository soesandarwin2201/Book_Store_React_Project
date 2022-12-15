/* eslint-disable */
const ADD_BOOK = 'bookAdded';
const REMOVE_BOOK = 'bookRemoved';
const booksArray = [
  {
    id: '1',
    title : 'Deep work',
    Author : 'Soe Sandar Win'
  },
  {
    id: '2',
    title : 'Successful habit',
    Author : 'Soe Moe Naing'
  },
  {
    id:'3',
    title : 'Billion Dollar app',
    Author : 'Alyssa'
  },
];

export const bookAdded = (book) => ({
  type: ADD_BOOK,
  payload: book ,
});

export const bookRemoved = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const bookReducer = (state = booksArray, action) => {
  if (action.type === ADD_BOOK) {
    return [...state, action.payload];
  }
  if (action.type === REMOVE_BOOK) {
    return state.filter((book) => book.id !== action.id);
  }
  return state;
};

 export default bookReducer;


