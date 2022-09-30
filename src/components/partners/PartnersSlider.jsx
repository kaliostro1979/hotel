import React, {useRef} from 'react';
import Slider from "../UI/slider/Slider";
import {PARTNERS} from "../../mock_data/partners.data";
import PartnersSliderItem from "./PartnersSliderItem";
import SlidePrevButton from "../UI/slider/SliderPrevButton";
import SlideNextButton from "../UI/slider/SliderNextButton";

const PartnersSlider = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

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
                dataArray={PARTNERS}
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
