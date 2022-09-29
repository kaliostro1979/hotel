import Header from "../../header/Header";
import {useContext} from "react";
import {MainContext} from "../../../context/MainContext";

const NavigationMenuHeader = () => {
    const {setIsShow, setOpen} = useContext(MainContext)

    const handleNavHeaderLink = ()=>{
        setOpen(false)
        setIsShow(true)
    }

    return (
      <Header
          light={false}
          navigationLink={true}
          buttonText={"Log in/Sign Up"}
          url={"login"}
          callBack={handleNavHeaderLink}
      />
    );
};

export default NavigationMenuHeader;
