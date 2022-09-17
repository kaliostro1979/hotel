import React from 'react';
import {ROUTES} from "../../../constants/routes.constants";
import {NavLink} from "react-router-dom";

const NavigationMenuList = () => {
    return (
        <div className={"NavigationListContainer"}>
            <ul className={"NavigationList"}>
                {
                    ROUTES.map(route => {
                        return (
                            <li key={route.name} className={"NavigationListItem"}>
                                <NavLink
                                    to={route.path}
                                    className={(navData) => (navData.isActive ? "Active" : '')}
                                >{route.name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default NavigationMenuList;
