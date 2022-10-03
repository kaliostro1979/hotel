import React from 'react';
import HeroBanner from "../components/hero-banner/HeroBanner";
import {usePageContent} from "../hooks/usePageContent";

const Booking = () => {
    const page_content = usePageContent()

    return (
        <HeroBanner page_content={page_content && page_content} />
    );
};

export default Booking;
