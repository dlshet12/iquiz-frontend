import React from "react";
import "./button.css"
const Button = ({title, isPrimary = true}) => {
    return(
        <button className={`button ${isPrimary ? 'primaryButton' : 'secondaryButton'}`} >{title}</button>
    );
}
export default Button