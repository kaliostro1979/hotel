import React, { useContext } from 'react';
import ChevronUp from "../../icons/ChevronUp";
import { MainContext } from "../../context/MainContext";

const ScrollUp = () => {

    const {showScrollUp} = useContext(MainContext)

    const handleScrollUp = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    console.log(showScrollUp);

    return (
        <div className={showScrollUp ? "ScrollUp Show" : "ScrollUp"} onClick={handleScrollUp}>
            <ChevronUp/>
        </div>
    );
};

export default ScrollUp;
