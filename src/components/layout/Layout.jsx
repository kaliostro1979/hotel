import Header from "../header/Header";
import NavigationMenuWrapper from "../navigation-menu/NavigationMenuWrapper";


const Layout = ({children}) => {

    return (
        <>
            <Header light={true}/>
            <NavigationMenuWrapper/>
            <div className={"Wrapper"}>
                {children}
            </div>
        </>
    );
};

export default Layout;
