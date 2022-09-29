import React from 'react';
import Slider from "../UI/slider/Slider";
import MediaGalleryItem from "./MediaGalleryItem";

const MediaGallery = ({dataArray}) => {
    return (
        <div className={"MediaGallery Section"}>
            <Slider
                dataArray={dataArray}
                Component={MediaGalleryItem}
                sliderClassName={"MediaSlider"}
                slidesPerView={"auto"}
                loop={false}
                centeredSlides={false}
                spaceBetween={20}
            />
        </div>
    );
};

export default MediaGallery;
