import {createContext, useState} from "react";
import Cookies from 'js-cookie'

export const MainContext = createContext(null);

const MainProvider = ({children})=>{
    const currentLocale = Cookies.get("i18next")
    const [open, setOpen] = useState(false)
    const [activeLanguage, setActiveLanguage] = useState(currentLocale || "hy")

    return (
        <MainContext.Provider value={{open, setOpen, activeLanguage, setActiveLanguage, Cookies}}>
            {children}
        </MainContext.Provider>
    )
}

export default MainProvider
