import react from "react";
import "./testquestions.css"
const TestQuestions = ({ question,options}) => {
   
    return (
        <div>
            <div >{question}</div>
            <div >{options[0]}</div>
            <div >{options[1]}</div>
            <div >{options[2]}</div>
            <div >{options[3]}</div>
        </div>
         

    );
} 
export default TestQuestions;