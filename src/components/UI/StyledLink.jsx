import React from 'react';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const StyledLink = ({text, url, dark, callBack, navigationLink}) => {
    const {t} = useTranslation()

    return (
        <Link
            to={url}
            className={dark ? "Button Dark" : "Button"}
            onClick={navigationLink ? callBack : null}
        >
            {t(`buttons.${text && text.toLowerCase()}`)}
        </Link>
    );
};

export default StyledLink;
