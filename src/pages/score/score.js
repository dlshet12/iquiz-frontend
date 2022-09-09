import React from "react";
import "./score.css";

function Score() {
    return (
        <div className="container">
            <div className="scoreimg">
            </div>
            <div className="scoreview">
                <div>
                    <h1>Your Score</h1>
                </div>
                <div className="scorenum">
                    <div className="scorenum left">67</div>
                    <div className="scorenum right">100</div>
                </div>
            </div>
        </div>
    )
}
export default Score;