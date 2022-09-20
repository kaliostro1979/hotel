import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { MainContext } from "../../context/MainContext";

const FooterSlide = ({data}) => {
    const {activeLanguage} = useContext(MainContext)

    return (
        <div>
            <Link to={activeLanguage + data.path}>{data.name}</Link>
        </div>
    );
};

export default FooterSlide;