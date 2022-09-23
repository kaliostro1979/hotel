import React from 'react';
import HeroBanner from "../components/hero-banner/HeroBanner";
import {usePageContent} from "../hooks/usePageContent";

const Booking = () => {
    const page_content = usePageContent("booking")

    return (
        <div className={"Container"}>
            <HeroBanner page_content={page_content && page_content} />
            <div style={{width: "600px", height: "600px", background: "black"}}>
                <svg style={{color: "white", width: "auto"}}>
                    <use xlinkHref={`#hostel`} />
                </svg>
            </div>
        </div>
    );
};

export default Booking;
