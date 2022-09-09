import React from "react";
import "./textField.css"
const TextField = ({type, placeholder}) => {
    return (
        <input
            className="textfield"
            type={type}
            placeholder={placeholder}
        />
    );
}
export default TextField;