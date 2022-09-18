import React from 'react';
import SocialIcons from "../../UI/SocialIcons";
import FooterLinksList from "../../UI/FooterLinksList";

const NavigationMenuFooter = () => {
    return (
        <div className={"NavigationMenuFooter"}>
            <FooterLinksList/>
            <SocialIcons light={true}/>
        </div>
    );
};

export default NavigationMenuFooter;
