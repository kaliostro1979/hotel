import Header from "../header/Header";
import NavigationMenuWrapper from "../navigation-menu/NavigationMenuWrapper";
import { useContext } from "react";
import { MainContext } from "../../context/MainContext";

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
