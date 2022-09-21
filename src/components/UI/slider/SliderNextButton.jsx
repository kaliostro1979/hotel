import SliderRightArrowIcon from "../../../icons/SliderRightArrowIcon";
import {forwardRef} from "react";

const SlideNextButton  = forwardRef((props, ref)=>{
    return (
        <button className={"SliderButton"} ref={ref}>
            <SliderRightArrowIcon/>
        </button>
    );
})

SlideNextButton.displayName = "SlideNextButton"

export default SlideNextButton
