import React, {useContext} from 'react';
import NavigationMenuHeader from "./NavigationMenuComponents/NavigationMenuHeader";
import LanguageSwitcher from "../UI/LanguageSwitcher";
import NavigationMenuList from "./NavigationMenuComponents/NavigationMenuList";
import {MainContext} from "../../context/MainContext";

const NavigationMenuWrapper = () => {
    const {open} = useContext(MainContext)

    return (
        <div className={!open ? "NavigationMenu" : "NavigationMenu Open"}>
            <NavigationMenuHeader/>
            <LanguageSwitcher/>
            <NavigationMenuList/>
        </div>
    );
};

export default NavigationMenuWrapper;
