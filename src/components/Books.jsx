import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './book';
import Form from './From';
import { getBookData } from '../redux/api';

function Books() {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();
   useEffect(() => {
    dispatch(getBookData());
   }, []);
  return (
    <>
      <ul className="books">
        {books.map((book) => (
          <li key={book.id}>
            <Book book={book} />
          </li>
        ))}
      </ul>
      <Form />
    </>
  );
}

export default Books;
