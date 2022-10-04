import React from 'react';


const PartnersSliderItem = ({data}) => {

    return (
        <div className={"PartnersSliderItem"}>
            <img src={data.src} alt={data.name} className={"PartnersSliderItemInner"} loading={"lazy"}/>
        </div>
    );
};

export default PartnersSliderItem;
