import React, {useRef} from 'react';
import Slider from "../UI/slider/Slider";
import TourSliderItem from "./TourSliderItem";
import {TOURS_ITEMS} from "../../mock_data/tours.data";
import SlidePrevButton from "../UI/slider/SliderPrevButton";
import SlideNextButton from "../UI/slider/SliderNextButton";

const ToursSlider = ({title}) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <>
            <div className={"ToursSliderHeader"}>
                <h2>{title}</h2>
               <div className={"ToursSliderArrows"}>
                   <SlidePrevButton ref={prevRef}/>
                   <SlideNextButton ref={nextRef}/>
               </div>
            </div>
            <Slider
                dataArray={TOURS_ITEMS}
                Component={TourSliderItem}
                className={"HotToursSlider"}
                sliderClassName={"HotToursSliderItem"}
                spaceBetween={20}
                centeredSlides={false}
                slidesPerView={"auto"}
                loop={false}
                nextEl={nextRef?.current}
                prevEl={prevRef?.current}
            />
        </>
    );
};

export default ToursSlider;
