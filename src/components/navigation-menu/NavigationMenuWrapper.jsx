import React, { useContext } from 'react';
import NavigationMenuHeader from "./NavigationMenuComponents/NavigationMenuHeader";
import LanguageSwitcher from "../UI/LanguageSwitcher";
import NavigationMenuList from "./NavigationMenuComponents/NavigationMenuList";
import { MainContext } from "../../context/MainContext";
import NavigationMenuFooter from "./NavigationMenuComponents/NavigationMenuFooter";

const NavigationMenuWrapper = () => {
  const { open } = useContext(MainContext)

  return (
    <div className={!open ? "NavigationMenu" : "NavigationMenu Open"}>
      <div className={"NavigationMenuContainer"}>
        <NavigationMenuHeader/>
        <LanguageSwitcher/>
        <NavigationMenuList/>
        <NavigationMenuFooter/>
      </div>
    </div>
  );
};

export default NavigationMenuWrapper;
