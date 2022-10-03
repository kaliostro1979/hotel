import React, {useEffect, useRef} from 'react';
import Slider from "../UI/slider/Slider";
import PartnersSliderItem from "./PartnersSliderItem";
import SlidePrevButton from "../UI/slider/SliderPrevButton";
import SlideNextButton from "../UI/slider/SliderNextButton";
import {useDispatch, useSelector} from "react-redux";
import {getPartners} from "../../redux/slices/partners.slice";

const PartnersSlider = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const dispatch  = useDispatch()

    const partners = useSelector(state => state.main.partners.partners)

    useEffect(()=>{
        dispatch(getPartners())
    }, [dispatch])

    return (
        <div className={"PartnersSliderContainer"}>
            <div className={"PartnersSliderHeader"}>
                <h2 className={"PartnersSliderHeaderTitle"}>Our partners</h2>
                <div className={"PartnersSliderArrows"}>
                    <SlidePrevButton ref={prevRef}/>
                    <SlideNextButton ref={nextRef}/>
                </div>
            </div>
            <Slider
                dataArray={partners}
                className={"PartnersSlider"}
                Component={PartnersSliderItem}
                sliderClassName={"PartnersSlide"}
                slidesPerView={"auto"}
                loop={false}
                centeredSlides={false}
                spaceBetween={20}
                prevEl={prevRef?.current}
                nextEl={nextRef?.current}
            />
        </div>
    );
};

export default PartnersSlider;
