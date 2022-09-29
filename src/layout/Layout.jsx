import Header from "../components/header/Header";
import NavigationMenuWrapper from "../components/navigation-menu/NavigationMenuWrapper";
import Footer from "../components/footer/Footer";
import { useLocation } from "react-router-dom";
import ScrollUp from "../components/UI/ScrollUp";
import Overlay from "../components/UI/modal/Overlay";


const Layout = ({ children }) => {
    const { pathname } = useLocation();
    const pathLength = pathname.split("/").length

    return (
        <>
            <Overlay/>
            <Header light={true} navigationLink={false}/>
            <NavigationMenuWrapper/>
            <main className={"Wrapper"}>
                {children}
            </main>
            {
                pathLength > 2 ? (<><Footer/> <ScrollUp/></>) : null
            }
        </>
    );
};

export default Layout;
