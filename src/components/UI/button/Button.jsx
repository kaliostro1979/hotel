import React from 'react';
import { StyledButton } from "./Button.styled";



const Button = ({text, type, dark}) => {
    return (
        <StyledButton className={dark ? "Button Dark" : "Button"} type={type}>
            {text}
        </StyledButton>
    );
};

export default Button;
