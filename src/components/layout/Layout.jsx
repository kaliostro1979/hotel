import Header from "../header/Header";
import NavigationMenuWrapper from "../NavigationMenu/NavigationMenuWrapper";

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <NavigationMenuWrapper/>
            <div className={"Wrapper"}>
                {children}
            </div>
        </>
    );
};

export default Layout;
