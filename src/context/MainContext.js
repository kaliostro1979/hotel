import {createContext, useState} from "react";

export const MainContext = createContext(null);

const MainProvider = ({children})=>{
    const [open, setOpen] = useState(false)
    const [activeLanguage, setActiveLanguage] = useState("hy")

    return (
        <MainContext.Provider value={{open, setOpen, activeLanguage, setActiveLanguage}}>
            {children}
        </MainContext.Provider>
    )
}

export default MainProvider
