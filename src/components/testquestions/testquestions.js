import react from "react";
import "./testquestions.css"
const TestQuestions = ({question,options,qnum}) => {
   
    return (
        <div>
            <div >{qnum+1} {question}</div>
            <div ><input type="radio"/>{options[0]}</div>
            <div ><input type="radio"/>{options[1]}</div>
            <div ><input type="radio"/>{options[2]}</div>
            <div ><input type="radio"/>{options[3]}</div>
        </div>
         

    );
} 
export default TestQuestions;