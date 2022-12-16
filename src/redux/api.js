/* eslint-disable */
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_ID = 'yOqvP2724gDuZdg0dbdw';
const bookUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_ID}/books`;

const formatedBooks = (data) =>
  Object.entries(data).map((arr) => {
    const [id, [{ title, author }]] = arr;
    return { id, title, author };
  });

export const getBookData = createAsyncThunk('books/getBookData', async () => {
  const response = await fetch(bookUrl);
  const data = await response.json();
  return formatedBooks(data);
});

export const addBooks = createAsyncThunk('books/addBooks', async (newBook) => {
  await fetch(bookUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook),
  });
  const response = await fetch(bookUrl);
  const data = await response.json();
  return formatedBooks(data).find(book => book.id === newBook.item_id);
});

export const removeBook = createAsyncThunk('books/removebook', async (id) => {
  const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/yOqvP2724gDuZdg0dbdw/books/${id}`;
  await fetch(url, {
    method: 'DELETE',
  });
  return id;
});
