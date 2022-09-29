import React from 'react';

const TourSliderItem = ({data}) => {
    return (
        <div className={"HotToursSliderItemImage"}>
            <img src={data.src} alt={data.name}/>
            <div className={"TourPrice"}>
                <p>{data.price} amd</p>
            </div>
        </div>
    );
};

export default TourSliderItem;
