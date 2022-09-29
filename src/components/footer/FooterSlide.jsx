import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { MainContext } from "../../context/MainContext";
import {useTranslation} from "react-i18next";

const FooterSlide = ({data}) => {
    const {activeLanguage} = useContext(MainContext)
    const {t} = useTranslation()
    return (
        <div>
            <Link to={activeLanguage + data.path}>{t(`title.${data.name.toLowerCase()}`)}</Link>
        </div>
    );
};

export default FooterSlide;
