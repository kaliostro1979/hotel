import React, {useContext} from 'react';
import BurgerMenuIcon from "../../icons/BurgerMenuIcon";
import Logo from "../../icons/Logo";
import StyledLink from "../UI/StyledLink";
import { Link } from "react-router-dom";
import {MainContext} from "../../context/MainContext";
import CloseIcon from "../../icons/CloseIcon";

const Header = ({light, navigationLink}) => {
    const {setOpen, open, activeLanguage} = useContext(MainContext)

    const toggleMenu = ()=>{
        setOpen(!open)
    }

    return (
    <header className={light ? "Header" : "Header Dark"}>
     <div className={"HeaderMenuIconWrapper"} onClick={toggleMenu}>
         {light ? <BurgerMenuIcon/> : <CloseIcon/>}
     </div>
      <Link to={`/${activeLanguage}`} className={"HeaderMenuLogo"} onClick={()=>setOpen(false)}>
        <Logo/>
      </Link>
      <StyledLink text={"Booking"} url={`${activeLanguage}/booking`} dark={light} callBack={toggleMenu} navigationLink={navigationLink}/>
    </header>
  );
};

export default Header;
