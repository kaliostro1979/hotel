import React from 'react';
import ContactUs from "../contact-us/ContactUs";
import SocialIcons from "../UI/SocialIcons";
import MiniFooter from "./MiniFooter";
import FooterLinksList from "../UI/FooterLinksList";

const Footer = () => {
    return (
        <footer className={"Footer"}>
            <ContactUs/>
            <div className="Container">
                <div className={"FooterSocial"}>
                    <SocialIcons light={false}/>
                </div>
                <FooterLinksList light={true}/>
            </div>
            <MiniFooter/>
        </footer>
    );
};

export default Footer;