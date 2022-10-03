import React from 'react';
import HeroBanner from "../components/hero-banner/HeroBanner";
import {usePageContent} from "../hooks/usePageContent";
import {useLocation} from "react-router-dom";

const Booking = () => {
    const location = useLocation()
    const currentLocation = location.pathname.split("/")[2]
    const page_content = usePageContent(currentLocation)

    return (
        <HeroBanner page_content={page_content && page_content} />
    );
};

export default Booking;
