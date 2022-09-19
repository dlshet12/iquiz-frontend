import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./score.css";
import Cookies from 'js-cookie';
// import { useHistory } from "react-router-dom"; 

function Score(){
    const [ scores, setScores] = useState([]);
    const { state } = useLocation();
    const { quizId } = state;
    // const { history } = useHistory;
    useEffect(() => {
      fetchScore();
    }, []);
    // window.history.pushState(null, null, window.location.href);
    // window.onpopstate = function(event) {
    //     history.go(1);
    // }
    const fetchScore = async () => {
         
        try {
            const token = Cookies.get('token');
            const testHead = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                     authorization: 'Bearer ' + token, 
                }
        };
        console.log("fist workkk"); 
            const secRes = await fetch(`http://localhost:4000/getScore/${quizId}`,testHead)
            console.log("secon workkk"); 
            if ( secRes.status === 200) {
             const secResult = await secRes.json();
             return setScores(secResult.data.score)
            } else {
                return alert ('score not found');
            }
        } catch (err) {
            console.log('errr', err);
            return alert('fail to load');
        }
    }
    return (
        <div className="scorecontainer">
            <div className="scoreimg">
            </div>
            <div className="scoreview">
                <div>
                    <h1 className="scoreTitle">Your Score</h1>
                </div>
                <div className="scorenum">
                    <div className="scorenum left">{scores}</div>
                    <div className="scorenum right">10</div>
                </div>
            </div>
        </div>
    )
}
export default Score;