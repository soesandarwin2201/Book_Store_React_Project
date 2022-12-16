import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewBook } from '../redux/books/books';
import { addBooks } from '../redux/api';

function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addBooks({
        item_id: Math.random().toString(36).substring(2),
        title,
        author,
        category: 'fiction',
      })
    );
  };

  return (
    <>
      <h1>Add a book</h1>
      <form onSubmit={submitHandler}>
        <div className='row'>
          <div className='col'>
            <input
              type='text'
              className='form-control'
              placeholder='Book title'
              name='title'
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='col'>
            <input
              type='text'
              className='form-control'
              placeholder='Author'
              name='author'
              value={author}
              required
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className='col'>
            <button type='submit' className='btn btn-primary mb-2'>
              Add a book
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
