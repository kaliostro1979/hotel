import React from 'react';
import ContactUs from "../contact-us/ContactUs";
import SocialIcons from "../UI/SocialIcons";
import MiniFooter from "./MiniFooter";
import FooterLinksList from "../UI/FooterLinksList";
import Slider from "../Slider";
import FooterSlide from "./FooterSlide";
import { ROUTES } from "../../constants/routes.constants";

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
            <Slider
                Component={FooterSlide}
                dataArray={ROUTES}
                className={"FooterSlider"}
                sliderClassName={"FooterSliderItem"}
                loop={true}
                slidesPerView={10}
                centeredSlides={true}
            />
            <MiniFooter/>
        </footer>
    );
};

export default Footer;