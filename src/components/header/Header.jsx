import React, {useContext, useState} from 'react';
import BurgerMenuIcon from "../../icons/BurgerMenuIcon";
import Logo from "../../icons/Logo";
import StyledLink from "../UI/StyledLink";
import { Link } from "react-router-dom";
import {MainContext} from "../../context/MainContext";

const Header = () => {
    const {setOpen} = useContext(MainContext)

    const toggleMenu = ()=>{
        setOpen(true)
    }

    return (
    <header className={"Header"}>
     <div className={"HeaderMenuIconWrapper"} onClick={toggleMenu}>
         <BurgerMenuIcon/>
     </div>
      <Link to={"/"}>
        <Logo/>
      </Link>
      <StyledLink text={"Booking"} url={"#"} dark={true}/>
    </header>
  );
};

export default Header;
