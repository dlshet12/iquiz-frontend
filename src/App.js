import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Categories from './pages/quiz categories/categories';
import Score from './pages/score/score';
import Questions from './pages/quiz questions/questions';
import './App.css';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Categories" element={<Categories />} />
      <Route path="/Score" element={<Score />} />
      <Route path="/Questions" element={<Questions />} />
    </Routes>
  );
}

export default App;
