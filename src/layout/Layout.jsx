import Header from "../components/header/Header";
import NavigationMenuWrapper from "../components/navigation-menu/NavigationMenuWrapper";
import Footer from "../components/footer/Footer";
import { useLocation } from "react-router-dom";
import ScrollUp from "../components/UI/ScrollUp";
import {useContext, useEffect} from "react";
import {MainContext} from "../context/MainContext";


const Layout = ({ children }) => {
    const { pathname } = useLocation();
    const pathLength = pathname.split("/").length
    const { isShow, setIsShow, setOpen, open } = useContext(MainContext)

    useEffect(()=>{
        if (isShow){
            document.body.setAttribute("data-modal", 'show');
        }else {
            document.body.removeAttribute("data-modal")
        }
    }, [isShow])

    useEffect(()=>{
        setIsShow(false)
    }, [setIsShow, pathname])

    const toggleMenu = ()=>{
        setOpen(!open)
    }

    return (
        <>
            <Header light={true} navigationLink={false} buttonText={"Booking"} url={"booking"} callBack={toggleMenu}/>
            <NavigationMenuWrapper/>
            <main className={"Wrapper"} data-modal={isShow}>
                {children}
            </main>
            {
                pathLength > 2 ? (<><Footer/> <ScrollUp/></>) : null
            }
        </>
    );
};

export default Layout;
