import React from 'react';
import Book from './book';
import Form from './From';
import { useSelector } from 'react-redux';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <>
      <ul className='books'>
        {books.map((book) => (
          <li key={book.id} >
            <Book book={book} />
          </li>
        ))}
      </ul>
      <Form />
    </>
  );
};

export default Books;
