import React, { Component } from 'react';

class Book extends Component {

 render() { 
  const { title , author } = this.props;
  return (
    <>
    <section className="container">
     <h2>{title}</h2>
     <p>{author}</p>
    </section>
    </>
  );
 }
}
 
export default Book;