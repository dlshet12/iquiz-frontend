import React from 'react';
import { useNavigate } from 'react-router-dom';
import './quizTitle.css';
const QuizTile = ({ title, quizId }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate('/Questions', { state: { quizId: quizId, quizTitle: title } });
      }}
      className="quiztile"
    >
      {title}
    </button>
  );
};
export default QuizTile;
