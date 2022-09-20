import React, { useEffect, useState } from 'react';
import './questions.css';
import TestQuestions from '../../components/testquestions/testquestions';
import Cookies from 'js-cookie';
import { useNavigate, useLocation } from 'react-router-dom';

function Questions() {
    const { state } = useLocation();
    const { quizId, quizTitle } = state;
    const navigate = useNavigate();
    const [questions, setquestion] = useState([]);
    const [answers, setAnswers] = useState({});

    const handleAnswerChange = (questionId, answer) => {
        console.log('QuestionId: ', questionId);
        setAnswers({ ...answers, [questionId]: answer });
    };
    const handleSubmit = async () => {
        console.log('Answers: ', answers);
        const questionsList = Object.keys(answers);
        const answersPayload = [];
        for (const que of questionsList) {
            answersPayload.push({
                questionId: que,
                answer: parseInt(answers[que]),
            });
        }
        console.log(answersPayload);
        const token = Cookies.get('token');
        const info = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: 'Bearer ' + token,
            },
            body: JSON.stringify({ quizId: quizId, answers: answersPayload }),
        };
        const response = await fetch('http://localhost:4000/submitQuiz', info);
        if (response.status === 200) {
            return navigate('/score', { state: { quizId: quizId } });
        } else {
            return alert('registeration failed');
        }
    };
    useEffect(() => {
        const fetchQuestions = async () => {
            console.log('QUIZ ID: ', quizId);
            try {
                const token = Cookies.get('token');
                const header = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: 'Bearer ' + token,
                    }
                };
                const sol = await fetch(
                    `http://localhost:4000/quizQuestion/${quizId}`,
                    header
                );
                if (sol.status === 200) {
                    const solRes = await sol.json();
                    console.log('questipons: ', solRes.data);
                    return setquestion(solRes.data);
                } else {
                    return alert('question not found');
                }
            } catch (err) {
                console.log('errrrrrrr', err);
                return alert('fail to load');
            }
        }; fetchQuestions();
    }, []);
    return (
        <div className="questionscontainer">
            <div>
                <h1 className="questionTile">{quizTitle}</h1>
            </div>
            <div className="questionbody">
                {questions.map((ele, idx) => {
                    return (
                        <TestQuestions
                            question={ele.question}
                            options={ele.option}
                            qnum={idx}
                            questionId={ele._id}
                            key={idx}
                            onChange={handleAnswerChange}
                        />
                    );
                })}
            </div>
            <div className="subbutton">
                <button
                    onClick={handleSubmit}
                    className="buttonstyle"
                    style={{
                        backgroundColor: '#F68F00',
                        color: 'white',
                        boxShadow: '4px 3px #cdb4b4',
                    }}
                    type="button"
                >
                    Submit
                </button>
            </div>
        </div>
    );
}
export default Questions;
