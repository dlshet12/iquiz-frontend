import React, { useEffect, useState } from 'react';
import './categories.css';
import QuizTile from '../../components/quizTitle/quizTitle';
import Cookies from 'js-cookie';

function Categories() {
  const [quizzes, setQuiz] = useState([]);
  useEffect(() => {
    fetchQuizzes();
  }, []);
  const fetchQuizzes = async () => {
    try {
      const token = Cookies.get('token');
      console.log('token: ', token);
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer ' + token,
        },
      };
      const result = await fetch('http://localhost:4000/quizList', options);
      if (result.status === 200) {
        const data = await result.json();
        console.log('quiz data', data.data);
        return setQuiz(data.data);
      } else {
        return alert('Quiz not found');
      }
    } catch (err) {
      console.log('err', err);
      return alert('fail to load');
    }
  };
  return (
    <div className="CategoryContainer">
      <div className="categoryLeft">
        <div>
          <h1 className="titleName">Choose Your category</h1>
        </div>
        <div className="chooseOptions">
          {quizzes.map((ele) => {
            return (
              <QuizTile onClick={() => {}} title={ele.title} quizId={ele._id} />
            );
          })}
        </div>
      </div>
      <div className="categoryimg"></div>
    </div>
  );
}

export default Categories;
