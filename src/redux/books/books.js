import { createSlice } from '@reduxjs/toolkit';
import { getBookData, addBooks, removeBook } from '../api';

const initialState = {
  books: [],
  loading: true,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (books) => {
    books.addCase(getBookData.fulfilled, (state, action) => ({
      ...state,
      books: action.payload,
    }));
    books.addCase(addBooks.fulfilled, (state, action) => ({
      ...state,
      books: [...state.books, action.payload],
    }));
    books.addCase(removeBook.fulfilled, (state, action) => ({
      ...state,
      books: [...state.books.filter((book) => book.id !== action.payload)],
    }));
  },
});
// export const { addBooks } = booksSlice.actions;
export default booksSlice.reducer;
