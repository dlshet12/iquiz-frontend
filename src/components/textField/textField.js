import React from "react";
import "./textField.css"
const TextField = ({type, placeholder, onChange }) => {
    return (
        <input
            onChange={onChange}
            className="textfield"
            type={type}
            placeholder={placeholder}
        />
    );
}
export default TextField;