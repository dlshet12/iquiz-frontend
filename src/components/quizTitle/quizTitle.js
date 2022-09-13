import React from "react";
import "./quizTitle.css"
const QuizTile = ({ title, onClick = function () { }, quizId }) => {
    return (
        <button onClick={onClick} className="quiztile" quizId={quizId}>{title}</button>
    );
}
export default QuizTile;