import { useSwiper } from 'swiper/react';
import SliderRightArrowIcon from "../../icons/SliderRightArrowIcon";

export default function SlideNextButton() {
    const swiper = useSwiper();

    console.log(swiper);

    return (
        <button onClick={() => swiper.slideNext()} className={"SliderButton"}>
            <SliderRightArrowIcon/>
        </button>
    );
}