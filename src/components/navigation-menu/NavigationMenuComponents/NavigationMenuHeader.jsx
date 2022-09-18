import React, { useContext } from 'react';
import Header from "../../header/Header";
import BurgerMenuIcon from "../../../icons/BurgerMenuIcon";
import { Link } from "react-router-dom";
import Logo from "../../../icons/Logo";
import StyledLink from "../../UI/StyledLink";
import { MainContext } from "../../../context/MainContext";
import CloseIcon from "../../../icons/CloseIcon";

const NavigationMenuHeader = () => {
    const { open, setOpen, activeLanguage } = useContext(MainContext)

    const toggleMenu = () => {
        setOpen(false)
    }

    return (
      <div className={"Header Dark"}>
          <div className={"HeaderMenuIconWrapper"} onClick={toggleMenu}>
              <CloseIcon/>
          </div>
          <Link to={`/${activeLanguage}`}>
              <Logo/>
          </Link>
          <StyledLink text={"Booking"} url={`/${activeLanguage}/#`} dark={true}/>
      </div>
    );
};

export default NavigationMenuHeader;
