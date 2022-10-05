import {createContext, useState} from "react";
import Cookies from 'js-cookie'

export const MainContext = createContext(null);

const MainProvider = ({children})=>{
    const currentLocale = window.localStorage.getItem("i18nextLng")
    const [open, setOpen] = useState(false)
    const [activeLanguage, setActiveLanguage] = useState(currentLocale || "hy")
    const [swiper, setSwiper] = useState(null);
    const [activeRoomIndex, setActiveRoomIndex] = useState(0)
    const [isShow, setIsShow] = useState(false)
    const [showScrollUp, setShowScrollUp] = useState(false)

    window.addEventListener("scroll", function (event){
        if (this.scrollY >= 500) {
            setShowScrollUp(true)
        }else {
            setShowScrollUp(false)
        }
    })

    return (
        <MainContext.Provider value={{
            open,
            setOpen,
            activeLanguage,
            setActiveLanguage,
            Cookies,
            swiper,
            setSwiper,
            activeRoomIndex,
            setActiveRoomIndex,
            isShow,
            setIsShow,
            showScrollUp
        }}>
            {children}
        </MainContext.Provider>
    )
}

export default MainProvider
