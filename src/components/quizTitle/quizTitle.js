import React from 'react';
import { useNavigate } from 'react-router-dom';
import './quizTitle.css';
import Cookies from 'js-cookie';

const QuizTile = ({ title, quizId }) => {
    const navigate = useNavigate();
    return (
        <button
         onClick={ async() => {
                try {
                    const token = Cookies.get('token');
                    const quizHead = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: 'Bearer ' + token,
                }
                    };
                    const attemptedQuiz = await fetch(`http://localhost:4000/getScore/${quizId}`,quizHead)
                if (attemptedQuiz.status === 200) {
                  return navigate('/score', { state: {quizId : quizId}})
                } else {
                    navigate('/Questions', { state: { quizId: quizId, quizTitle: title } });
                }
                } catch (err) {
                    console.log('errr', err);
            return alert('fail to load');
                }
            }
            }
            className="quiztile"
        >
            {title}
        </button>
    );
};
export default QuizTile;
