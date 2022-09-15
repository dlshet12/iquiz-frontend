import React, { useEffect, useState } from "react";
import "./categories.css";
import { useNavigate } from 'react-router-dom'
import QuizTile from "../../components/quizTitle/quizTitle";

function Categories() {
    console.log("heeelloooooo");
    const { quizzes, setQuiz } = useState([]);
    const navigate = useNavigate();

    useEffect(() => { fetchQuizzes(); }, []);

    const fetchQuizzes = async () => {
        try {
            console.log("body:", {});
            const options = {
                method: 'GET',
                Headers: { 'Content-Type': 'application/json' },

            };
            console.log("abhays is 🍥🍥🍥🍥🍣")
            const result = await fetch('http://localhost:4000/quizList', options);
            if (result.status === 200) {
                const data = await result.json()
                return setQuiz(data.data)
            } else {
                return alert("")
            }
        }
        catch (err) {
            console.log("err", err);
            return alert("failed");
        }
    }

    return (
        <div className="CategoryContainer">
            <div className="categoryLeft">
                <div>
                    <h1 className="titleName">Choose Your category</h1>
                </div>
                <div className="chooseOptions">
                {
                    quizzes.map((ele) => {
                   return <QuizTile onClick={() => {}} title={ele.title}/>
              
                   })
                }
                </div>
            </div>
            <div className="categoryimg"></div>
        </div>
    )
}

export default Categories;









