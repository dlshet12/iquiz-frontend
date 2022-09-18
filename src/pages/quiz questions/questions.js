import React, { useEffect, useState } from "react";
import "./questions.css";
import TestQuestions from "../../components/testquestions/testquestions"
import Cookies from "js-cookie";
import { useNavigate, useLocation} from 'react-router-dom';

function Questions() {
    const {state} = useLocation();
    const {quizId, quizTitle} = state;
    const navigate = useNavigate();
    const [ questions , setquestion ] = useState([]);
    useEffect(() => {fetchQuestions();},[]);

    const handleSubmit = () => {
        navigate('/score');
   }

    const fetchQuestions = async() => 
     {
        console.log("QUIZ ID: ", quizId)
        try {
            const token = Cookies.get('token')
            const header = {
                method: 'GET',
                headers:{'Content-Type': 'application/json','authorization': "Bearer " + token  } 
            };
            const sol = await fetch(`http://localhost:4000/quizQuestion/${quizId}`,header);
            if(sol.status===200) {
              const solRes = await sol.json()
              console.log("questipons: ", solRes.data)
              return setquestion(solRes.data);
            }
                else {
               return alert ("question not found")
            }
        }
            catch(err){
               console.log("errrrrrrr",err);
               return alert("fail to load");
            } 
        }
    return (
        <div className="questionscontainer">
            <div >
                <h1 className="questionTile">{quizTitle}</h1>
            </div>
            <div className="questionbody">
            {
                questions.map((ele, idx) => {
                    return <TestQuestions question={ele.question} options={ele.option} key={idx} qnum={idx} />
               })
            }
            </div>
            <div className="subbutton">
                <button onClick={handleSubmit} className="buttonstyle" style={{backgroundColor:"#F68F00", color:'white', boxShadow:'4px 3px #cdb4b4'}} type="button">Submit</button>
                
            </div>
        </div>
    )
}
export default Questions;