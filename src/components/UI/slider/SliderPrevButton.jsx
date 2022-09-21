import SliderLeftArrowIcon from "../../../icons/SliderLeftArrowIcon";
import {forwardRef} from "react";


const SlidePrevButton  = forwardRef((props, ref)=>{
    return (
        <button className={"SliderButton"} ref={ref}>
            <SliderLeftArrowIcon/>
        </button>
    );
})

SlidePrevButton.displayName = "SlidePrevButton"

export default SlidePrevButton
