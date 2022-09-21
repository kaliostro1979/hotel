import { useSwiper } from 'swiper/react';
import SliderLeftArrowIcon from "../../icons/SliderLeftArrowIcon";

export default function SlidePrevButton() {
    const swiper = useSwiper();

    return (
        <button onClick={() => swiper.slidePrev()} className={"SliderButton"}>
            <SliderLeftArrowIcon/>
        </button>
    );
}