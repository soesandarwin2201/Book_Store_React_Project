import React, { Component } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { completeStatus } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((check) => check.status);
  console.log(status);
  const dispatch = useDispatch();

  return (
    <>
      <button
        type='button'
        className='btn-sm btn-primary m-2'
        onClick={() => {
          dispatch(completeStatus());
        }}
      >
        Check Status{' '}
      </button>
      <p>{status}</p>
    </>
  );
};

export default Categories;
