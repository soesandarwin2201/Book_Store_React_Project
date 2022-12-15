import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/categories' element={<Categories />}></Route>
        <Route path='/' element={<Books />}></Route>
      </Routes>
    </>
  );
}

export default App;
