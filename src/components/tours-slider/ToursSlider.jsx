import React, {useRef} from 'react';
import Slider from "../UI/slider/Slider";
import TourSliderItem from "./TourSliderItem";
import SlidePrevButton from "../UI/slider/SliderPrevButton";
import SlideNextButton from "../UI/slider/SliderNextButton";

const ToursSlider = ({title, dataArray}) => {
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
                dataArray={dataArray}
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
