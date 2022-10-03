import React, {useContext} from 'react';
import BurgerMenuIcon from "../../icons/BurgerMenuIcon";
import Logo from "../../icons/Logo";
import StyledLink from "../UI/StyledLink";
import { Link } from "react-router-dom";
import {MainContext} from "../../context/MainContext";
import CloseIcon from "../../icons/CloseIcon";

const Header = ({light, navigationLink, buttonText, url, callBack}) => {
    const {setOpen, activeLanguage} = useContext(MainContext)

    return (
    <header className={light ? "Header" : "Header Dark"}>
     <div className={"HeaderMenuIconWrapper"} onClick={callBack}>
         {light ? <BurgerMenuIcon/> : <CloseIcon/>}
     </div>
      <Link to={`/${activeLanguage}`} className={"HeaderMenuLogo"} onClick={()=>setOpen(false)}>
        <Logo/>
      </Link>
      <StyledLink
          text={buttonText}
          url={`${activeLanguage}/${url}`}
          dark={light}
          callBack={callBack}
          navigationLink={navigationLink}
      />
    </header>
  );
};

export default Header;
