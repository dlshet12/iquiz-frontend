import React from "react";
import "./button.css"
const Button = ({title, onButtonClick =function(){}, isPrimary = true}) => {
    return(
        <button onClick= {onButtonClick}  className={`button ${isPrimary ? 'primaryButton' : 'secondaryButton'}`} >{title}</button>
    );
}
export default Button