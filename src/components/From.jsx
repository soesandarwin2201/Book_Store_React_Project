import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBooks } from '../redux/api';

function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  
  const clearForm = () => {
    setTitle('');
    setAuthor('');
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addBooks({
        item_id: Math.random().toString(36).substring(2),
        title,
        author,
        category,
      })
    );
    clearForm();
  };
  return (
    <section className='form'>
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
            <select
              class='form-select'
              aria-label='Default select example'
              name='category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option selected>Thriller</option>
              <option value='Horror'>Horror</option>
              <option value='Crime'>Crime</option>
              <option value='Mystery'>Mystery</option>
            </select>
          </div>
          <div className='col'>
            <button type='submit' className='btn btn-primary mb-2 btn-lg'>
              Add a book
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Form;
