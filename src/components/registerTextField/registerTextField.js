import React from "react";
import "./registerTextField.css"
const RegisterField = ({type, placeholder, onChange }) => {
    return (
        <input
            onChange={onChange}
            className="Ftextfield"
            type={type}
            placeholder={placeholder}
        />
    );
}
export default RegisterField;