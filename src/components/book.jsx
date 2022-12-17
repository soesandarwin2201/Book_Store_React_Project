/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/api';

function Book({ book }) {
  const dispatch = useDispatch();
  const [percentage, setPercentage] = useState(0);

  const updateProgress = () => {
    if (percentage >= 100) {
      setPercentage(100);
    } else {
      setPercentage(() => percentage + 10);
    }
  };

  return (
    <section className='container'>
      <div class='row align-items-center book'>
        <div class='col justify-content-center'>
          <div className='title-gp'>
            <h5 className='category'>{book.category}</h5>
            <h3 className='title'>{book.title}</h3>
            <p className='author'>{book.author}</p>
          </div>
          <div className='btn-gp'>
            <button type='button' className='small-btn'>
              Comment
            </button>
            <button
              className='small-btn'
              onClick={() => {
                dispatch(removeBook(book.id));
              }}
              type='button'
            >
              Delete
            </button>
            <button type='button' className='small-btn'>
              Edit
            </button>
          </div>
        </div>
        <div class='col justify-content-center'>
          <div className='circle-container d-flex'>
            <div className='circle'></div>
            <div className='circle-inner'>
              <p className='percent'>
                {' '}
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage} %`}
                  className='percentage'
                />
              </p>
              <p>Completed</p>
            </div>
          </div>
        </div>
        <div class='col justify-content-center'>
          <div className='progress-container'>
            <p>CURRENT CHAPTER</p>
            <p className='intro'>Introduction</p>
            <button className='btn btn-primary btn-md' onClick={updateProgress}>
              UPDATE PROGRESS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
Book.prototype = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Book;
