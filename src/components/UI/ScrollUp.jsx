import React from 'react';
import ChevronUp from "../../icons/ChevronUp";

const ScrollUp = () => {

    const handleScrollUp = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <div className={"ScrollUp"} onClick={handleScrollUp}>
            <ChevronUp/>
        </div>
    );
};

export default ScrollUp;
