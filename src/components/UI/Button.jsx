import React from 'react';

const Button = ({text, type, dark}) => {
    return (
        <button className={dark ? "Button Dark" : "Button"} type={type}>
            {text}
        </button>
    );
};

export default Button;
