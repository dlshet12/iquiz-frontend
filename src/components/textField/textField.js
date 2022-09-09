import React from "react";

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