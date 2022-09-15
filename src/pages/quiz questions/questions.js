import React from "react";
import "./questions.css";

function Questions() {
    return (
        <div className="questionscontainer">
            <div >
                <h1 className="questionTile">DSA</h1>
            </div>
            <div className="questionbody">
                <div>
                    <div>1.A website that lets anyone add, edit, or delete pages of content is called a</div>
                  <div><input type="radio"/>wiki</div>
                    <div><input type="radio"/>online forum</div>
                    <div><input type="radio"/>lurker site</div>
                    <div><input type="radio"/>social network</div>
                </div>
                <div>
                    <div>2.Today the most popular social networking site is</div>
                    <div><input type="radio"/>op1</div>
                    <div><input type="radio"/>op2</div>
                    <div><input type="radio"/>op3</div>
                    <div><input type="radio"/>op4</div>
                </div>
                <div>
                    <div>3.Creating a website or group that looks like it originated from concerned grassroots efforts of citizens is known as</div>
                    <div><input type="radio"/>op1</div>
                    <div><input type="radio"/>op2</div>
                    <div><input type="radio"/>op3</div>
                    <div><input type="radio"/>op4</div>
                </div>
            </div>
            <div className="subbutton">
                <button className="buttonstyle" style={{backgroundColor:"#F68F00", color:'white', boxShadow:'4px 3px #cdb4b4'}} type="button">Submit</button>
            </div>
        </div>
    )
}
export default Questions;