import React, {useContext} from 'react';
import {ROUTES} from "../../../constants/routes.constants";
import {NavLink} from "react-router-dom";
import {MainContext} from "../../../context/MainContext";
import {useTranslation} from "react-i18next";

const NavigationMenuList = () => {
    const {activeLanguage, setOpen} = useContext(MainContext)
    const {t} = useTranslation()

    const handleIsOpen = () => {
        setOpen(false)
    }
    return (
        <div className={"NavigationListContainer"}>
            <ul className={"NavigationList"}>
                {
                    ROUTES.map(route => {
                        return (
                            <li key={route.name} className={"NavigationListItem"}>
                                <NavLink
                                    to={activeLanguage + route.path}
                                    className={(navData) => (navData.isActive ? "Active" : '')}
                                    onClick={handleIsOpen}
                                >{t(`title.${route.name.toLowerCase()}`)}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default NavigationMenuList;
