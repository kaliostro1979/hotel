import {createContext, useState} from "react";

export const MainContext = createContext(null);

const MainProvider = ({children})=>{
    const [open, setOpen] = useState(false)

    return (
        <MainContext.Provider value={{open, setOpen}}>
            {children}
        </MainContext.Provider>
    )
}

export default MainProvider
