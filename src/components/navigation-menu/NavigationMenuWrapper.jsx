import React, {useContext} from 'react';
import NavigationMenuHeader from "./NavigationMenuComponents/NavigationMenuHeader";
import LanguageSwitcher from "../UI/LanguageSwitcher";
import NavigationMenuList from "./NavigationMenuComponents/NavigationMenuList";
import {MainContext} from "../../context/MainContext";
import NavigationMenuFooter from "./NavigationMenuComponents/NavigationMenuFooter";
import Contacts from "../UI/Contacts";

const NavigationMenuWrapper = () => {
    const {open} = useContext(MainContext)

    return (
        <div className={!open ? "NavigationMenu" : "NavigationMenu Open"}>
            <NavigationMenuHeader/>
            <div className={"NavigationMenuContainer"}>
                <LanguageSwitcher/>
                <div className={"NavigationMenuBody"}>
                    <NavigationMenuList/>
                    <Contacts/>
                </div>
                <NavigationMenuFooter/>
            </div>
        </div>
    );
};

export default NavigationMenuWrapper;
