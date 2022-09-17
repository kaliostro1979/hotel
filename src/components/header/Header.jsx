import React from 'react';
import BurgerMenuIcon from "../icons/BurgerMenuIcon";
import Logo from "../icons/Logo";
import StyledLink from "../UI/StyledLink";
import { Link } from "react-router-dom";
import SocialIcons from "../UI/SocialIcons";

const Header = () => {
  return (
    <header className={"Header"}>
      <BurgerMenuIcon/>
      <SocialIcons/>
      <Link to={"/"}>
        <Logo/>
      </Link>
      <StyledLink text={"Booking"} url={"#"} dark={true}/>
    </header>
  );
};

export default Header;