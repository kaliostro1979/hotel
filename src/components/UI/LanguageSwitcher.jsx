import React, { useContext } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { MainContext } from "../../context/MainContext";
import { LOCALES } from "../../constants/locales.constants";

const LanguageSwitcher = () => {
  const {activeLanguage, setActiveLanguage, setOpen} = useContext(MainContext)
  const navigate = useNavigate()
  const changeLanguage = (language)=>{
    setActiveLanguage(language)
    setOpen(false)

    const currentLocation = window.location.pathname.split("/")
    currentLocation[1] = language
    const newLocation = currentLocation.join("/")
    navigate(newLocation)
  }

  return (
        <div className={"LanguageSwitcherWrapper"}>
            <ul className={"LanguageSwitcherList"}>
              {
                LOCALES.map(locale=>{
                  return (
                    <li
                      className={locale.code === activeLanguage ? "LanguageSwitcherListItem Active" : "LanguageSwitcherListItem"}
                      onClick={()=>changeLanguage(locale.code)}
                      key={locale.code}
                    >{locale.name}</li>
                  )
                })
              }
            </ul>
        </div>
    );
};

export default LanguageSwitcher;
