import React from 'react';
import {NavLink} from "react-router-dom";

const LanguageSwitcher = () => {
    return (
        <div className={"LanguageSwitcherWrapper"}>
            <ul className={"LanguageSwitcherList"}>
                <li className={"LanguageSwitcherListItem Active"}>
                    <NavLink className={"LanguageSwitcherListItemLink"} to={"/hy"}>ARM</NavLink>
                </li>
                <li className={"LanguageSwitcherListItem"}>
                    <NavLink className={"LanguageSwitcherListItemLink"} to={"/ru"}>RU</NavLink>
                </li>
                <li className={"LanguageSwitcherListItem"}>
                    <NavLink className={"LanguageSwitcherListItemLink"} to={"/en"}>ENG</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default LanguageSwitcher;
