import React from 'react';

const Input = ({type, placeholder}) => {
    return (
        <input type={type} className={"ContactFormField"} placeholder={placeholder}/>
    );
};

export default Input;
