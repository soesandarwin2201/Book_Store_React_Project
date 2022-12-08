import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <>
        <h1></h1>
        <form>
          <div class='row'>
            <div class='col'>
              <input
                type='text'
                class='form-control'
                placeholder='Book title'
              />
            </div>
            <div class='col'>
              <input type='text' class='form-control' placeholder='Author' />
            </div>
            <div class='col'>
              <button type='submit' class='btn btn-primary mb-2'>
                Add a book
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default Form;
