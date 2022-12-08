import React, { Component } from 'react';
import Book from './book';
import Form from './From';

class Books extends Component {
 state = {  
  title : 'Alyssa',
  author : '6 months away from success'
 } 
 render() { 
  return (
    <>
      <ul className='books'>
        <li>
          <Book title={this.state.title} author={this.state.author} />
        </li>

        <button className='btn btn-danger btn-lg m-2'>Remove</button>
      </ul>
      <Form />
    </>
  );
 }
}
 
export default Books;