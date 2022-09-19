import Header from "../components/header/Header";
import NavigationMenuWrapper from "../components/navigation-menu/NavigationMenuWrapper";
import Footer from "../components/footer/Footer";
import { useLocation } from "react-router-dom";
import ScrollUp from "../components/UI/ScrollUp";


const Layout = ({ children }) => {
    const { pathname } = useLocation();
    const pathLength = pathname.split("/").length

    return (
        <>
            <Header light={true}/>
            <NavigationMenuWrapper/>
            <main className={"Wrapper"}>
                <div className="Container">
                    {children}
                </div>
            </main>
            {
                pathLength > 2 ? (<><Footer/> <ScrollUp/></>) : null
            }
        </>
    );
};

export default Layout;
