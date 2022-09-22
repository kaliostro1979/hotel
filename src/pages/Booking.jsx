import React from 'react';
import HeroBanner from "../components/hero-banner/HeroBanner";
import {usePageContent} from "../hooks/usePageContent";

const Booking = () => {
    const page_content = usePageContent("booking")

    return (
        <div className={"Container"}>
            <HeroBanner page_content={page_content && page_content} />
        </div>
    );
};

export default Booking;
