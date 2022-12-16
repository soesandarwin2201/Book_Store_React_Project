/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/api';

function Book({ book }) {
  const dispatch = useDispatch();
  return (
    <section className="container">
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <button
        onClick={() => {
          dispatch(removeBook(book.id));
        }}
        type="button"
      >
        Delete
      </button>
    </section>
  );
}
Book.prototype = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Book;
