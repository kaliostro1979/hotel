import React from 'react';
import HeroBanner from "../components/hero-banner/HeroBanner";
import {usePageContent} from "../hooks/usePageContent";
import ToursIcon from "../icons/ToursIcon";
import ToursSlider from "../components/tours-slider/ToursSlider";
import {TOURS_ITEMS} from "../mock_data/tours.data";
import SlideList from "../components/page-list/SlideList";
import { INFO_DATA_LIST } from "../mock_data/hotel.info.data";
import ImageWithAccordion from "../components/image-with-accordion/ImageWithAccordion";
import { ACCORDION_ITEMS } from "../mock_data/accordion.data";
import Subscribe from "../components/subscribe/Subscribe";

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
            <div className={"ToursSliderContainer"}>
                <ToursSlider title={"Hot Tours"} dataArray={TOURS_ITEMS.hot_tours}/>
            </div>
            <div className={"ToursSliderContainer"}>
                <ToursSlider title={"Sale"} dataArray={TOURS_ITEMS.sale}/>
            </div>
            <div className={"ToursSliderContainer"}>
                <ToursSlider title={"Tours"} dataArray={TOURS_ITEMS.tours}/>
            </div>
            <SlideList sectionClass={"List SectionList"} data={INFO_DATA_LIST}/>
            <ImageWithAccordion data={ACCORDION_ITEMS.tours}/>
            <Subscribe/>
        </>
    );
};

export default Tours;
