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
import {getInfoData} from "../redux/slices/info.slice";

const Tours = () => {
    const page_content = usePageContent()
    const dispatch = useDispatch()

    const { tours, variants, isLoading, error } = useSelector(state => state.main.tours)
    const { data } = useSelector(state => state.main.info)

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
            <SlideList sectionClass={"List SectionList Section"} data={data}/>
            <br/>
            <ImageWithAccordion data={tours}/>
            <Subscribe/>
        </>
    );
};

export default Tours;
