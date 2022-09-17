import React from 'react';

const StyledLink = ({text, url, dark}) => {
    return (
        <a href={url} className={dark ? "Button" + " Dark" : "Button"}>
            {text}
        </a>
    );
};

export default StyledLink;
