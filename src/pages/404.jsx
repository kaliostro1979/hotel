import React from 'react';
import {Link} from "react-router-dom";
import Logo from "../icons/Logo";
import NotFoundBackground from "../assets/images/404.jpg"
import RightArrowIcon from "../icons/RightArrowIcon";

const PageNotFound = () => {
    return (
        <div className={"NotFound"} style={{backgroundImage: `url(${NotFoundBackground})`}}>
            <div className={"NotFoundContent"}>
                <Logo/>
                <h1>Error 404</h1>
                <Link to={"/"}>
                    Home
                    <RightArrowIcon/>
                </Link>
            </div>
        </div>
    );
};

export default PageNotFound;
