import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookAdded } from '../redux/books/books';

function Form() {
  const dispatch = useDispatch();
  const [book, setBook] = useState({ title: '', author: '' });

  const submitHandler = (e) => {
    e.preventDefault();
    const newBook = {
      ...book,
      id: Math.random().toString(36).substring(2),
    };
    dispatch(bookAdded(newBook));
    setBook({
      title: '',
      author: '',
    });
  };

  const onchangeHandler = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Add a book</h1>
      <form onSubmit={submitHandler}>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Book title"
              name="title"
              value={book.title}
              required
              onChange={onchangeHandler}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Author"
              name="author"
              value={book.author}
              required
              onChange={onchangeHandler}
            />
          </div>
          <div className="col">
            <button type="submit" className="btn btn-primary mb-2">
              Add a book
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
