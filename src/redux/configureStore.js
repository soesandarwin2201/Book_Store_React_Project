import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import bookReducer from './books/books';
import statusReducer from './categories/categories';

const reducer = combineReducers({
 bookReducer,
 statusReducer,
});

const store = configureStore({ reducer});

export default store;
