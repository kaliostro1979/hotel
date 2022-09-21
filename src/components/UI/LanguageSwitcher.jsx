import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {MainContext} from "../../context/MainContext";
import {LOCALES} from "../../constants/locales.constants";
import {useTranslation} from "react-i18next";


const LanguageSwitcher = () => {
    const {activeLanguage, setActiveLanguage, setOpen} = useContext(MainContext)
    const {i18n} = useTranslation()
    const navigate = useNavigate()

    const handleChangeLanguage = (language) => {
        i18n.changeLanguage(language).then()
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
                    LOCALES.map(locale => {
                        return (
                            <li
                                className={locale.code === activeLanguage ? "LanguageSwitcherListItem Active" : "LanguageSwitcherListItem"}
                                onClick={() => handleChangeLanguage(locale.code)}
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
