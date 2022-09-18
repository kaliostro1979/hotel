import React from 'react';
import StyledLink from "../UI/StyledLink";
import { Link } from "react-router-dom";
import BurgerMenuIcon from "../../icons/BurgerMenuIcon";
import Logo from "../../icons/Logo";

const Header = () => {
  return (
    <header className={"Header"}>
      <BurgerMenuIcon/>
      <Link to={"/"}>
        <Logo/>
      </Link>
      <StyledLink text={"Booking"} url={"#"} dark={false}/>
    </header>
  );
};

export default Header;