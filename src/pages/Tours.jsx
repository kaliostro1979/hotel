import React from 'react';
import HeroBanner from "../components/hero-banner/HeroBanner";
import {usePageContent} from "../hooks/usePageContent";
import ToursIcon from "../icons/ToursIcon";
import ToursSlider from "../components/tours-slider/ToursSlider";
import {TOURS_ITEMS} from "../mock_data/tours.data";

const Tours = () => {
    const page_content = usePageContent("tours")

    return (
        <>
            <div className={"HeroBannerWithIcon"}>
                <HeroBanner page_content={page_content}/>
                <div className={"Icon"}>
                    <ToursIcon/>
                </div>
            </div>
            <div className={"HotTours"}>
                <ToursSlider title={"Hot Tours"} dataArray={TOURS_ITEMS.hot_tours}/>
                <ToursSlider title={"Sale"} dataArray={TOURS_ITEMS.sale}/>
            </div>
        </>
    );
};

export default Tours;
