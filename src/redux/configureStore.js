import { combineReducers, configureStore } from '@reduxjs/toolkit';

import bookReducer from './books/books';
import statusReducer from './categories/categories';

const reducer = combineReducers({
  books: bookReducer,
  status: statusReducer,
});

const store = configureStore({ reducer });

export default store;
