import React, { useEffect, useState } from "react";
import "./questions.css";
import TestQuestions from "../../components/testquestions/testquestions"
import Cookies from "js-cookie";
import { useNavigate} from 'react-router-dom';

function Questions() {
    const navigate = useNavigate();
    const [ questions , setquestion ] = useState([]);
    useEffect(() => {fetchQuestions();},[]);

    const handleSubmit = () => {
        navigate('/score');
   }

    const fetchQuestions = async() => 
     {
        try {
            console.log("body:",{});
            const token = Cookies.get('token')
            const quizQuestion = {
                method: 'GET',
                headers:{'Content-Type': 'application/json','authorization': "$Bearer " + token  } 
            };
            const sol = await fetch('http://localhost:4000/quizQuestion',quizQuestion);
            if(sol.status===200) {
              const data = await sol.json()
              console.log("question",data.data);
             return setquestion(data.data);
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
                <h1 className="questionTile">DSA</h1>
            </div>
            <div className="questionbody">
            {
                questions.map((ele) => {
                    return <TestQuestions  />
                    
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