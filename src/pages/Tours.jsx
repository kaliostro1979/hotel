import React, {useEffect} from 'react';
import HeroBanner from "../components/hero-banner/HeroBanner";
import {usePageContent} from "../hooks/usePageContent";
import ToursIcon from "../icons/ToursIcon";
import ToursSlider from "../components/tours-slider/ToursSlider";
import SlideList from "../components/page-list/SlideList";
import ImageWithAccordion from "../components/image-with-accordion/ImageWithAccordion";
import Subscribe from "../components/subscribe/Subscribe";
import {useDispatch, useSelector} from "react-redux";
import {getToursAccordionData, getToursVariants} from "../redux/slices/tours.slice";
import Preloader from "../components/UI/Preloader";
import {useLocation} from "react-router-dom";
import {getInfoData} from "../redux/slices/info.slice";

const Tours = () => {
    const location = useLocation()
    const currentLocation = location.pathname.split("/")[2]

    const page_content = usePageContent(currentLocation)
    const dispatch = useDispatch()

    const accordionData = useSelector(state => state.main.tours.tours)
    const variants = useSelector(state => state.main.tours.variants)
    const infoData = useSelector(state => state.main.info.data)
    const isLoading = useSelector(state => state.main.tours.isLoading)
    const error = useSelector(state => state.main.tours.error)

    useEffect(()=>{
        dispatch(getToursAccordionData())
        dispatch(getToursVariants())
        dispatch(getInfoData())
    }, [dispatch])

    return (
        <>
            <div className={"HeroBannerWithIcon"}>
                <HeroBanner page_content={page_content}/>
                <div className={"Icon"}>
                    <ToursIcon/>
                </div>
            </div>
            {
                error ? <h1>{error}</h1> : null
            }
            {
                isLoading ? <Preloader/> : variants && variants.map((variant)=>{
                    return (
                        <div className={"ToursSliderContainer"} key={variant.id}>
                            <ToursSlider title={variant.title} dataArray={variant.items}/>
                        </div>
                    )
                })
            }
            <SlideList sectionClass={"List SectionList Section"} data={infoData}/>
            <br/>
            <ImageWithAccordion data={accordionData}/>
            <Subscribe/>
        </>
    );
};

export default Tours;
