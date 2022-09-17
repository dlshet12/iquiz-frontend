import react from "react";
import "./testquestions.css"
const TestQuestions = ({ questions,options, quizId}) => {
   
    return (
         <div >{questions}{options}</div>
    );
} 
export default TestQuestions;