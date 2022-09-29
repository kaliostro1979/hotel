import React from 'react';
import ContactUs from "../contact-us/ContactUs";
import SocialIcons from "../UI/SocialIcons";
import MiniFooter from "./MiniFooter";
import FooterLinksList from "../UI/FooterLinksList";
import Slider from "../UI/slider/Slider";
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
            </div>
            <Slider
                Component={FooterSlide}
                dataArray={ROUTES}
                className={"FooterSlider"}
                sliderClassName={"FooterSliderItem"}
                loop={true}
                slidesPerView={"auto"}
                centeredSlides={true}
                spaceBetween={50}
            />
            <FooterLinksList light={true}/>
            <MiniFooter/>
        </footer>
    );
};

export default Footer;
