import React, { useContext } from 'react';
import { ROUTES } from "../../../constants/routes.constants";
import { NavLink } from "react-router-dom";
import { MainContext } from "../../../context/MainContext";

const NavigationMenuList = () => {
  const { activeLanguage, setOpen } = useContext(MainContext)

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
