import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import { bookRemoved } from '../redux/books/books';
import PropTypes from 'prop-types';
import Categories from './Categories';

const Book = ({book}) => {
  const dispatch = useDispatch();
 
  return (
    <>
      <section className='container'>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <Categories />
       <button onClick={() => {dispatch(bookRemoved(book.id))}}>Delete</button>
      </section>
    </>
  );
}

Book.prototype = {
  title : PropTypes.string.isRequired,
  author : PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};
 
export default Book;