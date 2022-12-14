import react from 'react';
import './testquestions.css';
const TestQuestions = ({ question, questionId, options, qnum, onChange }) => {
  return (
    <div>
      <div>
        {qnum + 1} {question}
      </div>
      <div>
        <input
          type="radio"
          name={qnum}
          value={0}
          onChange={(event) => {
            console.log('changed');
            onChange(questionId, event.target.value);
          }}
        />
        {options[0]}
        <input
          type="radio"
          name={qnum}
          value={1}
          onChange={(event) => {
            onChange(questionId, event.target.value);
          }}
        />
        {options[1]}
        <input
          type="radio"
          name={qnum}
          value={2}
          onChange={(event) => {
            onChange(questionId, event.target.value);
          }}
        />
        {options[2]}
        <input
          type="radio"
          name={qnum}
          value={3}
          onChange={(event) => {
            onChange(questionId, event.target.value);
          }}
        />
        {options[3]}
      </div>
    </div>
  );
};
export default TestQuestions;
