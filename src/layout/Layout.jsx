import Header from "../components/header/Header";
import NavigationMenuWrapper from "../components/navigation-menu/NavigationMenuWrapper";
import Footer from "../components/footer/Footer";
import { useLocation } from "react-router-dom";


const Layout = ({ children }) => {
    const { pathname } = useLocation();
    const pathLength = pathname.split("/").length

    return (
        <>
            <Header light={true}/>
            <NavigationMenuWrapper/>
            <main className={"Wrapper"}>
                {children}
            </main>
            {
                pathLength > 2 ? <Footer/> : null
            }
        </>
    );
};

export default Layout;
